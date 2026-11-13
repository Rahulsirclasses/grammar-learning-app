import DashboardLayout from "@/components/layouts/dashboard-layout"
import TopicQuizContent from "@/components/practice/topic-quiz-content"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface TopicQuizPageProps {
  params: {
    topicId: string
  }
}

export default function TopicQuizPage({ params }: TopicQuizPageProps) {
  const { topicId } = params

  // Convert kebab-case to Title Case for display
  const topicTitle = topicId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href="/practice/topic-quizzes">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Topic Quizzes</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">{topicTitle} Quiz</h1>
        </div>
        <p className="text-muted-foreground">
          Test your knowledge of {topicTitle.toLowerCase()} with this focused quiz
        </p>

        <TopicQuizContent topicId={topicId} />
      </div>
    </DashboardLayout>
  )
}
