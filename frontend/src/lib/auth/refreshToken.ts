type ResponseData = {
    data: {
        access: string;
    };
}

export default async function refresh_token(token: string | undefined, url: string | undefined) {

    const res = await fetch(`${url}api/auth/token/refresh/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "token": token
        }),
        cache: "no-store"
    })

    const data: ResponseData["data"] = await res.json()

    const response = {
        "data": data,
        "ok": res.ok
    }

    return response
}
