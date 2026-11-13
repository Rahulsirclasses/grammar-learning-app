"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BookText,
  Clock,
  AlignJustify,
  Pencil,
  GitBranch,
  UserRound,
  MessageSquareQuote,
  FileSpreadsheet,
  FileText,
} from "lucide-react"

interface TheoryTopicsProps {
  selectedTopic?: string
}

export default function TheoryTopics({ selectedTopic }: TheoryTopicsProps) {
  const router = useRouter()
  const [activeTopic, setActiveTopic] = useState(selectedTopic || "")

  useEffect(() => {
    if (selectedTopic) {
      setActiveTopic(selectedTopic)
    }
  }, [selectedTopic])

  const topics = [
    { id: "parts-of-speech", name: "Parts of Speech", icon: <BookText className="h-4 w-4" />, color: "text-blue-500" },
    { id: "tenses", name: "Tenses", icon: <Clock className="h-4 w-4" />, color: "text-green-500" },
    {
      id: "subject-verb-agreement",
      name: "Subject-Verb Agreement",
      icon: <AlignJustify className="h-4 w-4" />,
      color: "text-purple-500",
    },
    { id: "modifiers", name: "Modifiers", icon: <Pencil className="h-4 w-4" />, color: "text-amber-500" },
    { id: "parallelism", name: "Parallelism", icon: <GitBranch className="h-4 w-4" />, color: "text-red-500" },
    { id: "pronouns", name: "Pronouns", icon: <UserRound className="h-4 w-4" />, color: "text-indigo-500" },
    {
      id: "idioms",
      name: "Idioms & Phrases",
      icon: <MessageSquareQuote className="h-4 w-4" />,
      color: "text-pink-500",
    },
    { id: "punctuation", name: "Punctuation", icon: <FileSpreadsheet className="h-4 w-4" />, color: "text-cyan-500" },
    {
      id: "articles-determiners",
      name: "Articles & Determiners",
      icon: <FileText className="h-4 w-4" />,
      color: "text-emerald-500",
    },
  ]

  const handleTopicClick = (topicId: string) => {
    setActiveTopic(topicId)
    router.push(`/theory/${topicId}`)
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Grammar Topics</h3>
        <p className="text-xs text-muted-foreground">Select a topic to study</p>
      </div>

      <div className="space-y-1.5">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm flex items-center gap-2.5 transition-all duration-200 ${
              activeTopic === topic.id
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-sm"
                : "hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => handleTopicClick(topic.id)}
          >
            <span className={activeTopic === topic.id ? "text-white" : topic.color}>{topic.icon}</span>
            <span>{topic.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span className="font-medium">3/9 completed</span>
        </div>
        <div className="mt-2 h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
