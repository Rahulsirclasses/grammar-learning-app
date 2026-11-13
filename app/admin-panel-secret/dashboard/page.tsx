import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"
import AdminDashboardContent from "@/components/admin/admin-dashboard-content"

export default async function AdminDashboardPage() {
  const dbClient = await createServerClient()

  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin-panel-secret/dashboard")
  }

  // Check if user is an admin
  const { data: adminUser } = await dbClient.from("admin_users").select("*").eq("email", user.email).single()

  if (!adminUser) {
    redirect("/")
  }

  // Get statistics
  const { count: questionsCount } = await dbClient
    .from("practice_questions")
    .select("*", { count: "exact", head: true })

  const { count: mockTestsCount } = await dbClient.from("mock_tests").select("*", { count: "exact", head: true })

  const { count: theoryCount } = await dbClient.from("theory_content").select("*", { count: "exact", head: true })

  return (
    <AdminDashboardContent
      stats={{
        questions: questionsCount || 0,
        mockTests: mockTestsCount || 0,
        theoryTopics: theoryCount || 0,
      }}
      adminEmail={user.email || ""}
    />
  )
}
