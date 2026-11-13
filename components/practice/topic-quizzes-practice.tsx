"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, BookOpen, CheckCircle, Clock, Trophy } from "lucide-react"
import Link from "next/link"

// Define the quiz topic type
type QuizTopic = {
  id: string
  title: string
  description: string
  uniqueQuestions: boolean // Each topic has its own unique set of questions
  questionCount: number
  difficulty: "Easy" | "Medium" | "Hard"
  estimatedTime: number // in minutes
  progress: number // 0-100
  completed: boolean
  category: "basic" | "intermediate" | "advanced"
}

// Sample quiz topics
const quizTopics: QuizTopic[] = [
  {
    id: "subject-verb-agreement",
    title: "Subject-Verb Agreement",
    description: "Master the rules of making subjects and verbs agree in number and person.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Medium",
    estimatedTime: 15,
    progress: 0,
    completed: false,
    category: "basic",
  },
  {
    id: "tenses",
    title: "Tenses",
    description: "Practice using the correct tense forms in various contexts.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Medium",
    estimatedTime: 15,
    progress: 0,
    completed: false,
    category: "basic",
  },
  {
    id: "modifiers",
    title: "Modifiers",
    description: "Learn to use modifiers correctly and avoid dangling modifiers.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Hard",
    estimatedTime: 20,
    progress: 0,
    completed: false,
    category: "intermediate",
  },
  {
    id: "pronouns",
    title: "Pronouns",
    description: "Master pronoun usage, agreement, and case.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Medium",
    estimatedTime: 15,
    progress: 0,
    completed: false,
    category: "basic",
  },
  {
    id: "parallelism",
    title: "Parallelism",
    description: "Learn to maintain parallel structure in sentences.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Hard",
    estimatedTime: 20,
    progress: 0,
    completed: false,
    category: "intermediate",
  },
  {
    id: "idioms-phrases",
    title: "Idioms & Phrases",
    description: "Master common idioms and phrases used in English.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Hard",
    estimatedTime: 20,
    progress: 0,
    completed: false,
    category: "advanced",
  },
  {
    id: "punctuation",
    title: "Punctuation",
    description: "Learn the correct usage of punctuation marks.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Medium",
    estimatedTime: 15,
    progress: 0,
    completed: false,
    category: "intermediate",
  },
  {
    id: "articles-determiners",
    title: "Articles & Determiners",
    description: "Master the usage of articles and determiners in English.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Easy",
    estimatedTime: 10,
    progress: 0,
    completed: false,
    category: "basic",
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Learn to use prepositions correctly in various contexts.",
    uniqueQuestions: true, // Each topic has its own unique set of questions
    questionCount: 10,
    difficulty: "Medium",
    estimatedTime: 15,
    progress: 0,
    completed: false,
    category: "intermediate",
  },
]

export default function TopicQuizzesPractice() {
  const [activeTab, setActiveTab] = useState<string>("all")

  // Filter topics based on active tab
  const filteredTopics = activeTab === "all" ? quizTopics : quizTopics.filter((topic) => topic.category === activeTab)

  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Topics</TabsTrigger>
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <p className="text-sm text-muted-foreground mb-4">
          Each topic contains unique questions specific to that grammar concept.
        </p>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((topic) => (
              <Card key={topic.id} className="h-full transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {topic.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                  </div>
                  <CardDescription>
                    {topic.description}{" "}
                    {topic.uniqueQuestions && (
                      <span className="block mt-1 text-xs text-blue-600 dark:text-blue-400">
                        Features topic-specific questions
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {topic.questionCount} questions
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {topic.estimatedTime} mins
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <Progress value={topic.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/practice/topic-quizzes/${topic.id}`}>
                      {topic.progress > 0 && topic.progress < 100 ? "Continue Quiz" : "Start Quiz"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No quizzes available</h3>
              <p className="text-muted-foreground mt-2 mb-6">There are no quizzes available in this category yet.</p>
              <Button onClick={() => setActiveTab("all")}>View All Topics</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-2">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{quizTopics.length}</h3>
                <p className="text-sm text-muted-foreground">Total Quizzes</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 mb-2">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{quizTopics.filter((t) => t.completed).length}</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-700 mb-2">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">0</h3>
                <p className="text-sm text-muted-foreground">Mastered Topics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
