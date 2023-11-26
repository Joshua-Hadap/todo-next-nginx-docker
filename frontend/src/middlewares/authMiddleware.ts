import { NextRequest, NextResponse } from "next/server";
import verifyToken from "../lib/auth/verifyToken";
import refreshToken from "../lib/auth/refreshToken"

const SERVER_URL = process.env.SERVER_URL

type Props = {
    request: NextRequest
}

export default async function auth(request: Props["request"]) {

    const pathname = request.nextUrl.pathname
    const access_token = request.cookies.get("access_token")?.value
    const refresh_token = request.cookies.get("refresh_token")?.value

    const noToken = !access_token || !refresh_token

    if (noToken){
        if (pathname !== "/login"){
            return NextResponse.redirect(new URL("/login", request.url))
        }
        if (pathname === "/login") return NextResponse.next()
    }

    let isAccessExpired = false

    // Verify Token
    let tokenVerification = await verifyToken(access_token, SERVER_URL)

    if (!tokenVerification.ok) {
        tokenVerification = await verifyToken(refresh_token, SERVER_URL)
        isAccessExpired = true
    }

    if (!tokenVerification.ok && pathname !== "/login"){
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (!tokenVerification.ok){
        return NextResponse.next()
    }

    if (isAccessExpired){
        const tokenRefreshResp = await refreshToken(refresh_token, SERVER_URL)
        
        const nextResponse = NextResponse.next()
        nextResponse.cookies.set("access_token", tokenRefreshResp.data.access, {
            httpOnly: true,
            path: "/",
        })
        return nextResponse
    }
    if (pathname === "/login"){
        return NextResponse.redirect(new URL("/", request.url));
    }
}
