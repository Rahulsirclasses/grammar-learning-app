import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { AUTH_COOKIE_NAME, verifyAuthToken } from "@/lib/auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Get token from cookies
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

  // 2. Define protected and public routes
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/signup")
  const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/admin") || pathname.startsWith("/api/admin")
  const isApiRoute = pathname.startsWith("/api")

  // 3. Handle Authentication Logic
  if (token) {
    try {
      const payload = await verifyAuthToken(token)

      if (payload && payload.id) {
        // User is logged in
        if (isAuthRoute) {
          return NextResponse.redirect(new URL("/dashboard", request.url))
        }

        // Inject headers for API and Server Components
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set("x-user-id", payload.id)
        requestHeaders.set("x-user-role", payload.role || "user")

        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        })
      }
    } catch (error) {
      console.error("[Middleware] Token verification failed:", error)
    }
  }

  // 4. Protection for unauthenticated users
  if (isProtectedRoute) {
    if (isApiRoute) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes like login, signup, google)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
}
