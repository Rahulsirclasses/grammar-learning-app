import { NextRequest, NextResponse } from "next/server";
import { MockTestModel } from "@/lib/mongodb/models/mock-test";
import { connectToMongoDB } from "@/lib/mongodb/mongodb";
import { requireAuth, handleAuthError } from "@/lib/auth/requireAuth";

export async function GET(request: NextRequest) {
    try {
        requireAuth(request);
        await connectToMongoDB();
        // Return only summary info for the list
        const tests = await MockTestModel.find({}, { questions: 0 });
        return NextResponse.json({ tests });
    } catch (error: any) {
        return handleAuthError(error);
    }
}
