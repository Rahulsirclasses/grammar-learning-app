"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, BarChart, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface MockTest {
  id: string
  title: string
  description: string
  duration: number
  questions: number
  difficulty: string
  category: string
  completionRate: number
}

export default function MockTestList() {
  const [tests, setTests] = useState<MockTest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/mock-tests")
        if (!response.ok) throw new Error("Failed to fetch mock tests")
        const data = await response.json()
        if (data.tests) {
          setTests(data.tests)
        }
      } catch (error) {
        console.error("Failed to fetch mock tests:", error)
        toast.error("Failed to load mock tests")
      } finally {
        setLoading(false)
      }
    }

    fetchTests()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading mock tests...</p>
      </div>
    )
  }

  if (tests.length === 0) {
    return (
      <Card className="p-12 text-center border-dashed border-2">
        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
        <CardTitle>No mock tests available</CardTitle>
        <CardDescription className="mt-2">
          We are currently preparing more comprehensive tests. Check back soon!
        </CardDescription>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tests.map((test) => (
        <Card key={test.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">{test.title}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center">
                <Clock className="mr-1.5 h-4 w-4 text-primary" />
                <span>{test.duration} min</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-1.5 h-4 w-4 text-primary" />
                <span>{test.questions} Qs</span>
              </div>
              <div className="flex items-center">
                <BarChart className="mr-1.5 h-4 w-4 text-primary" />
                <span>{test.difficulty}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 pt-4 mt-auto border-t">
            <Button asChild className="w-full font-bold">
              <Link href={`/mock-tests/${test.id}`}>Take Assessment</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
