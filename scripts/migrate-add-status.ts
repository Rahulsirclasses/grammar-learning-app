
import mongoose from "mongoose";
import { UserModel } from "../lib/mongodb/models/user";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/grammar-learning-app";

async function migrate() {
    try {
        console.log("🔗 Connecting to MongoDB at:", MONGODB_URI);
        await mongoose.connect(MONGODB_URI);

        console.log("🌱 Updating users without status to 'active'...");
        const result = await UserModel.updateMany(
            { status: { $exists: false } },
            { $set: { status: "active" } }
        );

        console.log(`✨ Migration complete! ${result.modifiedCount} users updated.`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Migration failed:", error);
        process.exit(1);
    }
}

migrate();
