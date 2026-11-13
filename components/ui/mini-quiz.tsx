"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, ChevronLeft, Shuffle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { MiniQuizQuestion } from "@/data/mini-quizzes"

interface MiniQuizProps {
  questions: MiniQuizQuestion[]
  title: string
  maxQuestions?: number
}

export function MiniQuiz({ questions, title, maxQuestions = 10 }: MiniQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<MiniQuizQuestion[]>([])
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  // Initialize quiz with random questions
  useEffect(() => {
    if (questions.length > 0) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5)
      const selectedQuestions = shuffled.slice(0, Math.min(maxQuestions, questions.length))
      setQuizQuestions(selectedQuestions)
    }
  }, [questions, maxQuestions])

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progressPercentage = quizQuestions.length > 0 ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0

  const handleStartQuiz = () => {
    setIsQuizStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowExplanation(false)
    setIsQuizCompleted(false)
  }

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    setShowExplanation(true)

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowExplanation(false)
    } else {
      setIsQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowExplanation(false)
    }
  }

  const handleRestartQuiz = () => {
    // Shuffle questions again
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffled.slice(0, Math.min(maxQuestions, questions.length))
    setQuizQuestions(selectedQuestions)

    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowExplanation(false)
    setIsQuizCompleted(false)
    setIsQuizStarted(true)
  }

  const getScoreColor = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage === 100) return "Perfect! Outstanding work! 🎉"
    if (percentage >= 80) return "Excellent! You have a strong understanding! 👏"
    if (percentage >= 60) return "Good job! Keep practicing to improve! 📚"
    return "Keep studying and try again! You can do it! 💪"
  }

  if (!isQuizStarted) {
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="mb-4">
              <p className="text-lg font-medium mb-2">Test Your Knowledge!</p>
              <p className="text-muted-foreground">
                Practice with {Math.min(maxQuestions, questions.length)} randomly selected questions
              </p>
            </div>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Easy
                </Badge>
                <span>Basic concepts</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                  Medium
                </Badge>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-red-600 border-red-600">
                  Hard
                </Badge>
                <span>Advanced</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStartQuiz} className="w-full" size="lg">
            <Shuffle className="mr-2 h-4 w-4" />
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (isQuizCompleted) {
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center">Quiz Complete! 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
              {score}/{quizQuestions.length}
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getScoreColor()}`}>
              {Math.round((score / quizQuestions.length) * 100)}%
            </div>
            <p className="text-lg text-muted-foreground mb-4">{getScoreMessage()}</p>
            <Progress value={(score / quizQuestions.length) * 100} className="h-3 mb-4" />
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button onClick={handleRestartQuiz} className="flex-1">
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" onClick={() => setIsQuizStarted(false)} className="flex-1">
            Back to Start
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (!currentQuestion) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">No questions available for this quiz.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <Badge
              variant={
                currentQuestion.difficulty === "easy"
                  ? "outline"
                  : currentQuestion.difficulty === "medium"
                    ? "secondary"
                    : "destructive"
              }
              className={
                currentQuestion.difficulty === "easy"
                  ? "text-green-600 border-green-600"
                  : currentQuestion.difficulty === "medium"
                    ? "text-yellow-600 border-yellow-600"
                    : "text-red-600 border-red-600"
              }
            >
              {currentQuestion.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">{score} correct</span>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-6 font-medium">{currentQuestion.question}</p>

        <RadioGroup value={selectedOption?.toString()} className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all ${
                isAnswered && index === currentQuestion.correctAnswer
                  ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                  : isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                    : selectedOption === index
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/50 hover:bg-muted/50"
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                disabled={isAnswered}
                className={
                  isAnswered && index === currentQuestion.correctAnswer
                    ? "text-green-500 border-green-500"
                    : isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer
                      ? "text-red-500 border-red-500"
                      : ""
                }
              />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-normal">
                {option}
              </Label>
              {isAnswered && index === currentQuestion.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
              {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>

        {showExplanation && (
          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <Button
          variant="outline"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {!isAnswered ? (
            <Button onClick={handleSubmitAnswer} disabled={selectedOption === null} className="px-8">
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="px-8">
              {currentQuestionIndex < quizQuestions.length - 1 ? (
                <>
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </>
              ) : (
                "Finish Quiz"
              )}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
