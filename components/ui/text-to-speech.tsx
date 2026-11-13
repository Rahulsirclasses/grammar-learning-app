"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTextToSpeech } from "@/hooks/use-text-to-speech"
import { Play, Pause, Square, Volume2, Settings, VolumeX, Headphones, Mic } from "lucide-react"

interface TextToSpeechProps {
  text: string
  title?: string
  className?: string
  showControls?: boolean
  autoHighlight?: boolean
}

export function TextToSpeech({
  text,
  title = "Listen to Content",
  className = "",
  showControls = true,
  autoHighlight = false,
}: TextToSpeechProps) {
  const [showSettings, setShowSettings] = useState(false)
  const [highlightedText, setHighlightedText] = useState("")

  const {
    speak,
    stop,
    pause,
    resume,
    isSupported,
    isSpeaking,
    isPaused,
    voices,
    currentVoice,
    setVoice,
    rate,
    setRate,
    pitch,
    setPitch,
    volume,
    setVolume,
  } = useTextToSpeech()

  if (!isSupported) {
    return (
      <Card className={`border-orange-200 bg-orange-50 dark:bg-orange-950 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
            <VolumeX className="h-4 w-4" />
            <span className="text-sm">Text-to-speech is not supported in your browser</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const handleSpeak = () => {
    if (isSpeaking) {
      if (isPaused) {
        resume()
      } else {
        pause()
      }
    } else {
      // Clean text for better speech
      const cleanText = text.replace(/[•]/g, "").replace(/\n/g, " ").replace(/\s+/g, " ").trim()

      speak(cleanText)

      if (autoHighlight) {
        setHighlightedText(cleanText)
      }
    }
  }

  const handleStop = () => {
    stop()
    setHighlightedText("")
  }

  const englishVoices = voices.filter((voice) => voice.lang.startsWith("en"))

  return (
    <Card className={`border-blue-200 bg-blue-50 dark:bg-blue-950 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100 flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            {isSpeaking && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1" />
                {isPaused ? "Paused" : "Speaking"}
              </Badge>
            )}
            {showControls && (
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)} className="h-6 w-6 p-0">
                <Settings className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-3">
          <Button onClick={handleSpeak} size="sm" className="flex items-center gap-2" disabled={!text.trim()}>
            {isSpeaking && !isPaused ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isSpeaking && !isPaused ? "Pause" : isPaused ? "Resume" : "Play"}
          </Button>

          {isSpeaking && (
            <Button onClick={handleStop} size="sm" variant="outline" className="flex items-center gap-2">
              <Square className="h-3 w-3" />
              Stop
            </Button>
          )}

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Volume2 className="h-3 w-3" />
            <span>{Math.round(text.split(" ").length * 0.4)} sec</span>
          </div>
        </div>

        {showSettings && showControls && (
          <div className="space-y-4 p-3 bg-white dark:bg-gray-900 rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-medium">Voice</label>
                <Select
                  value={currentVoice?.name || ""}
                  onValueChange={(value) => {
                    const voice = voices.find((v) => v.name === value)
                    if (voice) setVoice(voice)
                  }}
                >
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {englishVoices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name} className="text-xs">
                        <div className="flex items-center gap-2">
                          <Mic className="h-3 w-3" />
                          <span>{voice.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {voice.lang}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Speed: {rate.toFixed(1)}x</label>
                <Slider
                  value={[rate]}
                  onValueChange={([value]) => setRate(value)}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Pitch: {pitch.toFixed(1)}</label>
                <Slider
                  value={[pitch]}
                  onValueChange={([value]) => setPitch(value)}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium">Volume: {Math.round(volume * 100)}%</label>
                <Slider
                  value={[volume]}
                  onValueChange={([value]) => setVolume(value)}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {autoHighlight && highlightedText && (
          <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-950 rounded text-xs">
            <p className="text-yellow-800 dark:text-yellow-200">{highlightedText}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
