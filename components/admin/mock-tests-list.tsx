"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import { createBrowserClient } from "@/lib/mongodb/client"
import { useRouter } from "next/navigation"

interface MockTest {
  id: string
  title: string
  description: string
  duration: number
  total_questions: number
  created_at: string
}

export default function MockTestsList({ mockTests }: { mockTests: MockTest[] }) {
  const router = useRouter()
  const dbClient = createBrowserClient()

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this mock test?")) {
      const { error } = await dbClient.from("mock_tests").delete().eq("id", id)

      if (!error) {
        router.refresh()
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/admin-panel-secret/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Mock Tests</h1>
          <p className="text-muted-foreground">Manage all mock tests</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Mock Tests ({mockTests.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Questions</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{test.title}</div>
                          <div className="text-sm text-muted-foreground">{test.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{test.duration} min</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{test.total_questions}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin-panel-secret/mock-tests/edit/${test.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(test.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
