import { NextRequest, NextResponse } from "next/server";
import { getUserStats } from "@/lib/mongodb/repositories/progress-repository";
import { requireAuth, handleAuthError } from "@/lib/auth/requireAuth";

export async function GET(request: NextRequest) {
    try {
        const { userId } = requireAuth(request);
        const stats = await getUserStats(userId);
        return NextResponse.json({ stats });
    } catch (error: any) {
        return handleAuthError(error);
    }
}
