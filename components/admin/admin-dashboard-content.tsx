"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileQuestion, ClipboardList, LogOut, Plus, List } from "lucide-react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@/lib/mongodb/client"

interface AdminDashboardContentProps {
  stats: {
    questions: number
    mockTests: number
    theoryTopics: number
  }
  adminEmail: string
}

export default function AdminDashboardContent({ stats, adminEmail }: AdminDashboardContentProps) {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    const dbClient = createBrowserClient()
    await dbClient.auth.signOut()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Grammar Learning App Management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right">
              <p className="font-medium">{adminEmail}</p>
              <p className="text-muted-foreground">Administrator</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <FileQuestion className="mr-2 h-4 w-4 text-blue-600" />
                Practice Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.questions}</p>
              <p className="text-xs text-muted-foreground mt-1">Total questions in database</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <ClipboardList className="mr-2 h-4 w-4 text-green-600" />
                Mock Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.mockTests}</p>
              <p className="text-xs text-muted-foreground mt-1">Available mock tests</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <BookOpen className="mr-2 h-4 w-4 text-purple-600" />
                Theory Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.theoryTopics}</p>
              <p className="text-xs text-muted-foreground mt-1">Theory content topics</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="questions" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl">
            <TabsTrigger value="questions">
              <FileQuestion className="h-4 w-4 mr-2" />
              Questions
            </TabsTrigger>
            <TabsTrigger value="mock-tests">
              <ClipboardList className="h-4 w-4 mr-2" />
              Mock Tests
            </TabsTrigger>
            <TabsTrigger value="theory">
              <BookOpen className="h-4 w-4 mr-2" />
              Theory
            </TabsTrigger>
          </TabsList>

          {/* Practice Questions Tab */}
          <TabsContent value="questions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Practice Questions</CardTitle>
                <CardDescription>Create, edit, and organize practice questions for students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/admin-panel-secret/questions/new">
                    <Button className="w-full" size="lg">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Question
                    </Button>
                  </Link>
                  <Link href="/admin-panel-secret/questions/list">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <List className="h-4 w-4 mr-2" />
                      View All Questions
                    </Button>
                  </Link>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/admin-panel-secret/questions/list?type=mcq">MCQ Questions</Link>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/admin-panel-secret/questions/list?type=fill-blank">Fill Blanks</Link>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/admin-panel-secret/questions/list?type=error-spotting">Error Spotting</Link>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/admin-panel-secret/questions/list?type=sentence-correction">
                        Sentence Correction
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mock Tests Tab */}
          <TabsContent value="mock-tests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Mock Tests</CardTitle>
                <CardDescription>Create and manage comprehensive mock tests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/admin-panel-secret/mock-tests/new">
                    <Button className="w-full" size="lg">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Mock Test
                    </Button>
                  </Link>
                  <Link href="/admin-panel-secret/mock-tests/list">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <List className="h-4 w-4 mr-2" />
                      View All Tests
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Theory Content Tab */}
          <TabsContent value="theory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Theory Content</CardTitle>
                <CardDescription>Create and update theory lessons and explanations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/admin-panel-secret/theory/new">
                    <Button className="w-full" size="lg">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Theory Topic
                    </Button>
                  </Link>
                  <Link href="/admin-panel-secret/theory/list">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <List className="h-4 w-4 mr-2" />
                      View All Topics
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
