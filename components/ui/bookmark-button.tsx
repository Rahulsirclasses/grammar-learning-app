"use client"

import { useState } from "react"
import { Bookmark, BookmarkPlus, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookmarks } from "@/contexts/bookmark-context"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface BookmarkButtonProps {
  topicId: string
  topicTitle: string
  sectionTitle: string
  content: string
  tab: "essential" | "tips"
  className?: string
}

export function BookmarkButton({ topicId, topicTitle, sectionTitle, content, tab, className }: BookmarkButtonProps) {
  const { addBookmark, removeBookmark, hasBookmark, getBookmarksBySectionTitle } = useBookmarks()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [bookmarkContent, setBookmarkContent] = useState(content)

  const isBookmarked = hasBookmark(sectionTitle, topicId)
  const existingBookmark = getBookmarksBySectionTitle(sectionTitle, topicId)

  const handleAddBookmark = () => {
    addBookmark({
      topicId,
      topicTitle,
      sectionTitle,
      content: bookmarkContent,
      tab,
    })
    setIsDialogOpen(false)
    toast({
      title: "Bookmark added",
      description: `"${sectionTitle}" has been saved to your bookmarks.`,
    })
  }

  const handleRemoveBookmark = () => {
    if (existingBookmark) {
      removeBookmark(existingBookmark.id)
      toast({
        title: "Bookmark removed",
        description: `"${sectionTitle}" has been removed from your bookmarks.`,
        variant: "destructive",
      })
    }
  }

  return (
    <>
      {isBookmarked ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemoveBookmark}
          className={cn("text-amber-500 hover:text-amber-600 hover:bg-amber-50", className)}
        >
          <Bookmark className="h-4 w-4 mr-1 fill-amber-500" />
          <span className="text-xs">Bookmarked</span>
        </Button>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className={cn("text-muted-foreground hover:text-blue-600", className)}>
              <BookmarkPlus className="h-4 w-4 mr-1" />
              <span className="text-xs">Bookmark</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Save Bookmark</DialogTitle>
              <DialogDescription>
                Edit the content you want to save for this bookmark. You can customize it to focus on what's most
                important to you.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="bookmark-content" className="text-sm font-medium">
                  Bookmark Content
                </label>
                <Textarea
                  id="bookmark-content"
                  value={bookmarkContent}
                  onChange={(e) => setBookmarkContent(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
              <Button type="button" onClick={handleAddBookmark} className="flex items-center">
                <Check className="h-4 w-4 mr-1" />
                Save Bookmark
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
