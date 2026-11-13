import { NextResponse } from "next/server"
import { AUTH_COOKIE_NAME, getAuthCookieOptions } from "@/lib/auth/jwt"

export async function POST() {
  const response = NextResponse.json({ ok: true })
  response.cookies.delete(AUTH_COOKIE_NAME)
  return response
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const redirectPath = searchParams.get("redirect") || "/login"
  const response = NextResponse.redirect(new URL(redirectPath, request.url))
  response.cookies.delete(AUTH_COOKIE_NAME)
  return response
}
