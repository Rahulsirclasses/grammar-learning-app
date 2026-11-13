import mongoose from "mongoose";
import { UserModel } from "../lib/mongodb/models/user";

const MONGODB_URI = "mongodb://localhost:27017/grammar-learning-app";

async function promoteUser() {
  try {
    console.log("Connecting to MongoDB at " + MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    
    const email = "mr.a.sharmaaryan@gmail.com";
    console.log(`Promoting user: ${email}`);
    
    const result = await UserModel.updateOne(
      { email: email },
      { 
        $set: { 
          status: "active", 
          role: "admin",
          updated_at: new Date()
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      console.log("User not found!");
    } else {
      console.log("User promoted successfully!");
      console.log(result);
    }
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error promoting user:", error);
    process.exit(1);
  }
}

promoteUser();
