import { notFound } from "next/navigation"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import TopicTestContent from "@/components/practice/topic-test-content"

// This would typically come from a database or API
const testTopics = [
  "subject-verb-agreement-test",
  "tenses-test",
  "modifiers-test",
  "pronouns-test",
  "parallelism-test",
  "idioms-phrases-test",
  "punctuation-test",
  "articles-determiners-test",
  "prepositions-test",
]

interface TopicTestPageProps {
  params: {
    testId: string
  }
}

export default function TopicTestPage({ params }: TopicTestPageProps) {
  const { testId } = params

  // Check if the test exists
  if (!testTopics.includes(testId)) {
    notFound()
  }

  return (
    <DashboardLayout>
      <TopicTestContent testId={testId} />
    </DashboardLayout>
  )
}
