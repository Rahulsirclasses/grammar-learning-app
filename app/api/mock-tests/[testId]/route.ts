import { NextRequest, NextResponse } from "next/server";
import { MockTestModel } from "@/lib/mongodb/models/mock-test";
import { connectToMongoDB } from "@/lib/mongodb/mongodb";
import { requireAuth, handleAuthError } from "@/lib/auth/requireAuth";

export async function GET(
    request: NextRequest,
    { params }: { params: { testId: string } }
) {
    try {
        requireAuth(request);
        const { testId } = params;
        await connectToMongoDB();
        const test = await MockTestModel.findOne({ id: testId });

        if (!test) {
            return NextResponse.json({ error: "Test not found" }, { status: 404 });
        }

        return NextResponse.json({ test });
    } catch (error: any) {
        return handleAuthError(error);
    }
}
