import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"
import MockTestsList from "@/components/admin/mock-tests-list"

export default async function MockTestsListPage() {
  const dbClient = await createServerClient()

  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data: adminUser } = await dbClient.from("admin_users").select("*").eq("email", user.email).single()

  if (!adminUser) {
    redirect("/")
  }

  const { data: mockTests } = await dbClient.from("mock_tests").select("*").order("created_at", { ascending: false })

  return <MockTestsList mockTests={mockTests || []} />
}
