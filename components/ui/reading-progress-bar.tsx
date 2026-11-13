"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ReadingProgressBarProps {
  targetRef: React.RefObject<HTMLElement>
  className?: string
}

export function ReadingProgressBar({ targetRef, className = "" }: ReadingProgressBarProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const handleScroll = () => {
      const scrollTop = element.scrollTop
      const scrollHeight = element.scrollHeight - element.clientHeight

      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100
        setReadingProgress(progress)
      } else {
        setReadingProgress(0)
      }
    }

    element.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      element.removeEventListener("scroll", handleScroll)
    }
  }, [targetRef])

  return (
    <div className={`h-1 bg-gray-200 dark:bg-gray-800 w-full sticky top-0 z-10 ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={readingProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
