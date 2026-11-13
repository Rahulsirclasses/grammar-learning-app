"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TextToSpeech } from "./text-to-speech"
import { BookOpen, Eye, EyeOff } from "lucide-react"

interface ContentReaderProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function ContentReader({ children, title = "Theory Content", className = "" }: ContentReaderProps) {
  const [extractedText, setExtractedText] = useState("")
  const [showReader, setShowReader] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      // Extract text content from the children, cleaning up formatting
      const textContent = contentRef.current.innerText || contentRef.current.textContent || ""

      // Clean up the text for better speech
      const cleanText = textContent
        .replace(/\s+/g, " ") // Replace multiple spaces with single space
        .replace(/\n+/g, ". ") // Replace line breaks with periods
        .replace(/[•]/g, "") // Remove bullet points
        .replace(/\d+\./g, "") // Remove numbered list markers
        .replace(/Essential|Tips & Tricks/g, "") // Remove tab headers
        .trim()

      setExtractedText(cleanText)
    }
  }, [children])

  return (
    <div className={className}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Audio Learning</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowReader(!showReader)}
          className="flex items-center gap-2"
        >
          {showReader ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          {showReader ? "Hide" : "Show"} Audio Controls
        </Button>
      </div>

      {showReader && (
        <div className="mb-4">
          <TextToSpeech text={extractedText} title={`Listen to ${title}`} showControls={true} autoHighlight={false} />
        </div>
      )}

      <div ref={contentRef}>{children}</div>
    </div>
  )
}
