"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTextToSpeech } from "@/hooks/use-text-to-speech"
import { Play, Pause, Square, SkipForward, SkipBack, Volume2, Minimize2, Maximize2 } from "lucide-react"

interface FloatingAudioPlayerProps {
  content: string[]
  titles: string[]
  isVisible: boolean
  onClose: () => void
}

export function FloatingAudioPlayer({ content, titles, isVisible, onClose }: FloatingAudioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)

  const { speak, stop, pause, resume, isSpeaking, isPaused, rate, setRate } = useTextToSpeech()

  const handlePlay = () => {
    if (isSpeaking) {
      if (isPaused) {
        resume()
      } else {
        pause()
      }
    } else {
      speak(content[currentIndex])
    }
  }

  const handleNext = () => {
    if (currentIndex < content.length - 1) {
      setCurrentIndex(currentIndex + 1)
      stop()
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      stop()
    }
  }

  const handleStop = () => {
    stop()
  }

  if (!isVisible) return null

  return (
    <Card className="fixed bottom-4 right-4 w-80 z-50 shadow-lg border-blue-200 bg-white dark:bg-gray-950">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium truncate">{titles[currentIndex] || `Section ${currentIndex + 1}`}</h4>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="h-6 w-6 p-0">
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
              ×
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="h-8 w-8 p-0"
              >
                <SkipBack className="h-3 w-3" />
              </Button>

              <Button onClick={handlePlay} size="sm" className="h-8 w-8 p-0">
                {isSpeaking && !isPaused ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </Button>

              <Button variant="outline" size="sm" onClick={handleStop} disabled={!isSpeaking} className="h-8 w-8 p-0">
                <Square className="h-3 w-3" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                disabled={currentIndex === content.length - 1}
                className="h-8 w-8 p-0"
              >
                <SkipForward className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Volume2 className="h-3 w-3" />
              <span>
                {currentIndex + 1} of {content.length}
              </span>
              <span>•</span>
              <span>{rate}x speed</span>
            </div>

            <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / content.length) * 100}%` }}
              />
            </div>
          </>
        )}

        {isMinimized && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button onClick={handlePlay} size="sm" className="h-6 w-6 p-0">
                {isSpeaking && !isPaused ? <Pause className="h-2 w-2" /> : <Play className="h-2 w-2" />}
              </Button>
              <span className="text-xs">
                {currentIndex + 1}/{content.length}
              </span>
            </div>
            <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / content.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
