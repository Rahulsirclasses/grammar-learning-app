"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"
import { createBrowserClient } from "@/lib/mongodb/client"

interface QuestionFormProps {
  mode: "create" | "edit"
  questionId?: string
  initialData?: any
}

export default function QuestionForm({ mode, questionId, initialData }: QuestionFormProps) {
  const router = useRouter()
  const dbClient = createBrowserClient()

  const [questionType, setQuestionType] = useState(initialData?.question_type || "mcq")
  const [topic, setTopic] = useState(initialData?.topic || "")
  const [difficulty, setDifficulty] = useState(initialData?.difficulty || "medium")
  const [questionText, setQuestionText] = useState(initialData?.question_text || "")
  const [explanation, setExplanation] = useState(initialData?.explanation || "")
  const [hint, setHint] = useState(initialData?.hint || "")
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || "")
  const [tags, setTags] = useState<string[]>(initialData?.tags || [])
  const [tagInput, setTagInput] = useState("")

  // MCQ specific
  const [mcqOptions, setMcqOptions] = useState<string[]>(initialData?.options || ["", "", "", ""])
  const [mcqCorrectAnswer, setMcqCorrectAnswer] = useState(initialData?.correct_answer?.index || 0)

  // Fill Blank specific
  const [fillBlankAnswers, setFillBlankAnswers] = useState<string[]>(initialData?.correct_answer?.answers || [""])

  // Error Spotting specific
  const [errorParts, setErrorParts] = useState<string[]>(initialData?.options?.parts || ["", "", "", ""])
  const [errorPartIndex, setErrorPartIndex] = useState(initialData?.correct_answer?.errorPart || -1)

  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")

  const topics = [
    "subject-verb-agreement",
    "tenses",
    "modifiers",
    "pronouns",
    "parallelism",
    "idioms-phrases",
    "punctuation",
    "articles-determiners",
    "prepositions",
    "conditionals",
    "relative-clauses",
    "comparatives",
    "gerunds",
    "modals",
    "verbs",
  ]

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handleAddMcqOption = () => {
    setMcqOptions([...mcqOptions, ""])
  }

  const handleRemoveMcqOption = (index: number) => {
    if (mcqOptions.length > 2) {
      const newOptions = mcqOptions.filter((_, i) => i !== index)
      setMcqOptions(newOptions)
      if (mcqCorrectAnswer >= newOptions.length) {
        setMcqCorrectAnswer(0)
      }
    }
  }

  const handleAddFillBlank = () => {
    setFillBlankAnswers([...fillBlankAnswers, ""])
  }

  const handleRemoveFillBlank = (index: number) => {
    if (fillBlankAnswers.length > 1) {
      setFillBlankAnswers(fillBlankAnswers.filter((_, i) => i !== index))
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError("")

    try {
      let options: any = null
      let correctAnswer: any = null

      // Prepare data based on question type
      switch (questionType) {
        case "mcq":
          options = mcqOptions
          correctAnswer = { index: mcqCorrectAnswer, answer: mcqOptions[mcqCorrectAnswer] }
          break
        case "fill-blank":
          correctAnswer = { answers: fillBlankAnswers }
          break
        case "error-spotting":
          options = { parts: errorParts }
          correctAnswer = { errorPart: errorPartIndex }
          break
        case "sentence-correction":
          options = mcqOptions
          correctAnswer = { index: mcqCorrectAnswer, answer: mcqOptions[mcqCorrectAnswer] }
          break
      }

      const questionData = {
        question_type: questionType,
        topic,
        difficulty,
        question_text: questionText,
        options,
        correct_answer: correctAnswer,
        explanation,
        hint: hint || null,
        image_url: imageUrl || null,
        tags,
        updated_at: new Date().toISOString(),
      }

      if (mode === "create") {
        const { error: insertError } = await dbClient.from("practice_questions").insert(questionData)

        if (insertError) throw insertError
      } else {
        const { error: updateError } = await dbClient
          .from("practice_questions")
          .update(questionData)
          .eq("id", questionId)

        if (updateError) throw updateError
      }

      router.push("/admin-panel-secret/questions/list")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Failed to save question")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/admin-panel-secret/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{mode === "create" ? "Create New Question" : "Edit Question"}</h1>
          <p className="text-muted-foreground">Add a new practice question to the database</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Question Details</CardTitle>
            <CardDescription>Fill in the question information below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Question Type */}
            <div className="space-y-2">
              <Label>Question Type</Label>
              <Select value={questionType} onValueChange={setQuestionType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mcq">Multiple Choice Question (MCQ)</SelectItem>
                  <SelectItem value="fill-blank">Fill in the Blanks</SelectItem>
                  <SelectItem value="error-spotting">Error Spotting</SelectItem>
                  <SelectItem value="sentence-correction">Sentence Correction</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Topic */}
            <div className="space-y-2">
              <Label>Topic</Label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty */}
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <Label>Question Text</Label>
              <Textarea
                placeholder="Enter the question text (use _____ for blanks in fill-blank questions)"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                rows={3}
              />
            </div>

            {/* MCQ Options */}
            {(questionType === "mcq" || questionType === "sentence-correction") && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Answer Options</Label>
                  <Button type="button" variant="outline" size="sm" onClick={handleAddMcqOption}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Option
                  </Button>
                </div>
                {mcqOptions.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...mcqOptions]
                        newOptions[index] = e.target.value
                        setMcqOptions(newOptions)
                      }}
                    />
                    <Button
                      type="button"
                      variant={mcqCorrectAnswer === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMcqCorrectAnswer(index)}
                    >
                      {mcqCorrectAnswer === index ? "Correct" : "Mark Correct"}
                    </Button>
                    {mcqOptions.length > 2 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveMcqOption(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Fill Blank Answers */}
            {questionType === "fill-blank" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Correct Answers (one for each blank)</Label>
                  <Button type="button" variant="outline" size="sm" onClick={handleAddFillBlank}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Blank
                  </Button>
                </div>
                {fillBlankAnswers.map((answer, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Answer for blank ${index + 1}`}
                      value={answer}
                      onChange={(e) => {
                        const newAnswers = [...fillBlankAnswers]
                        newAnswers[index] = e.target.value
                        setFillBlankAnswers(newAnswers)
                      }}
                    />
                    {fillBlankAnswers.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveFillBlank(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Error Spotting Parts */}
            {questionType === "error-spotting" && (
              <div className="space-y-2">
                <Label>Sentence Parts</Label>
                {errorParts.map((part, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Part ${index + 1}`}
                      value={part}
                      onChange={(e) => {
                        const newParts = [...errorParts]
                        newParts[index] = e.target.value
                        setErrorParts(newParts)
                      }}
                    />
                    <Button
                      type="button"
                      variant={errorPartIndex === index ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => setErrorPartIndex(index)}
                    >
                      {errorPartIndex === index ? "Error" : "Mark Error"}
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant={errorPartIndex === -1 ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setErrorPartIndex(-1)}
                  className="w-full"
                >
                  No Error in Sentence
                </Button>
              </div>
            )}

            {/* Explanation */}
            <div className="space-y-2">
              <Label>Explanation</Label>
              <Textarea
                placeholder="Explain why the answer is correct"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                rows={3}
              />
            </div>

            {/* Hint (Optional) */}
            <div className="space-y-2">
              <Label>Hint (Optional)</Label>
              <Input
                placeholder="Provide a hint to help students"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
              />
            </div>

            {/* Image URL (Optional) */}
            <div className="space-y-2">
              <Label>Image URL (Optional)</Label>
              <Input
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddTag()
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-destructive">
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-4">
              <Button onClick={handleSave} disabled={isSaving} className="flex-1">
                {isSaving ? "Saving..." : mode === "create" ? "Create Question" : "Update Question"}
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <Link href="/admin-panel-secret/dashboard">Cancel</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
