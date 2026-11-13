"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"
import { createBrowserClient } from "@/lib/mongodb/client"

interface MockTestFormProps {
  mode: "create" | "edit"
  testId?: string
  initialData?: any
}

export default function MockTestForm({ mode, testId: initialTestId, initialData }: MockTestFormProps) {
  const router = useRouter()
  const dbClient = createBrowserClient()

  const [title, setTitle] = useState(initialData?.title || "")
  const [description, setDescription] = useState(initialData?.description || "")
  const [duration, setDuration] = useState(initialData?.duration || 60)
  const [totalQuestions, setTotalQuestions] = useState(initialData?.total_questions || 50)
  const [passingScore, setPassingScore] = useState(initialData?.passing_score || 70)
  const [sections, setSections] = useState(
    initialData?.sections || [
      { title: "Test Overview", content: "" },
      { title: "Instructions", content: "" },
      { title: "Question Types", content: "" },
      { title: "Scoring", content: "" },
    ],
  )
  const [testId, setTestId] = useState(initialTestId || "")

  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")

  const handleAddSection = () => {
    setSections([...sections, { title: "", content: "" }])
  }

  const handleRemoveSection = (index: number) => {
    if (sections.length > 1) {
      setSections(sections.filter((_, i) => i !== index))
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError("")

    try {
      const mockTestData = {
        id: testId,
        title,
        description,
        duration,
        total_questions: totalQuestions,
        passing_score: passingScore,
        updated_at: new Date().toISOString(),
      }

      if (mode === "create") {
        const { error: insertError } = await dbClient.from("mock_tests").insert(mockTestData)

        if (insertError) throw insertError

        // Insert sections
        const sectionsData = sections.map((section, index) => ({
          mock_test_id: testId,
          title: section.title,
          content: section.content,
          section_order: index,
        }))

        const { error: sectionsError } = await dbClient.from("mock_test_sections").insert(sectionsData)

        if (sectionsError) throw sectionsError
      } else {
        const { error: updateError } = await dbClient.from("mock_tests").update(mockTestData).eq("id", testId)

        if (updateError) throw updateError

        // Delete existing sections
        await dbClient.from("mock_test_sections").delete().eq("mock_test_id", testId)

        // Insert new sections
        const sectionsData = sections.map((section, index) => ({
          mock_test_id: testId,
          title: section.title,
          content: section.content,
          section_order: index,
        }))

        const { error: sectionsError } = await dbClient.from("mock_test_sections").insert(sectionsData)

        if (sectionsError) throw sectionsError
      }

      router.push("/admin-panel-secret/mock-tests/list")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Failed to save mock test")
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
          <h1 className="text-3xl font-bold">{mode === "create" ? "Create Mock Test" : "Edit Mock Test"}</h1>
          <p className="text-muted-foreground">Configure your mock test details</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Test Details</CardTitle>
            <CardDescription>Enter the mock test information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Test ID (URL-friendly)</Label>
              <Input
                placeholder="e.g., full-verbal-1"
                value={testId}
                onChange={(e) => setTestId(e.target.value)}
                disabled={mode === "edit"}
              />
            </div>

            <div className="space-y-2">
              <Label>Title</Label>
              <Input placeholder="Full Verbal Test 1" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Comprehensive verbal reasoning assessment..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Duration (minutes)</Label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label>Total Questions</Label>
                <Input
                  type="number"
                  value={totalQuestions}
                  onChange={(e) => setTotalQuestions(Number.parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label>Passing Score (%)</Label>
                <Input
                  type="number"
                  value={passingScore}
                  onChange={(e) => setPassingScore(Number.parseInt(e.target.value) || 0)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Test Sections</Label>
                <Button type="button" variant="outline" size="sm" onClick={handleAddSection}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>

              {sections.map((section, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-4">
                        <Input
                          placeholder="Section title"
                          value={section.title}
                          onChange={(e) => {
                            const newSections = [...sections]
                            newSections[index].title = e.target.value
                            setSections(newSections)
                          }}
                        />
                        <Textarea
                          placeholder="Section content"
                          value={section.content}
                          onChange={(e) => {
                            const newSections = [...sections]
                            newSections[index].content = e.target.value
                            setSections(newSections)
                          }}
                          rows={3}
                        />
                      </div>
                      {sections.length > 1 && (
                        <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveSection(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={handleSave} disabled={isSaving} className="flex-1">
                {isSaving ? "Saving..." : mode === "create" ? "Create Mock Test" : "Update Mock Test"}
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
