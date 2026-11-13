"use client"

import { BookmarkSection } from "@/components/ui/bookmark-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function BookmarksPage() {
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
              My Bookmarks
            </h1>
            <p className="text-muted-foreground mt-1">Your saved grammar concepts and notes</p>
          </div>
          <Button asChild>
            <Link href="/theory">
              <BookOpen className="h-4 w-4 mr-2" />
              Browse Theory
            </Link>
          </Button>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <BookmarkSection className="w-full" />
      </div>
    </div>
  )
}
