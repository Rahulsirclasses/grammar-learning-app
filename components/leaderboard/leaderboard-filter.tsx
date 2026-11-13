"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeaderboardFilter() {
  const [timeframe, setTimeframe] = useState("week")

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <Button variant={timeframe === "week" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("week")}>
          This Week
        </Button>
        <Button variant={timeframe === "month" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("month")}>
          This Month
        </Button>
        <Button variant={timeframe === "all" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("all")}>
          All Time
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            <SelectItem value="parts-of-speech">Parts of Speech</SelectItem>
            <SelectItem value="tenses">Tenses</SelectItem>
            <SelectItem value="subject-verb">Subject-Verb Agreement</SelectItem>
            <SelectItem value="modifiers">Modifiers</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
