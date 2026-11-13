"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Clock, Target, Trophy, Users, ArrowLeft, Play, RotateCcw } from "lucide-react"
import Link from "next/link"

interface TopicTestContentProps {
  testId: string
}

// Mock test data - in a real app, this would come from an API
const getTestData = (testId: string) => {
  const testData: Record<string, any> = {
    "subject-verb-agreement-test": {
      title: "Subject-Verb Agreement Test",
      description: "Comprehensive test covering all aspects of subject-verb agreement rules and exceptions.",
      questionCount: 25,
      timeLimit: 30,
      difficulty: "Medium",
      passScore: 70,
      totalAttempts: 1247,
      averageTime: 22,
      averageScore: 76,
      topics: [
        "Basic subject-verb agreement",
        "Compound subjects",
        "Collective nouns",
        "Indefinite pronouns",
        "Inverted sentences",
        "Special cases and exceptions",
      ],
      instructions: [
        "Read each question carefully before selecting your answer",
        "You have 30 minutes to complete all 25 questions",
        "You need to score at least 70% to pass this test",
        "You can review and change your answers before submitting",
        "The test will auto-submit when time runs out",
      ],
    },
    "tenses-test": {
      title: "Tenses Mastery Test",
      description:
        "Test your understanding of all English tenses including perfect, continuous, and perfect continuous forms.",
      questionCount: 30,
      timeLimit: 40,
      difficulty: "Medium",
      passScore: 75,
      totalAttempts: 2156,
      averageTime: 28,
      averageScore: 72,
      topics: [
        "Simple tenses (past, present, future)",
        "Continuous tenses",
        "Perfect tenses",
        "Perfect continuous tenses",
        "Tense consistency",
        "Conditional tenses",
      ],
      instructions: [
        "Choose the correct tense form for each sentence",
        "Pay attention to time indicators and context clues",
        "You have 40 minutes to complete all 30 questions",
        "Minimum passing score is 75%",
        "Review your answers before final submission",
      ],
    },
    // Add more test data as needed
  }

  return (
    testData[testId] || {
      title: "Grammar Test",
      description: "Comprehensive grammar test",
      questionCount: 20,
      timeLimit: 25,
      difficulty: "Medium",
      passScore: 70,
      totalAttempts: 500,
      averageTime: 20,
      averageScore: 75,
      topics: ["Grammar concepts"],
      instructions: ["Complete the test within the time limit"],
    }
  )
}

export default function TopicTestContent({ testId }: TopicTestContentProps) {
  const [testStarted, setTestStarted] = useState(false)
  const testData = getTestData(testId)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-900/50 text-emerald-300 border-emerald-700"
      case "Medium":
        return "bg-amber-900/50 text-amber-300 border-amber-700"
      case "Hard":
        return "bg-red-900/50 text-red-300 border-red-700"
      default:
        return "bg-slate-800 text-slate-300 border-slate-600"
    }
  }

  if (testStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-slate-900/50 border-slate-700">
          <CardContent className="pt-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-slate-100">Loading Test...</h3>
            <p className="text-slate-400 mt-2">Preparing your {testData.title.toLowerCase()}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-slate-100 hover:bg-slate-800">
          <Link href="/practice/topic-tests">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tests
          </Link>
        </Button>
      </div>

      {/* Test Overview */}
      <Card className="bg-slate-900/50 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <Target className="h-6 w-6 text-primary" />
                {testData.title}
              </CardTitle>
              <CardDescription className="mt-2 text-slate-400">{testData.description}</CardDescription>
            </div>
            <Badge className={getDifficultyColor(testData.difficulty)}>{testData.difficulty}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-slate-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-200">{testData.questionCount}</div>
              <div className="text-xs text-slate-500">Questions</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Clock className="h-5 w-5 text-slate-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-200">{testData.timeLimit} min</div>
              <div className="text-xs text-slate-500">Time Limit</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Trophy className="h-5 w-5 text-slate-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-200">{testData.passScore}%</div>
              <div className="text-xs text-slate-500">Pass Score</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Users className="h-5 w-5 text-slate-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-200">{testData.totalAttempts.toLocaleString()}</div>
              <div className="text-xs text-slate-500">Attempts</div>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          {/* Test Statistics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 text-slate-200">Test Statistics</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Average Score:</span>
                  <span className="font-medium text-slate-200">{testData.averageScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Average Time:</span>
                  <span className="font-medium text-slate-200">{testData.averageTime} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Success Rate:</span>
                  <span className="font-medium text-slate-200">
                    {Math.round((testData.averageScore / testData.passScore) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-slate-200">Topics Covered</h3>
              <div className="space-y-1">
                {testData.topics.map((topic: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-slate-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          {/* Instructions */}
          <div>
            <h3 className="font-medium mb-3 text-slate-200">Test Instructions</h3>
            <div className="space-y-2">
              {testData.instructions.map((instruction: string, index: number) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mt-0.5 flex-shrink-0 border border-primary/30">
                    {index + 1}
                  </div>
                  <span className="text-slate-300">{instruction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={() => setTestStarted(true)} className="flex-1 bg-primary hover:bg-primary/90" size="lg">
              <Play className="h-4 w-4 mr-2" />
              Start Test
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Practice Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tips Card */}
      <Card className="bg-slate-900/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Test Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-emerald-400">Do's</h4>
              <ul className="space-y-1 text-slate-400">
                <li>• Read questions carefully</li>
                <li>• Manage your time effectively</li>
                <li>• Review answers before submitting</li>
                <li>• Stay calm and focused</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-red-400">Don'ts</h4>
              <ul className="space-y-1 text-slate-400">
                <li>• Don't rush through questions</li>
                <li>• Don't second-guess yourself too much</li>
                <li>• Don't leave questions unanswered</li>
                <li>• Don't panic if time is running low</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
