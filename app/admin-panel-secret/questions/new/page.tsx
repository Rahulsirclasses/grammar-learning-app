import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"
import QuestionForm from "@/components/admin/question-form"

export default async function NewQuestionPage() {
  const dbClient = await createServerClient()

  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin-panel-secret/questions/new")
  }

  const { data: adminUser } = await dbClient.from("admin_users").select("*").eq("email", user.email).single()

  if (!adminUser) {
    redirect("/")
  }

  return <QuestionForm mode="create" />
}
