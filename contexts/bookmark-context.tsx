"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Bookmark {
  id: string
  topicId: string
  topicTitle: string
  sectionTitle: string
  content: string
  tab: "essential" | "tips"
  createdAt: number
  color?: string
}

interface BookmarkContextType {
  bookmarks: Bookmark[]
  addBookmark: (bookmark: Omit<Bookmark, "id" | "createdAt">) => void
  removeBookmark: (id: string) => void
  hasBookmark: (sectionTitle: string, topicId: string) => boolean
  getBookmarksBySectionTitle: (sectionTitle: string, topicId: string) => Bookmark | undefined
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("grammar-pro-bookmarks")
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks))
      } catch (error) {
        console.error("Failed to parse bookmarks:", error)
      }
    }
  }, [])

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("grammar-pro-bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (bookmark: Omit<Bookmark, "id" | "createdAt">) => {
    const id = `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const newBookmark: Bookmark = {
      ...bookmark,
      id,
      createdAt: Date.now(),
      color: getRandomColor(),
    }
    setBookmarks((prev) => [...prev, newBookmark])
  }

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id))
  }

  const hasBookmark = (sectionTitle: string, topicId: string) => {
    return bookmarks.some((bookmark) => bookmark.sectionTitle === sectionTitle && bookmark.topicId === topicId)
  }

  const getBookmarksBySectionTitle = (sectionTitle: string, topicId: string) => {
    return bookmarks.find((bookmark) => bookmark.sectionTitle === sectionTitle && bookmark.topicId === topicId)
  }

  // Helper function to generate random pastel colors for bookmarks
  const getRandomColor = () => {
    const colors = [
      "bg-blue-100 text-blue-800 border-blue-200",
      "bg-green-100 text-green-800 border-green-200",
      "bg-amber-100 text-amber-800 border-amber-200",
      "bg-purple-100 text-purple-800 border-purple-200",
      "bg-pink-100 text-pink-800 border-pink-200",
      "bg-indigo-100 text-indigo-800 border-indigo-200",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        hasBookmark,
        getBookmarksBySectionTitle,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarkContext)
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider")
  }
  return context
}
