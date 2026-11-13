
import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongodb/mongodb";
import { UserModel } from "@/lib/mongodb/models/user";
import { requireRole, handleAuthError } from "@/lib/auth/requireAuth";

export async function PATCH(
    request: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        const caller = requireRole(request, ["admin", "super-admin"]);
        
        // Bypass Next.js params object entirely to guarantee exact ID string
        const urlStr = request.url;
        const urlParts = urlStr.split("/");
        const userId = urlParts[urlParts.length - 1].split("?")[0]; // handle any query strings

        const body = await request.json();
        const { action } = body;

        await connectToMongoDB();

        const { Types } = await import("mongoose");
        const query: any = { $or: [{ id: userId }] };
        if (Types.ObjectId.isValid(userId)) {
            query.$or.push({ _id: new Types.ObjectId(userId) });
        }

        const targetUser = await UserModel.findOne(query).lean() as any;

        if (!targetUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const updates: any = { updated_at: new Date() };
        const targetIdStr = targetUser.id || targetUser._id?.toString();

        // Permission Matrix Enforcement
        if (action === "approve") {
            // Allowed: admin, super-admin
            // Constraint: target must be 'user'
            if (targetUser.role !== "user") {
                return NextResponse.json({ error: "Can only approve regular users" }, { status: 403 });
            }
            updates.status = "active";
        }
        else if (action === "disable") {
            // Allowed: admin, super-admin
            // Constraint: target must be 'user'
            if (targetUser.role !== "user") {
                return NextResponse.json({ error: "Cannot disable staff members" }, { status: 403 });
            }
            // Constraint: cannot self-disable
            if (targetIdStr === caller.userId) {
                return NextResponse.json({ error: "You cannot disable your own account" }, { status: 400 });
            }
            updates.status = "disabled";
        }
        else if (action === "enable") {
            // Allowed: admin, super-admin
            // Constraint: target must be 'user'
            if (targetUser.role !== "user") {
                return NextResponse.json({ error: "Target must be a regular user" }, { status: 403 });
            }
            updates.status = "active";
        }
        else if (action === "promote") {
            // Allowed: super-admin ONLY
            if (caller.role !== "super-admin") {
                return NextResponse.json({ error: "Only super-admins can promote staff" }, { status: 403 });
            }
            // Constraint: target must be 'user'
            if (targetUser.role !== "user") {
                return NextResponse.json({ error: "User is already staff" }, { status: 400 });
            }
            updates.role = "admin";
            updates.status = "active"; // Auto-approve if pending
        }
        else if (action === "demote") {
            // Allowed: super-admin ONLY
            if (caller.role !== "super-admin") {
                return NextResponse.json({ error: "Only super-admins can demote staff" }, { status: 403 });
            }
            // Constraint: target must be 'admin'
            if (targetUser.role !== "admin") {
                return NextResponse.json({ error: "Target is not an admin" }, { status: 400 });
            }
            updates.role = "user";
        }
        else {
            return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
        }

        // Apply updates
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: targetUser._id },
            { $set: updates },
            { new: true }
        ).lean() as any;

        // Return formatted user for optimistic UI
        const email = updatedUser.email || "no-email@example.com";
        return NextResponse.json({
            id: updatedUser.id || updatedUser._id?.toString(),
            email: email,
            role: updatedUser.role || "user",
            status: updatedUser.status || "pending",
            name: updatedUser.user_metadata?.name || email.split("@")[0] || "User",
            avatar: updatedUser.user_metadata?.avatar || null,
            created_at: updatedUser.created_at || new Date().toISOString(),
            updated_at: updatedUser.updated_at || new Date().toISOString(),
        });

    } catch (err) {
        return handleAuthError(err);
    }
}
