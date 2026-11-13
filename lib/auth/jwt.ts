import { SignJWT, jwtVerify } from "jose"

export const AUTH_COOKIE_NAME = "auth_token"

export interface AuthTokenPayload {
  id: string
  role: string
}

function getSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error("Missing JWT_SECRET environment variable")
  return new TextEncoder().encode(secret)
}

export async function signAuthToken(payload: AuthTokenPayload): Promise<string> {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(getSecret())
}

export async function verifyAuthToken(token: string): Promise<AuthTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as unknown as AuthTokenPayload
  } catch (err) {
    console.error("[JWT] verify error:", err)
    return null
  }
}

export function getAuthCookieOptions() {
  const isProd = process.env.NODE_ENV === "production"

  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProd,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  }
}
