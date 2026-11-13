import { SignJWT } from "jose";

async function signAuthToken(payload: any) {
    const secret = "mysupersecretkey123456789abcdef";
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("7d")
        .sign(new TextEncoder().encode(secret));
}

async function run() {
    try {
        const token = await signAuthToken({
            id: "36e16437-bfef-46ea-95b5-e0596e5a391d",
            role: "super-admin"
        });

        const res = await fetch("http://localhost:3000/api/admin/users/69ac80099ccffa16fb6e7c74", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `auth_token=${token}`
            },
            body: JSON.stringify({ action: "enable" })
        });

        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Response:", text);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
