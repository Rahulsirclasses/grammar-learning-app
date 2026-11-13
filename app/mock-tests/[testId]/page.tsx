"use client"

import { useState, useEffect } from "react"
import { notFound, useRouter } from "next/navigation"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BookOpen, Clock, FileText, AlertTriangle, CheckCircle2, HelpCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface Section {
  title: string
  content: string
}

interface MockTest {
  id: string
  title: string
  description: string
  duration: number
  questions: number
  sections: Section[]
}

export default function MockTestPage({ params }: { params: { testId: string } }) {
  const { testId } = params
  const [test, setTest] = useState<MockTest | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/mock-tests/${testId}`)
        // For a generic error, the catch block will handle it.
        const data = await response.json()
        if (data.test) {
          setTest(data.test)
        }
      } catch (error) {
        console.error("Failed to fetch test details:", error)
        toast.error("Failed to load test details")
      } finally {
        setLoading(false)
      }
    }

    fetchTestDetails()
  }, [testId])

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Preparing test details...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (!test) {
    notFound()
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{test.title}</h1>
          <p className="text-muted-foreground text-lg">{test.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-primary/10 shadow-lg shadow-primary/5 rounded-2xl overflow-hidden">
            <CardHeader className="pb-2 bg-primary/5 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center text-primary">
                <Clock className="mr-2 h-4 w-4" />
                Duration
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-3xl font-black text-foreground">{test.duration} <span className="text-base font-bold text-muted-foreground">minutes</span></p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 shadow-lg shadow-primary/5 rounded-2xl overflow-hidden">
            <CardHeader className="pb-2 bg-primary/5 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center text-primary">
                <HelpCircle className="mr-2 h-4 w-4" />
                Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-3xl font-black text-foreground">{test.questions} <span className="text-base font-bold text-muted-foreground">items</span></p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 shadow-lg shadow-primary/5 rounded-2xl overflow-hidden">
            <CardHeader className="pb-2 bg-primary/5 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center text-primary">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Passing Score
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-3xl font-black text-foreground">70% <span className="text-base font-bold text-muted-foreground">minimum</span></p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/50 rounded-xl mb-6">
            <TabsTrigger value="overview" className="flex items-center justify-center py-2.5 rounded-lg font-bold">
              <BookOpen className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="instructions" className="flex items-center justify-center py-2.5 rounded-lg font-bold">
              <FileText className="h-4 w-4 mr-2" />
              Instructions
            </TabsTrigger>
            <TabsTrigger value="question-types" className="flex items-center justify-center py-2.5 rounded-lg font-bold">
              <HelpCircle className="h-4 w-4 mr-2" />
              Types
            </TabsTrigger>
            <TabsTrigger value="scoring" className="flex items-center justify-center py-2.5 rounded-lg font-bold">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Scoring
            </TabsTrigger>
          </TabsList>

          {test.sections && test.sections.map((section, index) => (
            <TabsContent key={index} value={section.title.toLowerCase().replace(/\s+/g, "-")}>
              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-primary/10"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="pt-6">
          <Button size="lg" className="w-full h-16 text-xl font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform" onClick={() => router.push(`/mock-tests/${testId}/take`)}>
            Begin Assessment
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
