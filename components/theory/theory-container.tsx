"use client"

import { useState, useRef, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar"
import { ContentReader } from "@/components/ui/content-reader"
import { BookmarkableSection } from "@/components/ui/bookmarkable-section"

interface TheoryContainerProps {
  essentialContent: ReactNode
  tipsContent: ReactNode
  title?: string
  topicId: string
}

export function TheoryContainer({ essentialContent, tipsContent, title = "Theory", topicId }: TheoryContainerProps) {
  const [activeTab, setActiveTab] = useState("essential")
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full">
      <div className="flex w-full">
        <Button
          variant={activeTab === "essential" ? "default" : "outline"}
          onClick={() => setActiveTab("essential")}
          className="flex-1 transition-all duration-200"
        >
          Essential
        </Button>
        <Button
          variant={activeTab === "tips" ? "default" : "outline"}
          onClick={() => setActiveTab("tips")}
          className="flex-1 transition-all duration-200"
        >
          Tips & Tricks
        </Button>
      </div>

      <ReadingProgressBar targetRef={contentRef} />

      <div ref={contentRef} className="relative mt-1 min-h-[300px] max-h-[600px] overflow-y-auto pr-1 scroll-smooth">
        {activeTab === "essential" && (
          <div className="animate-in fade-in-0 duration-300 slide-in-from-bottom-2">
            <BookmarkableSection
              topicId={topicId}
              topicTitle={title}
              sectionTitle={`${title} - Essential Concepts`}
              content={typeof essentialContent === "string" ? essentialContent : "Essential concepts for " + title}
              tab="essential"
            >
              <ContentReader title={`${title} - Essential`}>{essentialContent}</ContentReader>
            </BookmarkableSection>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="animate-in fade-in-0 duration-300 slide-in-from-bottom-2">
            <BookmarkableSection
              topicId={topicId}
              topicTitle={title}
              sectionTitle={`${title} - Tips & Tricks`}
              content={typeof tipsContent === "string" ? tipsContent : "Tips and tricks for " + title}
              tab="tips"
            >
              <ContentReader title={`${title} - Tips & Tricks`}>{tipsContent}</ContentReader>
            </BookmarkableSection>
          </div>
        )}
      </div>
    </div>
  )
}
