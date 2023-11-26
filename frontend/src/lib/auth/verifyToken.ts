
export default async function verify_token(token: string | undefined, url: string | undefined) {

    const res = await fetch(`${url}api/auth/token/verify/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "token": token
        }),
        cache: "no-store"
    })

    const data = await res.json()

    const response = {
        "data": data,
        "ok": res.ok
    }

    return response
}
