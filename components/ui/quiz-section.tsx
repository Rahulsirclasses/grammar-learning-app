"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MiniQuiz } from "./mini-quiz"
import { Brain, Trophy, Target } from "lucide-react"
import { getQuizByTopic } from "@/data/mini-quizzes"

interface QuizSectionProps {
  topic: string
  title: string
  description?: string
}

export function QuizSection({ topic, title, description }: QuizSectionProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [lastScore, setLastScore] = useState<{ score: number; total: number } | null>(null)

  const questions = getQuizByTopic(topic)

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true)
    setLastScore({ score, total })
  }

  const handleStartQuiz = () => {
    setShowQuiz(true)
    setQuizCompleted(false)
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeVariant = (percentage: number) => {
    if (percentage >= 80) return "default"
    if (percentage >= 60) return "secondary"
    return "destructive"
  }

  if (questions.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">Quick Practice</h3>
      </div>

      {!showQuiz ? (
        <Card className="border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-25 to-indigo-25 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg text-blue-700 dark:text-blue-300">{title}</CardTitle>
                {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {questions.length} questions
                </Badge>
                {lastScore && (
                  <Badge
                    variant={getScoreBadgeVariant((lastScore.score / lastScore.total) * 100)}
                    className="flex items-center gap-1"
                  >
                    <Trophy className="h-3 w-3" />
                    {lastScore.score}/{lastScore.total}
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>Test your understanding of this concept</span>
              </div>
              <Button onClick={handleStartQuiz} className="bg-blue-600 hover:bg-blue-700">
                {lastScore ? "Retake Quiz" : "Start Quiz"}
              </Button>
            </div>
            {lastScore && (
              <div className="mt-3 pt-3 border-t border-blue-200">
                <div className="text-sm">
                  <span className="text-muted-foreground">Last score: </span>
                  <span className={`font-semibold ${getScoreColor((lastScore.score / lastScore.total) * 100)}`}>
                    {Math.round((lastScore.score / lastScore.total) * 100)}%
                  </span>
                  <span className="text-muted-foreground ml-2">
                    ({lastScore.score} out of {lastScore.total} correct)
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Practice Quiz</h4>
            <Button variant="outline" size="sm" onClick={() => setShowQuiz(false)}>
              Back to Theory
            </Button>
          </div>
          <MiniQuiz title={title} questions={questions} onComplete={handleQuizComplete} />
        </div>
      )}
    </div>
  )
}
