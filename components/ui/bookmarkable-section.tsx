"use client"

import type { ReactNode } from "react"
import { BookmarkButton } from "./bookmark-button"
import { cn } from "@/lib/utils"

interface BookmarkableSectionProps {
  topicId: string
  topicTitle: string
  sectionTitle: string
  content: string
  tab: "essential" | "tips"
  children: ReactNode
  className?: string
}

export function BookmarkableSection({
  topicId,
  topicTitle,
  sectionTitle,
  content,
  tab,
  children,
  className,
}: BookmarkableSectionProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <BookmarkButton
          topicId={topicId}
          topicTitle={topicTitle}
          sectionTitle={sectionTitle}
          content={content}
          tab={tab}
        />
      </div>
      {children}
    </div>
  )
}
