import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"
import MockTestForm from "@/components/admin/mock-test-form"

export default async function NewMockTestPage() {
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

  return <MockTestForm mode="create" />
}
