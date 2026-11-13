
import { NextRequest, NextResponse } from "next/server";
import { requireAuth, handleAuthError } from "@/lib/auth/requireAuth";
import { savePracticeResult } from "@/lib/mongodb/repositories/progress-repository";

export async function POST(request: NextRequest) {
    try {
        const { userId } = requireAuth(request);

        // Security check: Verify user is still active before saving results
        const { findUserById } = await import("@/lib/mongodb/repositories/user-repository");
        const user = await findUserById(userId) as any;
        
        if (!user || user.status === "disabled") {
            return NextResponse.json({ error: "FORBIDDEN", message: "Account is disabled" }, { status: 403 });
        }

        const body = await request.json();
        const { topicId, score, totalQuestions, xpEarned } = body;

        if (!topicId || score === undefined || !totalQuestions || !xpEarned) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const result = await savePracticeResult(userId, {
            topicId,
            score,
            totalQuestions,
            xpEarned
        });

        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        return handleAuthError(error);
    }
}
