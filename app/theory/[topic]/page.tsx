import { notFound } from "next/navigation"
import { PartsOfSpeechTheory } from "@/components/theory/parts-of-speech-theory"
import { SubjectVerbAgreementTheory } from "@/components/theory/subject-verb-agreement-theory"
import { TensesTheory } from "@/components/theory/tenses-theory"
import { ModifiersTheory } from "@/components/theory/modifiers-theory"
import { ParallelismTheory } from "@/components/theory/parallelism-theory"
import PronounsTheory from "@/components/theory/pronouns-theory"
import { IdiomsPhraseTheory } from "@/components/theory/idioms-phrases-theory"
import { PunctuationTheory } from "@/components/theory/punctuation-theory"
import { ArticlesDeterminersTheory } from "@/components/theory/articles-determiners-theory"
import TheoryTopics from "@/components/theory/theory-topics"
import Link from "next/link"
import { ArrowLeft, BookOpen, GraduationCap, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TopicPage({ params }: { params: { topic: string } }) {
  const { topic } = params

  const getTopicTitle = (topicId: string) => {
    const titles: Record<string, string> = {
      "parts-of-speech": "Parts of Speech",
      "subject-verb-agreement": "Subject-Verb Agreement",
      tenses: "Tenses",
      modifiers: "Modifiers",
      parallelism: "Parallelism",
      pronouns: "Pronouns",
      idioms: "Idioms & Phrases",
      punctuation: "Punctuation",
      "articles-determiners": "Articles & Determiners",
    }
    return titles[topicId] || "Grammar Theory"
  }

  const renderTheoryComponent = () => {
    switch (topic) {
      case "parts-of-speech":
        return <PartsOfSpeechTheory />
      case "subject-verb-agreement":
        return <SubjectVerbAgreementTheory />
      case "tenses":
        return <TensesTheory />
      case "modifiers":
        return <ModifiersTheory />
      case "parallelism":
        return <ParallelismTheory />
      case "pronouns":
        return <PronounsTheory />
      case "idioms":
        return <IdiomsPhraseTheory />
      case "punctuation":
        return <PunctuationTheory />
      case "articles-determiners":
        return <ArticlesDeterminersTheory />
      default:
        return notFound()
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <Link href="/dashboard" className="flex items-center text-sm text-blue-600 hover:text-blue-800 mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {getTopicTitle(topic)}
            </h1>
            <p className="text-muted-foreground mt-1">Master the fundamentals of English grammar</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1 py-1.5"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Theory</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1 py-1.5"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Essential</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1 py-1.5"
            >
              <Lightbulb className="h-3.5 w-3.5" />
              <span>Tips & Tricks</span>
            </Badge>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="sticky top-6 bg-white dark:bg-gray-950 p-5 rounded-xl border border-blue-100 dark:border-blue-900 shadow-sm">
            <TheoryTopics selectedTopic={topic} />

            <div className="mt-6 pt-6 border-t border-blue-100 dark:border-blue-900">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  <h4 className="font-medium text-sm">Learning Tip</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  Take notes as you study and try to create your own examples to reinforce your understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white dark:bg-gray-950 rounded-xl border border-blue-100 dark:border-blue-900 shadow-sm overflow-hidden">
            {renderTheoryComponent()}
          </div>
        </div>
      </div>
    </div>
  )
}
