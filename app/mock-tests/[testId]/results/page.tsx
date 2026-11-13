"use client"

import { useSearchParams, useRouter } from "next/navigation"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, BarChart3, Award, Clock, ArrowLeft, Share2, Download, RotateCcw } from "lucide-react"

export default function TestResultsPage({ params }: { params: { testId: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const total = Number.parseInt(searchParams.get("total") || "1")
  const percentage = Math.round((score / total) * 100)

  // Determine pass/fail status
  const isPassed = percentage >= 70

  // Calculate performance metrics
  const performanceLevel =
    percentage >= 90
      ? "Excellent"
      : percentage >= 80
        ? "Very Good"
        : percentage >= 70
          ? "Good"
          : percentage >= 60
            ? "Satisfactory"
            : percentage >= 50
              ? "Needs Improvement"
              : "Requires Attention"

  // Mock data for topic performance
  const topicPerformance = [
    { topic: "Parts of Speech", correct: 4, total: 5, percentage: 80 },
    { topic: "Tenses", correct: 3, total: 5, percentage: 60 },
    { topic: "Articles & Determiners", correct: 5, total: 5, percentage: 100 },
    { topic: "Modifiers", correct: 2, total: 5, percentage: 40 },
    { topic: "Subject-Verb Agreement", correct: 4, total: 5, percentage: 80 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Test Results</h1>
            <p className="text-muted-foreground">Full Verbal Test 1</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => router.push(`/mock-tests/${params.testId}`)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Test
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className={`border-l-4 ${isPassed ? "border-l-green-500" : "border-l-red-500"}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{score}</span>
                <span className="text-muted-foreground ml-1">/ {total}</span>
              </div>
              <div className="mt-2">
                <Progress value={percentage} className="h-2" />
              </div>
              <div className="mt-2 flex items-center">
                {isPassed ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 dark:text-green-400">Passed</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-600 dark:text-red-400">Failed</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceLevel}</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isPassed
                  ? "Great job! You've demonstrated a good understanding of the material."
                  : "Keep practicing! Focus on the topics where you scored lower."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Time Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45:22</div>
              <p className="text-sm text-muted-foreground mt-1">Average time per question: 54 seconds</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Topic Performance</CardTitle>
            <CardDescription>See how you performed across different grammar topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topicPerformance.map((topic, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <span className="text-sm text-muted-foreground">
                      {topic.correct}/{topic.total} ({topic.percentage}%)
                    </span>
                  </div>
                  <Progress
                    value={topic.percentage}
                    className="h-2"
                    indicatorClassName={
                      topic.percentage >= 70 ? "bg-green-500" : topic.percentage >= 50 ? "bg-amber-500" : "bg-red-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button onClick={() => router.push(`/mock-tests/${params.testId}/review`)}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Review Answers
          </Button>
          <Button onClick={() => router.push("/mock-tests")} variant="outline">
            <Award className="h-4 w-4 mr-2" />
            Try Another Test
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
