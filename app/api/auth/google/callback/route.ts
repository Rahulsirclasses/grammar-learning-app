import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { AUTH_COOKIE_NAME, getAuthCookieOptions, signAuthToken } from "@/lib/auth/jwt"
import { upsertGoogleUser } from "@/lib/mongodb/repositories/user-repository"

export async function GET(request: NextRequest) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(`${appUrl}/login?error=google_not_configured`)
  }

  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const error = searchParams.get("error")
  if (error || !code) {
    return NextResponse.redirect(`${appUrl}/login?error=google_cancelled`)
  }

  try {
    // Exchange code for tokens
    const redirectUri = `${appUrl}/api/auth/google/callback`
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    })

    console.log("[CB] Token exchange status:", tokenRes.status)

    if (!tokenRes.ok) {
      console.error("Google token exchange failed:", await tokenRes.text())
      return NextResponse.redirect(`${appUrl}/login?error=google_token_failed`)
    }

    const tokenData = await tokenRes.json()
    const accessToken = tokenData.access_token

    // Get user info from Google
    const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!userInfoRes.ok) {
      return NextResponse.redirect(`${appUrl}/login?error=google_userinfo_failed`)
    }

    const googleUser = await userInfoRes.json()
    const { id: googleId, email, name, picture } = googleUser

    if (!email) {
      return NextResponse.redirect(`${appUrl}/login?error=google_no_email`)
    }

    // Find or create user in MongoDB
    const user = await upsertGoogleUser({ googleId, email, name, picture })

    if (!user) {
      return NextResponse.redirect(`${appUrl}/login?error=google_user_failed`)
    }

    const token = await signAuthToken({
      id: user.id,
      role: user.role,
    })

    const response = NextResponse.redirect(
      user.phone ? `${appUrl}/dashboard` : `${appUrl}/onboarding`
    )
    const cookieOptions = getAuthCookieOptions()
    response.cookies.set(AUTH_COOKIE_NAME, token, cookieOptions)

    return response
  } catch (err) {
    console.error("Google OAuth callback error:", err)
    return NextResponse.redirect(`${appUrl}/login?error=google_server_error`)
  }
}
