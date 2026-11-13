import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"
import QuestionsList from "@/components/admin/questions-list"

export default async function QuestionsListPage({
  searchParams,
}: {
  searchParams: { type?: string; topic?: string }
}) {
  const dbClient = await createServerClient()

  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin-panel-secret/questions/list")
  }

  const { data: adminUser } = await dbClient.from("admin_users").select("*").eq("email", user.email).single()

  if (!adminUser) {
    redirect("/")
  }

  let query = dbClient.from("practice_questions").select("*").order("created_at", { ascending: false })

  if (searchParams.type) {
    query = query.eq("question_type", searchParams.type)
  }

  if (searchParams.topic) {
    query = query.eq("topic", searchParams.topic)
  }

  const { data: questions } = await query

  return <QuestionsList questions={questions || []} />
}
