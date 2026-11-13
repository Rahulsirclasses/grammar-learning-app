"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Clock, Trophy, Target, Users, Award } from "lucide-react"
import Link from "next/link"

// Define the test topic type
type TestTopic = {
  id: string
  title: string
  description: string
  questionCount: number
  timeLimit: number // in minutes
  difficulty: "Easy" | "Medium" | "Hard"
  attempts: number
  bestScore: number // 0-100
  averageScore: number // 0-100
  passScore: number // minimum score to pass
  completed: boolean
  category: "basic" | "intermediate" | "advanced"
  totalAttempts: number // total attempts by all users
  averageTime: number // average completion time in minutes
}

// Sample test topics
const testTopics: TestTopic[] = [
  {
    id: "subject-verb-agreement-test",
    title: "Subject-Verb Agreement Test",
    description: "Comprehensive test covering all aspects of subject-verb agreement rules and exceptions.",
    questionCount: 25,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 70,
    completed: false,
    category: "basic",
    totalAttempts: 1247,
    averageTime: 22,
  },
  {
    id: "tenses-test",
    title: "Tenses Mastery Test",
    description:
      "Test your understanding of all English tenses including perfect, continuous, and perfect continuous forms.",
    questionCount: 30,
    timeLimit: 40,
    difficulty: "Medium",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 75,
    completed: false,
    category: "basic",
    totalAttempts: 2156,
    averageTime: 28,
  },
  {
    id: "modifiers-test",
    title: "Modifiers & Placement Test",
    description: "Advanced test on modifier placement, dangling modifiers, and misplaced modifiers.",
    questionCount: 20,
    timeLimit: 35,
    difficulty: "Hard",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 80,
    completed: false,
    category: "intermediate",
    totalAttempts: 892,
    averageTime: 31,
  },
  {
    id: "pronouns-test",
    title: "Pronouns Comprehensive Test",
    description: "Complete assessment of pronoun usage, agreement, case, and reference.",
    questionCount: 25,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 70,
    completed: false,
    category: "basic",
    totalAttempts: 1534,
    averageTime: 24,
  },
  {
    id: "parallelism-test",
    title: "Parallelism Structure Test",
    description: "Test your ability to maintain parallel structure in complex sentences and lists.",
    questionCount: 20,
    timeLimit: 25,
    difficulty: "Hard",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 75,
    completed: false,
    category: "intermediate",
    totalAttempts: 743,
    averageTime: 22,
  },
  {
    id: "idioms-phrases-test",
    title: "Idioms & Phrases Test",
    description: "Comprehensive test on common English idioms, phrases, and their correct usage.",
    questionCount: 30,
    timeLimit: 35,
    difficulty: "Hard",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 80,
    completed: false,
    category: "advanced",
    totalAttempts: 567,
    averageTime: 29,
  },
  {
    id: "punctuation-test",
    title: "Punctuation Mastery Test",
    description: "Test covering all punctuation marks, their rules, and proper usage in various contexts.",
    questionCount: 25,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 75,
    completed: false,
    category: "intermediate",
    totalAttempts: 1123,
    averageTime: 26,
  },
  {
    id: "articles-determiners-test",
    title: "Articles & Determiners Test",
    description: "Comprehensive test on the usage of articles (a, an, the) and various determiners.",
    questionCount: 20,
    timeLimit: 25,
    difficulty: "Easy",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 65,
    completed: false,
    category: "basic",
    totalAttempts: 1876,
    averageTime: 18,
  },
  {
    id: "prepositions-test",
    title: "Prepositions Usage Test",
    description: "Test your knowledge of preposition usage in various contexts and common prepositional phrases.",
    questionCount: 25,
    timeLimit: 30,
    difficulty: "Medium",
    attempts: 0,
    bestScore: 0,
    averageScore: 0,
    passScore: 70,
    completed: false,
    category: "intermediate",
    totalAttempts: 1345,
    averageTime: 25,
  },
]

