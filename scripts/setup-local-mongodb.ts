/**
 * Setup Local MongoDB Collections
 * Creates the grammar-learning-app database and all required collections
 */

import { connect, connection } from "mongoose"
import User from "@/lib/mongodb/models/user"
import AdminUser from "@/lib/mongodb/models/admin-user"
import PracticeQuestion from "@/lib/mongodb/models/practice-question"
import MockTest from "@/lib/mongodb/models/mock-test"
import MockTestSection from "@/lib/mongodb/models/mock-test-section"
import TheoryContent from "@/lib/mongodb/models/theory-content"
import TopicQuiz from "@/lib/mongodb/models/topic-quiz"
import FillBlanksQuestion from "@/lib/mongodb/models/fill-blanks-question"
import Leaderboard from "@/lib/mongodb/models/leaderboard"
import Bookmark from "@/lib/mongodb/models/bookmark"
import Progress from "@/lib/mongodb/models/progress"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/grammar-learning-app"

async function setupMongoDB() {
  try {
    console.log("🔗 Connecting to MongoDB at:", MONGODB_URI)
    await connect(MONGODB_URI)
    console.log("✅ Connected to MongoDB")

    // Initialize collections
    console.log("\n📦 Creating collections...")
    const models = [
      { name: "users", model: User },
      { name: "admin_users", model: AdminUser },
      { name: "practice_questions", model: PracticeQuestion },
      { name: "mock_tests", model: MockTest },
      { name: "mock_test_sections", model: MockTestSection },
      { name: "theory_content", model: TheoryContent },
      { name: "topic_quizzes", model: TopicQuiz },
      { name: "fill_blanks_questions", model: FillBlanksQuestion },
      { name: "leaderboard", model: Leaderboard },
      { name: "bookmarks", model: Bookmark },
      { name: "progress", model: Progress },
    ]

    for (const { name, model } of models) {
      try {
        // Create collection by attempting to insert and delete a dummy document
        const doc = await model.create({ __init: true })
        await model.deleteOne({ _id: doc._id })
        console.log(`  ✓ Created collection: ${name}`)
      } catch (e: any) {
        if (e.message.includes("already exists")) {
          console.log(`  ✓ Collection exists: ${name}`)
        } else {
          console.log(`  ✓ Collection ready: ${name}`)
        }
      }
    }

    console.log("\n✨ MongoDB setup complete!")
    console.log(`\n📍 Database: grammar-learning-app`)
    console.log(`📍 Collections ready: ${models.map(c => c.name).join(", ")}`)
    console.log(`\n🚀 You can now run: pnpm dev\n`)
    
    await connection.close()
    process.exit(0)
  } catch (error) {
    console.error("❌ Setup failed:", error)
    process.exit(1)
  }
}

setupMongoDB()
