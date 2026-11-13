
import { NextRequest } from "next/server";

export interface AuthUser {
    userId: string;
    role: string;
}

/**
 * Checks if the request has been authorized by middleware and returns user details.
 * Throws an error if unauthorized.
 */
export function requireAuth(request: NextRequest): AuthUser {
    const userId = request.headers.get("x-user-id");
    const role = request.headers.get("x-user-role");

    if (!userId || !role) {
        throw new Error("UNAUTHORIZED");
    }

    return { userId, role };
}

/**
 * Checks if the user is authorized and has one of the allowed roles.
 * Throws an error if unauthorized or forbidden.
 */
export function requireRole(request: NextRequest, allowedRoles: string[]): AuthUser {
    const user = requireAuth(request);

    if (!allowedRoles.includes(user.role)) {
        throw new Error("FORBIDDEN");
    }

    return user;
}

/**
 * Common handler for auth errors in API routes.
 */
export function handleAuthError(error: any) {
    if (error.message === "UNAUTHORIZED") {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (error.message === "FORBIDDEN") {
        return Response.json({ error: "Forbidden" }, { status: 403 });
    }
    console.error("[handleAuthError] Unhandled error:", error.message, error.stack);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
}
