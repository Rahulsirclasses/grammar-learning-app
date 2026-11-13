"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, ChevronRight, RotateCcw, Timer, Loader2, BookOpen, Trophy, ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"


interface MCQQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "easy" | "medium" | "hard"
  topic: string
  subtopic?: string
}

interface MCQPracticeProps {
  topic: string
}

export default function MCQPractice({ topic }: MCQPracticeProps) {
  const [questions, setQuestions] = useState<MCQQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/questions?topic=${topic}&type=mcq`)
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        if (data.questions && data.questions.length > 0) {
          setQuestions(data.questions)
          setCurrentQuestionIndex(0)
          setScore(0)
          setShowResults(false)
        } else {
          setQuestions([])
          toast.error(`No MCQ questions found for ${topic}`)
        }
      } catch (error) {
        console.error("Failed to fetch MCQ questions:", error)
        toast.error("Failed to load questions")
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [topic])

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTimerActive && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && !isAnswered && !showResults) {
      handleSubmitAnswer()
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [timeLeft, isTimerActive, isAnswered, showResults])

  // Initialize question
  useEffect(() => {
    if (questions.length > 0 && questions[currentQuestionIndex]) {
      setSelectedOption(null)
      setIsAnswered(false)
      setTimeLeft(30) // 30 seconds for MCQ
      setIsTimerActive(true)
      setShowExplanation(false)
    }
  }, [currentQuestionIndex, questions])

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (isAnswered || questions.length === 0) return

    setIsAnswered(true)
    setIsTimerActive(false)

    const currentQuestion = questions[currentQuestionIndex]
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setShowResults(true)
      await saveResults()
    }
  }

  const saveResults = async () => {
    try {
      setIsSaving(true)
      const xpEarned = score * 10
      const response = await fetch("/api/practice/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "mcq",
          topic,
          score: score,
          totalQuestions: questions.length,
          correctAnswers: score,
          timeSpent: 0, // Placeholder, actual time spent would need to be tracked
        }),
      })

      if (response.ok) {
        toast.success(`Progress saved! +${xpEarned} XP earned.`)
      } else {
        toast.error("Failed to save progress")
      }
    } catch (error) {
      console.error("Error saving results:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setShowResults(false)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground font-medium">Fetching the best questions for you...</p>
      </div>
    )
  }

  if (showResults) {
    const accuracy = Math.round((score / questions.length) * 100)
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl border-none overflow-hidden rounded-3xl animate-in zoom-in-95 duration-500">
        <div className="h-3 bg-gradient-to-r from-primary via-blue-500 to-indigo-600"></div>
        <CardHeader className="text-center pb-2 pt-8">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Trophy className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            Practice Complete!
          </CardTitle>
          <p className="text-muted-foreground mt-2 text-lg">You're making incredible progress.</p>
        </CardHeader>
        <CardContent className="space-y-8 p-8 pt-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Accuracy</div>
              <div className={`text-5xl font-black ${accuracy >= 70 ? "text-green-500" : accuracy >= 40 ? "text-amber-500" : "text-red-500"}`}>
                {accuracy}%
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">XP Earned</div>
              <div className="text-5xl font-black text-primary">+{score * 10}</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-sm font-black uppercase tracking-widest text-muted-foreground">Mastery Level</span>
              <span className="text-sm font-bold">{score} / {questions.length} Correct</span>
            </div>
            <Progress value={accuracy} className="h-4 rounded-full" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 p-8 pt-0 pb-10">
          <Button onClick={handleRestartQuiz} variant="outline" className="flex-1 h-14 text-lg font-bold rounded-2xl border-2">
            <RotateCcw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button asChild className="flex-1 h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/25">
            <Link href="/dashboard">
              Back to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100

  if (!currentQuestion) return null

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-700">
      <div className="space-y-3 px-1">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black capitalize tracking-tight">{topic} Practice</h2>
            <p className="text-muted-foreground text-sm font-medium">Level up your grammar skills</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground block mb-1">Overall Progress</span>
            <span className="text-lg font-bold">{currentQuestionIndex + 1} <span className="text-muted-foreground font-medium">/ {questions.length}</span></span>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-2.5 rounded-full" />
      </div>

      <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem]">
        <div className="h-2 bg-gradient-to-r from-primary to-indigo-600"></div>
        <CardHeader className="p-8 pb-4">
          <div className="flex justify-between items-center mb-6">
            <Badge variant="outline" className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2">
              Question {currentQuestionIndex + 1}
            </Badge>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-sm border-2 transition-colors ${timeLeft < 10 ? "text-red-500 bg-red-50 border-red-100" : "bg-muted/50 border-transparent"}`}>
              <Timer className="h-4 w-4" />
              {timeLeft}s
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8 pt-4 space-y-8">
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index
              const isCorrect = isAnswered && index === currentQuestion.correctAnswer
              const isWrong = isAnswered && isSelected && index !== currentQuestion.correctAnswer

              return (
                <button
                  key={index}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(index)}
                  className={`group relative flex items-center p-6 text-left text-lg font-bold rounded-2xl border-2 transition-all duration-200 ${isCorrect
                    ? "bg-green-50 border-green-500 text-green-700 shadow-lg shadow-green-100"
                    : isWrong
                      ? "bg-red-50 border-red-500 text-red-700"
                      : isSelected && !isAnswered
                        ? "bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10"
                        : "bg-background border-muted hover:border-primary/50 hover:bg-muted/30"
                    }`}
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl mr-5 font-black shrink-0 transition-colors ${isCorrect
                    ? "bg-green-500 text-white"
                    : isWrong
                      ? "bg-red-500 text-white"
                      : isSelected && !isAnswered
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                  {isCorrect && <CheckCircle2 className="h-6 w-6 text-green-500 ml-4 animate-in zoom-in" />}
                  {isWrong && <AlertCircle className="h-6 w-6 text-red-500 ml-4 animate-in zoom-in" />}
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <Alert className="bg-blue-50 border-blue-100 rounded-3xl p-8 animate-in slide-in-from-top-4 duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <AlertTitle className="text-blue-900 text-sm font-black uppercase tracking-widest m-0">Expert Explanation</AlertTitle>
              </div>
              <AlertDescription className="text-blue-800 text-lg font-medium leading-relaxed italic">
                {currentQuestion.explanation}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter className="p-8 bg-muted/30 border-t-2 border-muted/20">
          {!isAnswered ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null}
              className="w-full h-16 text-xl font-black rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              Confirm Choice
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="w-full h-16 text-xl font-black rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next Challenge" : "Finish Practice"}
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
