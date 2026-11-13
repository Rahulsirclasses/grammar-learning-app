"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"
import { Clock, ArrowLeft, ArrowRight, Flag, CheckCircle2, AlertCircle, BookOpen, Loader2, Trophy } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

interface Question {
  id: number
  type: string
  text: string
  options: string[]
  correctAnswer: number
  argumentId?: number
}

interface Argument {
  id: number
  text: string
  questions: number[]
}

interface MockTest {
  id: string
  title: string
  description: string
  duration: number
  questions: Question[]
  passage?: string
  arguments?: Argument[]
  created_at?: string // Added for timeSpent calculation
}

export default function MockTestTakePage({ params }: { params: { testId: string } }) {
  const { testId } = params
  const router = useRouter()

  const [test, setTest] = useState<MockTest | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>([])
  const [score, setScore] = useState(0)
  const [isSaving, setIsSaving] = useState(false)

  // Fetch test data
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/mock-tests/${testId}`)
        if (!response.ok) throw new Error("Test not found")
        const data = await response.json()
        if (data.test) {
          setTest(data.test)
          setSelectedAnswers(new Array(data.test.questions.length).fill(-1))
          setFlaggedQuestions(new Array(data.test.questions.length).fill(false))
          setTimeLeft(data.test.duration * 60)
          setIsTimerActive(true)
        }
      } catch (error) {
        console.error("Error fetching test:", error)
        toast.error("Failed to load test")
      } finally {
        setLoading(false)
      }
    }
    fetchTestData()
  }, [testId])

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isTimerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerActive) {
      handleSubmitTest()
    }
    return () => clearTimeout(timer)
  }, [timeLeft, isTimerActive])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleToggleFlag = () => {
    const newFlags = [...flaggedQuestions]
    newFlags[currentQuestionIndex] = !newFlags[currentQuestionIndex]
    setFlaggedQuestions(newFlags)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < (test?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmitTest = async () => {
    if (isSubmitted || !test) return

    setIsTimerActive(false)
    setIsSubmitted(true)

    // Calculate score
    let finalScore = 0
    test.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        finalScore++
      }
    })
    setScore(finalScore)

    // Save results
    try {
      setIsSaving(true)
      const xpMultiplier = test.id === "full-verbal-1" ? 5 : 4
      const xpEarned = finalScore * xpMultiplier

      const response = await fetch("/api/practice/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "mock-test",
          testId,
          score: finalScore,
          totalQuestions: test?.questions.length,
          correctAnswers: finalScore,
          timeSpent: Math.floor((Date.now() - (test?.created_at ? new Date(test.created_at).getTime() : Date.now())) / 1000),
          xpEarned
        }),
      })

      if (response.ok) {
        toast.success(`Assessment saved! +${xpEarned} XP earned.`)
      }
    } catch (error) {
      console.error("Error saving test results:", error)
      toast.error("Failed to save progress")
    } finally {
      setIsSaving(false)
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading assessment questions...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (!test) return notFound()

  if (isSubmitted) {
    const accuracy = Math.round((score / test.questions.length) * 100)
    return (
      <DashboardLayout>
        <Card className="max-w-2xl mx-auto shadow-2xl border-none overflow-hidden rounded-3xl mt-8">
          <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <CardHeader className="text-center pb-2 pt-8">
            <div className="mx-auto bg-green-50 p-4 rounded-full w-fit mb-4">
              <Trophy className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-4xl font-black text-foreground">Assessment Complete</CardTitle>
            <p className="text-muted-foreground mt-2 text-lg font-medium">You have successfully completed {test.title}</p>
          </CardHeader>
          <CardContent className="space-y-8 p-8 pt-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted/50 p-8 rounded-3xl text-center">
                <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Final Score</div>
                <div className="text-5xl font-black text-foreground">{score} / {test.questions.length}</div>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl text-center">
                <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Accuracy</div>
                <div className={`text-5xl font-black ${accuracy >= 70 ? "text-green-600" : "text-amber-600"}`}>{accuracy}%</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 p-8 pt-0 pb-10">
            <Button asChild className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20">
              <Link href="/dashboard">Return to Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </DashboardLayout>
    )
  }

  const currentQuestion = test.questions[currentQuestionIndex]
  const progressPercentage = ((currentQuestionIndex + 1) / test.questions.length) * 100

  // Find current argument if any
  const currentArgument = test.arguments?.find(arg => arg.id === currentQuestion.argumentId)

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-background/80 backdrop-blur-sm sticky top-0 z-10 py-4 border-b">
          <div>
            <h1 className="text-xl font-bold tracking-tight">{test.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Progress value={progressPercentage} className="w-32 h-2" />
              <span className="text-xs font-bold text-muted-foreground">
                Question {currentQuestionIndex + 1} of {test.questions.length}
              </span>
            </div>
          </div>
          <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-xl border-2 transition-all ${timeLeft < 300 ? "text-red-500 bg-red-50 border-red-200 animate-pulse" : "bg-muted/30 border-transparent shadow-inner"}`}>
            <Clock className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={test.passage || currentArgument ? "lg:col-span-6" : "lg:col-span-12"}>
            {(test.passage || currentArgument) && (
              <Card className="h-full shadow-xl border-none rounded-3xl overflow-hidden bg-muted/20">
                <div className="h-2 bg-primary/20"></div>
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary/80">Reading Passage</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Review the context carefully</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 overflow-y-auto max-h-[60vh]">
                  <div className="prose prose-blue dark:prose-invert max-w-none">
                    {test.passage ? (
                      <div className="whitespace-pre-wrap leading-relaxed space-y-4 text-base font-medium opacity-90">
                        {test.passage}
                      </div>
                    ) : (
                      <div className="text-lg leading-relaxed font-medium italic p-6 bg-background rounded-2xl border-2 border-primary/10 shadow-inner">
                        "{currentArgument?.text}"
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className={test.passage || currentArgument ? "lg:col-span-6" : "lg:col-span-12"}>
            <Card className="shadow-2xl border-none rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-primary"></div>
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge className="bg-primary/10 text-primary border-none text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Item {currentQuestionIndex + 1}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold leading-tight">{currentQuestion.text}</h2>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow space-y-6">
                <RadioGroup
                  value={selectedAnswers[currentQuestionIndex]?.toString()}
                  onValueChange={(val) => handleSelectAnswer(parseInt(val))}
                  className="grid gap-3"
                >
                  {currentQuestion.options.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`flex items-center space-x-3 p-5 rounded-2xl border-2 transition-all cursor-pointer hover:bg-muted/30 ${selectedAnswers[currentQuestionIndex] === idx ? "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/5" : "border-muted"}`}
                    >
                      <RadioGroupItem value={idx.toString()} id={`opt-${idx}`} className="hidden" />
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-black text-sm shrink-0 transition-colors ${selectedAnswers[currentQuestionIndex] === idx ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <Label htmlFor={`opt-${idx}`} className="flex-1 cursor-pointer font-bold text-lg leading-tight">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="p-8 bg-muted/20 border-t flex flex-col gap-4">
                <div className="flex gap-4 w-full">
                  <Button variant="outline" size="lg" className="flex-1 h-14 font-black rounded-2xl border-2" onClick={handleToggleFlag}>
                    <Flag className={`mr-2 h-5 w-5 ${flaggedQuestions[currentQuestionIndex] ? "fill-amber-500 text-amber-500" : ""}`} />
                    {flaggedQuestions[currentQuestionIndex] ? "Flagged" : "Flag it"}
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 h-14 font-black rounded-2xl border-2" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                  </Button>
                </div>
                <Button size="lg" className="w-full h-16 text-xl font-black rounded-2xl shadow-xl shadow-primary/20" onClick={currentQuestionIndex === test.questions.length - 1 ? handleSubmitTest : goToNextQuestion}>
                  {currentQuestionIndex === test.questions.length - 1 ? "Submit Assessment" : "Save & Continue"}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="p-6 bg-muted/20 rounded-3xl">
          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-2">
            {test.questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-full aspect-square rounded-xl flex items-center justify-center font-black text-xs transition-all border-2 ${idx === currentQuestionIndex ? "border-primary bg-primary text-white scale-110 shadow-lg z-10" : selectedAnswers[idx] !== -1 ? "border-green-400 bg-green-50 text-green-700" : flaggedQuestions[idx] ? "border-amber-400 bg-amber-50 text-amber-700" : "border-muted bg-background text-muted-foreground hover:border-primary/50"}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function Badge({ children, className, variant = "default" }: any) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  )
}
