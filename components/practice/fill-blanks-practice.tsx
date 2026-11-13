"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Clock, HelpCircle, Lightbulb, Loader2, RotateCcw, ChevronRight, Trophy, ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"

import Link from "next/link"

// Define the question type
interface FillBlankQuestion {
  id: string
  sentence: string
  blanks: {
    index: number
    answer: string
    acceptableAnswers?: string[]
  }[]
  explanation: string
  difficulty: "easy" | "medium" | "hard"
  topic: string
  hint?: string
}

export default function FillBlanksComponent() {
  const [questions, setQuestions] = useState<FillBlankQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<string>("prepositions")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [showHint, setShowHint] = useState(false)
  const [completedCount, setCompletedCount] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/questions?topic=${activeTab}&type=fill-blanks`)
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        if (data.questions && data.questions.length > 0) {
          setQuestions(data.questions)
          setCurrentQuestionIndex(0)
          setCompletedCount(0)
          setTotalScore(0)
          setShowResults(false)
        } else {
          setQuestions([])
          toast.error(`No questions found for ${activeTab}`)
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error)
        toast.error("Failed to load questions")
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [activeTab])

  // Initialize current question data
  useEffect(() => {
    if (questions.length > 0 && questions[currentQuestionIndex]) {
      const currentQuestion = questions[currentQuestionIndex]
      setUserAnswers(Array(currentQuestion.blanks.length).fill(""))
      setIsSubmitted(false)
      setIsCorrect(Array(currentQuestion.blanks.length).fill(false))
      setShowExplanation(false)
      setShowHint(false)
      setTimeLeft(60)

      // Focus on the first input
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus()
        }
      }, 100)
    }
  }, [currentQuestionIndex, questions])

  // Timer logic
  useEffect(() => {
    if (!isSubmitted && !showResults && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            if (!isSubmitted) handleSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isSubmitted, showResults, questions])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleInputChange = (index: number, value: string) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[index] = value
      return newAnswers
    })
  }

  const handleSubmit = () => {
    if (questions.length === 0) return
    const currentQuestion = questions[currentQuestionIndex]

    const newIsCorrect = currentQuestion.blanks.map((blank, index) => {
      const userAnswer = (userAnswers[index] || "").trim().toLowerCase()
      const correctAnswer = blank.answer.toLowerCase()
      const acceptableAnswers = (blank.acceptableAnswers || []).map((a) => a.toLowerCase())

      return userAnswer === correctAnswer || acceptableAnswers.includes(userAnswer)
    })

    setIsCorrect(newIsCorrect)
    setIsSubmitted(true)

    // If all blanks are correct, increment score
    if (newIsCorrect.every(Boolean)) {
      setTotalScore(prev => prev + 1)
    }

    setCompletedCount(prev => prev + 1)
  }

  const handleNext = async () => {
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
      const xpEarned = totalScore * 15 // Fill-in-the-blanks gives slightly more XP
      const response = await fetch("/api/practice/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "fill-blanks",
          topic: activeTab,
          score: totalScore,
          totalQuestions: questions.length,
          correctAnswers: totalScore,
          timeSpent: 0, // Placeholder, actual time tracking would be more complex
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

  const resetPractice = () => {
    setCurrentQuestionIndex(0)
    setCompletedCount(0)
    setTotalScore(0)
    setShowResults(false)
  }

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading practice questions...</p>
      </div>
    )
  }

  if (showResults) {
    const accuracy = Math.round((totalScore / questions.length) * 100)
    return (
      <Card className="max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-extrabold">Session Complete!</CardTitle>
          <p className="text-muted-foreground mt-1 text-lg">You've mastered more concepts!</p>
        </CardHeader>
        <CardContent className="space-y-8 pt-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Accuracy</div>
              <div className={`text-4xl font-black ${accuracy >= 70 ? "text-green-500" : accuracy >= 40 ? "text-amber-500" : "text-red-500"}`}>
                {accuracy}%
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">XP Earned</div>
              <div className="text-4xl font-black text-primary">+{totalScore * 15}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm font-bold">
              <span>Overall Score</span>
              <span>{totalScore} / {questions.length} perfect sentences</span>
            </div>
            <Progress value={accuracy} className="h-4 rounded-full" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4 pb-8 px-8">
          <Button onClick={resetPractice} variant="outline" className="flex-1 text-lg h-12 rounded-xl">
            <RotateCcw className="mr-2 h-5 w-5" />
            Restart Topic
          </Button>
          <Button asChild className="flex-1 text-lg h-12 rounded-xl shadow-lg shadow-primary/20">
            <Link href="/dashboard">
              Continue Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = (completedCount / questions.length) * 100
  const topicTabs = ["prepositions", "pronouns", "tenses", "verbs"]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/50 rounded-xl">
          {topicTabs.map((topic) => (
            <TabsTrigger key={topic} value={topic} className="capitalize py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground">
          <span>Topic Progress</span>
          <span>{completedCount} / {questions.length} Completed</span>
        </div>
        <Progress value={progress} className="h-2 rounded-full" />
      </div>

      {currentQuestion ? (
        <Card className="border-none shadow-2xl shadow-primary/5 overflow-hidden rounded-3xl">
          <div className="h-2 bg-gradient-to-r from-primary to-blue-600"></div>
          <CardHeader className="p-8">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline" className="text-xs font-black uppercase tracking-widest px-3 py-1">
                Question {currentQuestionIndex + 1}
              </Badge>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold border ${timeLeft < 15 ? "text-red-500 border-red-200 bg-red-50" : "bg-muted border-transparent"}`}>
                <Clock className="h-4 w-4" />
                {formatTime(timeLeft)}
              </div>
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold leading-relaxed">
              {currentQuestion.sentence.split("_____").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="inline-block align-middle mx-2">
                      <Input
                        ref={(el) => { inputRefs.current[index] = el }}
                        className={`w-32 h-10 text-center text-lg font-bold rounded-lg border-2 transition-all ${isSubmitted
                          ? (isCorrect[index] ? "border-green-500 bg-green-50 text-green-700" : "border-red-500 bg-red-50 text-red-700")
                          : "border-primary/20 focus:border-primary focus:ring-0"
                          }`}
                        value={userAnswers[index] || ""}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        disabled={isSubmitted}
                        placeholder="..."
                      />
                    </span>
                  )}
                </span>
              ))}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8 space-y-6">
            {isSubmitted && (
              <div className="grid gap-4 animate-in slide-in-from-top-4 duration-500">
                {currentQuestion.blanks.map((blank, idx) => (
                  <div key={idx} className={`p-4 rounded-xl flex items-center justify-between col-span-1 ${isCorrect[idx] ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"}`}>
                    <div className="flex items-center gap-3">
                      {isCorrect[idx] ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                      <span className="font-medium">
                        {isCorrect[idx] ? "Excellent!" : `Correct answer: ${blank.answer}`}
                      </span>
                    </div>
                  </div>
                ))}

                <Alert className="bg-blue-50 border-blue-100 text-blue-800 rounded-2xl p-6">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  <AlertTitle className="font-black uppercase tracking-widest text-xs mb-2">Rule Breakdown</AlertTitle>
                  <AlertDescription className="text-base leading-relaxed">
                    {currentQuestion.explanation}
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {!isSubmitted && currentQuestion.hint && (
              <div className="pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="text-primary hover:text-primary hover:bg-primary/10 rounded-full px-4"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  {showHint ? "Hide Hint" : "Need a hint?"}
                </Button>
                {showHint && (
                  <div className="mt-3 p-4 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl text-sm italic animate-in slide-in-from-left-4">
                    {currentQuestion.hint}
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="px-8 py-6 bg-muted/30 border-t">
            <Button
              onClick={isSubmitted ? handleNext : handleSubmit}
              className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitted ? (
                <>
                  {currentQuestionIndex === questions.length - 1 ? "Complete Practice" : "Next Question"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </>
              ) : (
                "Check My Answer"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full p-12 text-center border-dashed border-2">
          <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <CardTitle>Topic coming soon</CardTitle>
          <CardDescription className="mt-2">
            We are currently adding more interactive blanks for <strong>{activeTab}</strong>.
            Try another topic in the meantime!
          </CardDescription>
        </Card>
      )}
    </div>
  )
}
