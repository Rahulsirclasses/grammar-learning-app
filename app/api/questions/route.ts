import { NextRequest, NextResponse } from "next/server";
import { getQuestionsByTopic } from "@/lib/mongodb/repositories/progress-repository";
import { requireAuth, handleAuthError } from "@/lib/auth/requireAuth";

export async function GET(request: NextRequest) {
    try {
        requireAuth(request);
        const { searchParams } = new URL(request.url);
        const topic = searchParams.get("topic");
        const type = searchParams.get("type");

        if (!topic) {
            return NextResponse.json({ error: "Topic is required" }, { status: 400 });
        }

        const questions = await getQuestionsByTopic(topic, type || undefined);
        return NextResponse.json({ questions });
    } catch (error: any) {
        return handleAuthError(error);
    }
}
