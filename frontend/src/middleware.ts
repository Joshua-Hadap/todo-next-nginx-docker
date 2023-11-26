import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./middlewares/authMiddleware";

export async function middleware(request: NextRequest) { 
    
    const auth = await authMiddleware(request)
    return auth
}

export const config = {
    matcher: ["/", "/login"],
};
