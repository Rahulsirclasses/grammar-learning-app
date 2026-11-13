"use client"

import type React from "react"

import { useState } from "react"
import { BookmarkIcon, Clock, Search, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBookmarks, type Bookmark } from "@/contexts/bookmark-context"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BookmarkSectionProps {
  className?: string
}

export function BookmarkSection({ className }: BookmarkSectionProps) {
  const { bookmarks, removeBookmark } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBookmark, setSelectedBookmark] = useState<Bookmark | null>(null)

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.topicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleRemoveBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    removeBookmark(id)
  }

  const openBookmarkDetail = (bookmark: Bookmark) => {
    setSelectedBookmark(bookmark)
  }

  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      <div className="flex flex-col space-y-1.5 p-4 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center">
            <BookmarkIcon className="h-4 w-4 mr-2 text-blue-600" />
            My Bookmarks
          </h3>
          <Badge variant="outline" className="text-xs font-normal">
            {bookmarks.length} saved
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Your saved grammar concepts and notes.</p>
      </div>
      <div className="p-4 pt-0">
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search bookmarks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredBookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <BookmarkIcon className="h-12 w-12 text-muted-foreground/30 mb-3" />
            {searchQuery ? (
              <>
                <p className="text-sm font-medium">No matching bookmarks found</p>
                <p className="text-xs text-muted-foreground mt-1">Try a different search term</p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">No bookmarks yet</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Save important concepts by clicking the bookmark button in theory sections
                </p>
              </>
            )}
          </div>
        ) : (
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-3">
              {filteredBookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className={cn(
                    "group relative rounded-lg border p-3 hover:bg-accent/50 cursor-pointer transition-colors",
                    bookmark.color || "bg-blue-50 border-blue-200",
                  )}
                  onClick={() => openBookmarkDetail(bookmark)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm line-clamp-1">{bookmark.sectionTitle}</h4>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handleRemoveBookmark(bookmark.id, e)}
                    >
                      <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-red-500" />
                      <span className="sr-only">Remove bookmark</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{bookmark.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="outline" className="text-[10px] px-1 py-0 font-normal">
                      {bookmark.topicTitle}
                    </Badge>
                    <div className="flex items-center text-[10px] text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDistanceToNow(bookmark.createdAt, { addSuffix: true })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>

      <Dialog open={!!selectedBookmark} onOpenChange={(open) => !open && setSelectedBookmark(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedBookmark?.sectionTitle}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-xs font-normal">
                {selectedBookmark?.topicTitle}
              </Badge>
              <Badge variant="outline" className="text-xs font-normal capitalize">
                {selectedBookmark?.tab} content
              </Badge>
              <div className="text-xs text-muted-foreground ml-auto">
                {selectedBookmark && formatDistanceToNow(selectedBookmark.createdAt, { addSuffix: true })}
              </div>
            </div>
            <div className="bg-muted/50 rounded-md p-4 text-sm whitespace-pre-wrap">{selectedBookmark?.content}</div>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={() => {
                if (selectedBookmark) {
                  removeBookmark(selectedBookmark.id)
                  setSelectedBookmark(null)
                }
              }}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete Bookmark
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSelectedBookmark(null)}>
              <X className="h-4 w-4 mr-1" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
