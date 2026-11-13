
import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongodb/mongodb";
import { UserModel } from "@/lib/mongodb/models/user";
import { requireRole, handleAuthError } from "@/lib/auth/requireAuth";

export async function GET(request: NextRequest) {
    try {
        const caller = requireRole(request, ["admin", "super-admin"]);
        const { searchParams } = new URL(request.url);

        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const status = searchParams.get("status") || "all";
        const search = searchParams.get("search") || "";

        await connectToMongoDB();

        const query: any = {};

        // 1. Role-based filtering
        if (caller.role === "admin") {
            // Admins only see regular users
            query.role = "user";
        } else if (caller.role === "super-admin") {
            // Super-admins see everyone except other super-admins (including self)
            query.role = { $ne: "super-admin" };
            query.id = { $ne: caller.userId };
        }

        // 2. Status filtering
        if (status !== "all") {
            query.status = status;
        }

        // 3. Search filtering
        if (search) {
            const searchRegex = new RegExp(search, "i");
            query.$and = [
                ...(query.$and || []),
                { $or: [{ email: searchRegex }, { "user_metadata.name": searchRegex }] }
            ];
        }

        const total = await UserModel.countDocuments(query);
        const users = await UserModel.find(query)
            .sort({ created_at: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();

        const formattedUsers = users.map((u: any) => {
            const email = u.email || "no-email@example.com";
            return {
                id: u._id?.toString() || u.id,
                email: email,
                role: u.role || "user",
                status: u.status || "pending",
                name: u.user_metadata?.name || email.split("@")[0] || "User",
                avatar: u.user_metadata?.avatar || null,
                created_at: u.created_at || new Date().toISOString(),
            };
        });

        return NextResponse.json({
            users: formattedUsers,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        return handleAuthError(err);
    }
}
