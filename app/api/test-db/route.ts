import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongodb/mongodb";
import { UserModel } from "@/lib/mongodb/models/user";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) return NextResponse.json({ error: "NO ID" });

    await connectToMongoDB();
    const { Types } = await import("mongoose");
    
    const query: any = { $or: [{ id: userId }] };
    
    if (Types.ObjectId.isValid(userId)) {
        query.$or.push({ _id: new Types.ObjectId(userId) });
    }

    const targetUser = await UserModel.findOne(query).lean() as any;

    return NextResponse.json({ 
        querySent: query,
        foundUser: !!targetUser,
        targetUser
    });
}