export default function TopicTestsPractice() {
  const [activeTab, setActiveTab] = useState<string>("all")

  // Filter topics based on active tab
  const filteredTopics = activeTab === "all" ? testTopics : testTopics.filter((topic) => topic.category === activeTab)

  // Get difficulty badge color - Dark theme optimized
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-900/50 text-emerald-300 border-emerald-700 hover:bg-emerald-900/70"
      case "Medium":
        return "bg-amber-900/50 text-amber-300 border-amber-700 hover:bg-amber-900/70"
      case "Hard":
        return "bg-red-900/50 text-red-300 border-red-700 hover:bg-red-900/70"
      default:
        return "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700"
    }
  }

  // Get score badge color - Dark theme optimized
  const getScoreBadgeColor = (score: number, passScore: number) => {
    if (score === 0) return "bg-slate-800 text-slate-300 border-slate-600"
    if (score >= passScore + 15) return "bg-emerald-900/50 text-emerald-300 border-emerald-700"
    if (score >= passScore) return "bg-blue-900/50 text-blue-300 border-blue-700"
    return "bg-red-900/50 text-red-300 border-red-700"
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4 bg-slate-800 border-slate-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100">
            All Tests
          </TabsTrigger>
          <TabsTrigger value="basic" className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100">
            Basic
          </TabsTrigger>
          <TabsTrigger
            value="intermediate"
            className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
          >
            Intermediate
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100">
            Advanced
          </TabsTrigger>
        </TabsList>

        <div className="bg-blue-950/30 border border-blue-800/50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-200">About Topic-wise Tests</h3>
              <p className="text-sm text-blue-300/80 mt-1">
                These comprehensive tests assess your mastery of specific grammar topics. Each test is timed and
                requires a minimum score to pass. You can retake tests to improve your scores and track your progress
                over time.
              </p>
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((topic) => (
              <Card
                key={topic.id}
                className="h-full transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-slate-900/50 border-slate-700"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2 text-slate-100">
                      <Target className="h-5 w-5 text-primary" />
                      {topic.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                  </div>
                  <CardDescription className="text-sm text-slate-400">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-slate-400">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {topic.questionCount} questions
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {topic.timeLimit} mins
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Users className="h-4 w-4 mr-1" />
                      {topic.totalAttempts.toLocaleString()} attempts
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Trophy className="h-4 w-4 mr-1" />
                      Pass: {topic.passScore}%
                    </div>
                  </div>

                  {topic.attempts > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Best Score</span>
                        <Badge className={getScoreBadgeColor(topic.bestScore, topic.passScore)}>
                          {topic.bestScore}%
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>Attempts: {topic.attempts}</span>
                        <span>Avg: {topic.averageScore}%</span>
                      </div>
                      <Progress value={topic.bestScore} className="h-2 bg-slate-800" />
                    </div>
                  )}

                  {topic.attempts === 0 && (
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
                      <Award className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-sm text-slate-400">Not attempted yet</p>
                      <p className="text-xs text-slate-500 mt-1">Avg completion time: {topic.averageTime} mins</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href={`/practice/topic-tests/${topic.id}`}>
                      {topic.attempts > 0 ? "Retake Test" : "Start Test"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Target className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-lg font-medium text-slate-200">No tests available</h3>
              <p className="text-slate-400 mt-2 mb-6">There are no tests available in this category yet.</p>
              <Button onClick={() => setActiveTab("all")} className="bg-primary hover:bg-primary/90">
                View All Tests
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-100">Test Statistics</h2>
        <Card className="bg-slate-900/50 border-slate-700">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="flex flex-col items-center p-4 bg-blue-950/30 border border-blue-800/50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 text-blue-300 mb-2">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{testTopics.length}</h3>
                <p className="text-sm text-slate-400">Total Tests</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-emerald-950/30 border border-emerald-800/50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900/50 text-emerald-300 mb-2">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{testTopics.filter((t) => t.completed).length}</h3>
                <p className="text-sm text-slate-400">Passed</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-amber-950/30 border border-amber-800/50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-900/50 text-amber-300 mb-2">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{testTopics.filter((t) => t.attempts > 0).length}</h3>
                <p className="text-sm text-slate-400">Attempted</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-purple-950/30 border border-purple-800/50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/50 text-purple-300 mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  {testTopics.filter((t) => t.bestScore >= t.passScore + 15).length}
                </h3>
                <p className="text-sm text-slate-400">Excellent</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
