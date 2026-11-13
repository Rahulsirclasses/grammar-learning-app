"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"
import { TensesExamples } from "./interactive-examples/tenses-examples"

const TensesTheory = () => {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Tenses</CardTitle>
        <CardDescription>
          Master all 12 English tenses with comprehensive rules, usage patterns, and advanced applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="explanation">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="explanation" className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Explanation</span>
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Examples</span>
            </TabsTrigger>
            <TabsTrigger value="shortcuts" className="flex items-center gap-1">
              <Lightbulb className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Shortcuts</span>
            </TabsTrigger>
            <TabsTrigger value="mistakes" className="flex items-center gap-1">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Common Mistakes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="space-y-4 mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Understanding English Tenses</h3>
              <p>
                English has 12 main tenses that express when actions occur and their relationship to time. Each tense
                has specific forms, uses, and time expressions. Mastering tenses is crucial for clear communication and
                success in competitive exams, as they form the backbone of English grammar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Present Tenses</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    Simple, Continuous, Perfect, Perfect Continuous
                  </p>
                  <p className="text-xs text-blue-500 dark:text-blue-500">Current time and ongoing situations</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Past Tenses</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                    Simple, Continuous, Perfect, Perfect Continuous
                  </p>
                  <p className="text-xs text-green-500 dark:text-green-500">Completed actions and past situations</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Future Tenses</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                    Simple, Continuous, Perfect, Perfect Continuous
                  </p>
                  <p className="text-xs text-purple-500 dark:text-purple-500">Future actions and predictions</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Comprehensive Tense Analysis</h4>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">Present Tenses</h5>

                <div className="mt-3 space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">1. Simple Present</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> Base verb (+ s/es for 3rd person singular)
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Habitual actions: I wake up at 6 AM every day.</li>
                      <li>General truths: The sun rises in the east.</li>
                      <li>Scheduled future events: The train leaves at 8 PM.</li>
                      <li>Present states: She lives in London.</li>
                      <li>Instructions: First, you mix the ingredients.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> always, usually, often, sometimes, never, every day/week/month
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">2. Present Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> am/is/are + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions happening now: I am writing an email.</li>
                      <li>Temporary situations: She is staying with friends this week.</li>
                      <li>Future arrangements: We are meeting tomorrow at 3 PM.</li>
                      <li>Changing situations: The weather is getting warmer.</li>
                      <li>Repeated actions (with annoyance): He is always complaining!</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> now, at the moment, currently, today, this week/month
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">3. Present Perfect</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> have/has + past participle
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Past actions with present relevance: I have finished my homework.</li>
                      <li>Life experiences: She has visited Paris three times.</li>
                      <li>Actions continuing to present: We have lived here for five years.</li>
                      <li>Recent past: He has just arrived.</li>
                      <li>Unfinished time periods: I have read two books this month.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> already, just, yet, ever, never, since, for, recently, lately
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">4. Present Perfect Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> have/has + been + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions continuing from past to present: I have been studying for three hours.</li>
                      <li>Recent activities with present evidence: You look tired. Have you been running?</li>
                      <li>Temporary situations: She has been working as a teacher since graduation.</li>
                      <li>Repeated actions over time: They have been arguing all morning.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> for, since, all day/week/month, lately, recently
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-green-200 my-4">
                <h5 className="font-semibold">Past Tenses</h5>

                <div className="mt-3 space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">1. Simple Past</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> Past form of verb (regular: -ed, irregular: various forms)
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Completed past actions: I visited my grandmother yesterday.</li>
                      <li>Past habits: When I was young, I played football every day.</li>
                      <li>Sequence of past events: He woke up, had breakfast, and left for work.</li>
                      <li>Past states: She was a teacher for ten years.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> yesterday, last week/month/year, ago, in 1990, when I was young
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">2. Past Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> was/were + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions in progress in the past: I was reading when you called.</li>
                      <li>Background actions: While she was cooking, he was watching TV.</li>
                      <li>Interrupted actions: They were playing football when it started raining.</li>
                      <li>Parallel past actions: She was studying while he was working.</li>
                      <li>Polite requests about past: I was wondering if you could help me.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> while, when, as, at that time, at 8 o'clock yesterday
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">3. Past Perfect</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> had + past participle
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions completed before another past action: I had finished dinner when he arrived.</li>
                      <li>Past experiences before a past time: By 2010, she had visited 20 countries.</li>
                      <li>Cause and effect in the past: He was tired because he had worked all night.</li>
                      <li>Reported speech: She said she had seen the movie.</li>
                      <li>Third conditional: If I had studied harder, I would have passed.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> before, after, by the time, already, just, never, ever
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">4. Past Perfect Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> had + been + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Duration before past action: I had been waiting for an hour when the bus arrived.</li>
                      <li>Cause of past situation: She was tired because she had been running.</li>
                      <li>Past actions with evidence: The ground was wet because it had been raining.</li>
                      <li>Continuous past actions: They had been living there for five years before they moved.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> for, since, before, by the time, all day/week/month
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-purple-200 my-4">
                <h5 className="font-semibold">Future Tenses</h5>

                <div className="mt-3 space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">1. Simple Future</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> will + base verb / be going to + base verb
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Predictions: It will rain tomorrow.</li>
                      <li>Spontaneous decisions: I'll help you with that.</li>
                      <li>Promises: I will call you tonight.</li>
                      <li>Plans (going to): We are going to visit Paris next month.</li>
                      <li>Evidence-based predictions (going to): Look at those clouds! It's going to rain.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> tomorrow, next week/month/year, in the future, soon, later
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">2. Future Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> will + be + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions in progress at future time: At 8 PM, I will be watching TV.</li>
                      <li>Future arrangements: We will be staying at the Grand Hotel.</li>
                      <li>Polite inquiries: Will you be using the car tonight?</li>
                      <li>Predictions about ongoing future: This time next year, she will be studying abroad.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> at this time tomorrow, this time next week, at 8 o'clock
                      tomorrow
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">3. Future Perfect</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> will + have + past participle
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Actions completed before future time: By 6 PM, I will have finished work.</li>
                      <li>Future achievements: By next year, she will have graduated.</li>
                      <li>Duration up to future point: By December, we will have lived here for two years.</li>
                      <li>Assumptions about past: He will have arrived by now.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> by, by the time, before, by next week/month/year
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">4. Future Perfect Continuous</h6>
                    <p className="text-sm mt-1">
                      <strong>Form:</strong> will + have + been + verb-ing
                    </p>
                    <p className="text-sm">
                      <strong>Uses:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Duration of action up to future point: By 5 PM, I will have been working for 8 hours.</li>
                      <li>
                        Continuous action before future event: When you arrive, I will have been waiting for an hour.
                      </li>
                      <li>Future milestones: Next month, we will have been married for 10 years.</li>
                      <li>
                        Cause of future situation: She will be tired because she will have been traveling all day.
                      </li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Time expressions:</strong> by, for, by the time, when, before
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Advanced Tense Concepts</h4>

              <div className="pl-4 border-l-4 border-orange-200 my-4">
                <h5 className="font-semibold">Sequence of Tenses</h5>
                <p>Rules for maintaining logical time relationships in complex sentences.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Key Rules:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Present main clause:</strong> Any tense in subordinate clause (He says he is/was/will be
                        busy)
                      </li>
                      <li>
                        <strong>Past main clause:</strong> Past tense in subordinate clause (He said he was busy)
                      </li>
                      <li>
                        <strong>Universal truths:</strong> Always present tense (He said the earth is round)
                      </li>
                      <li>
                        <strong>Conditional sentences:</strong> Specific tense patterns for each type
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-orange-200 my-4">
                <h5 className="font-semibold">Conditional Sentences</h5>
                <p>Four types of conditional sentences with specific tense patterns.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Conditional Types:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Zero:</strong> If + present, present (If you heat water, it boils)
                      </li>
                      <li>
                        <strong>First:</strong> If + present, will + base (If it rains, I will stay home)
                      </li>
                      <li>
                        <strong>Second:</strong> If + past, would + base (If I were rich, I would travel)
                      </li>
                      <li>
                        <strong>Third:</strong> If + past perfect, would have + past participle (If I had studied, I
                        would have passed)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  Tenses express not just time, but also aspect (how an action relates to time). Understanding the
                  difference between simple, continuous, perfect, and perfect continuous aspects is crucial for choosing
                  the correct tense in any situation.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Comprehensive Tense Examples in Context</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Present Tenses in Real Situations</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Simple Present (Habits):</strong> She{" "}
                  <span className="text-blue-600 font-semibold">drinks</span> coffee every morning at 7 AM.
                </li>
                <li>
                  <strong>Simple Present (Facts):</strong> Water{" "}
                  <span className="text-blue-600 font-semibold">boils</span> at 100 degrees Celsius.
                </li>
                <li>
                  <strong>Present Continuous (Now):</strong> I{" "}
                  <span className="text-blue-600 font-semibold">am writing</span> an important email right now.
                </li>
                <li>
                  <strong>Present Continuous (Future):</strong> We{" "}
                  <span className="text-blue-600 font-semibold">are meeting</span> the client tomorrow at 3 PM.
                </li>
                <li>
                  <strong>Present Perfect (Experience):</strong> I{" "}
                  <span className="text-blue-600 font-semibold">have visited</span> Japan three times in my life.
                </li>
                <li>
                  <strong>Present Perfect (Recent):</strong> She{" "}
                  <span className="text-blue-600 font-semibold">has just finished</span> her presentation.
                </li>
                <li>
                  <strong>Present Perfect Continuous:</strong> They{" "}
                  <span className="text-blue-600 font-semibold">have been working</span> on this project for six months.
                </li>
                <li>
                  <strong>Present Perfect Continuous (Evidence):</strong> You look tired.{" "}
                  <span className="text-blue-600 font-semibold">Have you been running</span>?
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Past Tenses in Narrative Context</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Simple Past (Completed):</strong> Yesterday, I{" "}
                  <span className="text-blue-600 font-semibold">went</span> to the museum and{" "}
                  <span className="text-blue-600 font-semibold">saw</span> an amazing exhibition.
                </li>
                <li>
                  <strong>Simple Past (Sequence):</strong> He{" "}
                  <span className="text-blue-600 font-semibold">woke up</span>,{" "}
                  <span className="text-blue-600 font-semibold">had</span> breakfast, and{" "}
                  <span className="text-blue-600 font-semibold">left</span> for work.
                </li>
                <li>
                  <strong>Past Continuous (Background):</strong> While I{" "}
                  <span className="text-blue-600 font-semibold">was studying</span>, my roommate{" "}
                  <span className="text-blue-600 font-semibold">was listening</span> to music.
                </li>
                <li>
                  <strong>Past Continuous (Interrupted):</strong> I{" "}
                  <span className="text-blue-600 font-semibold">was watching</span> TV when the phone{" "}
                  <span className="text-blue-600 font-semibold">rang</span>.
                </li>
                <li>
                  <strong>Past Perfect (Earlier action):</strong> When I arrived at the station, the train{" "}
                  <span className="text-blue-600 font-semibold">had already left</span>.
                </li>
                <li>
                  <strong>Past Perfect (Experience):</strong> By age 25, she{" "}
                  <span className="text-blue-600 font-semibold">had traveled</span> to over 30 countries.
                </li>
                <li>
                  <strong>Past Perfect Continuous:</strong> I{" "}
                  <span className="text-blue-600 font-semibold">had been waiting</span> for two hours when the doctor
                  finally saw me.
                </li>
                <li>
                  <strong>Past Perfect Continuous (Cause):</strong> She was exhausted because she{" "}
                  <span className="text-blue-600 font-semibold">had been working</span> all night.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Future Tenses for Planning and Prediction</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Will (Prediction):</strong> I think it{" "}
                  <span className="text-blue-600 font-semibold">will rain</span> tomorrow based on the weather forecast.
                </li>
                <li>
                  <strong>Will (Spontaneous):</strong> The phone is ringing. I
                  <span className="text-blue-600 font-semibold">'ll answer</span> it.
                </li>
                <li>
                  <strong>Going to (Plan):</strong> We{" "}
                  <span className="text-blue-600 font-semibold">are going to renovate</span> our kitchen next month.
                </li>
                <li>
                  <strong>Going to (Evidence):</strong> Look at those dark clouds! It
                  <span className="text-blue-600 font-semibold">'s going to storm</span>.
                </li>
                <li>
                  <strong>Future Continuous:</strong> This time tomorrow, I{" "}
                  <span className="text-blue-600 font-semibold">will be flying</span> to New York.
                </li>
                <li>
                  <strong>Future Continuous (Polite):</strong>{" "}
                  <span className="text-blue-600 font-semibold">Will you be using</span> the conference room this
                  afternoon?
                </li>
                <li>
                  <strong>Future Perfect:</strong> By the end of this year, I{" "}
                  <span className="text-blue-600 font-semibold">will have completed</span> my degree.
                </li>
                <li>
                  <strong>Future Perfect Continuous:</strong> In June, we{" "}
                  <span className="text-blue-600 font-semibold">will have been living</span> in this house for ten
                  years.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Mixed Tenses in Complex Sentences</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Cause and Effect:</strong> She <span className="text-blue-600 font-semibold">is tired</span>{" "}
                  because she <span className="text-blue-600 font-semibold">has been working</span> all day.
                </li>
                <li>
                  <strong>Time Sequence:</strong> After I <span className="text-blue-600 font-semibold">finish</span>{" "}
                  this project, I <span className="text-blue-600 font-semibold">will take</span> a vacation.
                </li>
                <li>
                  <strong>Conditional:</strong> If you <span className="text-blue-600 font-semibold">study</span> hard,
                  you <span className="text-blue-600 font-semibold">will pass</span> the exam.
                </li>
                <li>
                  <strong>Reported Speech:</strong> She <span className="text-blue-600 font-semibold">said</span> she{" "}
                  <span className="text-blue-600 font-semibold">had finished</span> her homework.
                </li>
                <li>
                  <strong>Time Clauses:</strong> When I <span className="text-blue-600 font-semibold">get home</span>, I{" "}
                  <span className="text-blue-600 font-semibold">will call</span> you.
                </li>
                <li>
                  <strong>Duration:</strong> I <span className="text-blue-600 font-semibold">have been learning</span>{" "}
                  English since I <span className="text-blue-600 font-semibold">was</span> ten years old.
                </li>
                <li>
                  <strong>Comparison:</strong> Life <span className="text-blue-600 font-semibold">is</span> much easier
                  now than it <span className="text-blue-600 font-semibold">was</span> fifty years ago.
                </li>
                <li>
                  <strong>Simultaneous Actions:</strong> While she{" "}
                  <span className="text-blue-600 font-semibold">was cooking</span>, he{" "}
                  <span className="text-blue-600 font-semibold">was setting</span> the table.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Conditional Sentences with All Types</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Zero Conditional:</strong> If you <span className="text-blue-600 font-semibold">heat</span>{" "}
                  ice, it <span className="text-blue-600 font-semibold">melts</span>.
                </li>
                <li>
                  <strong>First Conditional:</strong> If it <span className="text-blue-600 font-semibold">rains</span>{" "}
                  tomorrow, we <span className="text-blue-600 font-semibold">will cancel</span> the picnic.
                </li>
                <li>
                  <strong>Second Conditional:</strong> If I <span className="text-blue-600 font-semibold">won</span> the
                  lottery, I <span className="text-blue-600 font-semibold">would travel</span> around the world.
                </li>
                <li>
                  <strong>Third Conditional:</strong> If I{" "}
                  <span className="text-blue-600 font-semibold">had studied</span> harder, I{" "}
                  <span className="text-blue-600 font-semibold">would have passed</span> the exam.
                </li>
                <li>
                  <strong>Mixed Conditional:</strong> If I{" "}
                  <span className="text-blue-600 font-semibold">had saved</span> money when I was young, I{" "}
                  <span className="text-blue-600 font-semibold">would be</span> rich now.
                </li>
                <li>
                  <strong>Unless (Negative condition):</strong>{" "}
                  <span className="text-blue-600 font-semibold">Unless</span> you{" "}
                  <span className="text-blue-600 font-semibold">hurry</span>, you{" "}
                  <span className="text-blue-600 font-semibold">will miss</span> the train.
                </li>
                <li>
                  <strong>Provided/As long as:</strong> <span className="text-blue-600 font-semibold">Provided</span>{" "}
                  you <span className="text-blue-600 font-semibold">work</span> hard, you{" "}
                  <span className="text-blue-600 font-semibold">will succeed</span>.
                </li>
                <li>
                  <strong>Wish sentences:</strong> I <span className="text-blue-600 font-semibold">wish</span> I{" "}
                  <span className="text-blue-600 font-semibold">could speak</span> French fluently.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Time Expressions with Specific Tenses</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Present Perfect with "since":</strong> I{" "}
                  <span className="text-blue-600 font-semibold">have lived</span> here{" "}
                  <span className="text-blue-600 font-semibold">since</span> 2010.
                </li>
                <li>
                  <strong>Present Perfect with "for":</strong> She{" "}
                  <span className="text-blue-600 font-semibold">has worked</span> here{" "}
                  <span className="text-blue-600 font-semibold">for</span> five years.
                </li>
                <li>
                  <strong>Past Perfect with "by the time":</strong>{" "}
                  <span className="text-blue-600 font-semibold">By the time</span> we arrived, the movie{" "}
                  <span className="text-blue-600 font-semibold">had started</span>.
                </li>
                <li>
                  <strong>Future Perfect with "by":</strong> <span className="text-blue-600 font-semibold">By</span>{" "}
                  next Friday, I <span className="text-blue-600 font-semibold">will have finished</span> the report.
                </li>
                <li>
                  <strong>Present Continuous with "always":</strong> He{" "}
                  <span className="text-blue-600 font-semibold">is always complaining</span> about something!
                </li>
                <li>
                  <strong>Simple Past with "used to":</strong> I{" "}
                  <span className="text-blue-600 font-semibold">used to play</span> tennis when I was younger.
                </li>
                <li>
                  <strong>Past Continuous with "while":</strong>{" "}
                  <span className="text-blue-600 font-semibold">While</span> I{" "}
                  <span className="text-blue-600 font-semibold">was sleeping</span>, someone broke into the house.
                </li>
                <li>
                  <strong>Future with "as soon as":</strong> I{" "}
                  <span className="text-blue-600 font-semibold">will call</span> you{" "}
                  <span className="text-blue-600 font-semibold">as soon as</span> I{" "}
                  <span className="text-blue-600 font-semibold">arrive</span>.
                </li>
              </ul>
            </div>

            {/* Interactive Examples */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">🎯 Interactive Examples</h3>
              <TensesExamples />
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Advanced Tense Selection Strategies</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Comprehensive Tense Decision System
              </h4>
              <p className="mt-2">
                Use these advanced strategies to quickly and accurately choose the correct tense in any situation, from
                basic sentences to complex competitive exam questions.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. The Time-Aspect Matrix</h5>
                <p>Combine time (when) with aspect (how) to choose the perfect tense.</p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Decision Framework:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Simple:</strong> Complete actions, facts, habits
                    </li>
                    <li>
                      <strong>Continuous:</strong> Ongoing actions, temporary situations
                    </li>
                    <li>
                      <strong>Perfect:</strong> Completed actions with present relevance
                    </li>
                    <li>
                      <strong>Perfect Continuous:</strong> Duration + ongoing nature
                    </li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Quick Test:</strong> Ask "When?" (time) and "How?" (aspect)
                  </p>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. The Time Expression Method</h5>
                <p>Use time expressions as clues to identify the correct tense.</p>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Time Expression Guide:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Always, usually, often, never:</strong> Simple Present
                    </li>
                    <li>
                      <strong>Now, at the moment, currently:</strong> Present Continuous
                    </li>
                    <li>
                      <strong>Already, just, yet, ever, never:</strong> Present Perfect
                    </li>
                    <li>
                      <strong>Yesterday, last week, ago:</strong> Simple Past
                    </li>
                    <li>
                      <strong>While, when (past):</strong> Past Continuous
                    </li>
                    <li>
                      <strong>Before, after, by the time:</strong> Past Perfect
                    </li>
                    <li>
                      <strong>Tomorrow, next week, will:</strong> Future
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. The Sequence Logic Test</h5>
                <p>Determine the logical order of actions to choose appropriate tenses.</p>
                <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Sequence Rules:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>Identify all actions in the sentence</li>
                    <li>Determine which happened first, second, etc.</li>
                    <li>Use earlier tense for earlier actions</li>
                    <li>Maintain logical time relationships</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Example:</strong> "After I had eaten (1st), I went (2nd) to bed."
                  </p>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">4. The Context Analysis Method</h5>
                <p>Use surrounding context to determine the appropriate tense.</p>
                <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Context Clues:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Narrative context:</strong> Past tenses for stories
                    </li>
                    <li>
                      <strong>News reports:</strong> Present Perfect for recent events
                    </li>
                    <li>
                      <strong>Instructions:</strong> Simple Present or Imperative
                    </li>
                    <li>
                      <strong>Plans/arrangements:</strong> Present Continuous or going to
                    </li>
                    <li>
                      <strong>Predictions:</strong> Will or going to
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">5. The Relevance Test</h5>
                <p>Determine if past actions have present relevance to choose between past and present perfect.</p>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Relevance Questions:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>Does the past action affect the present situation?</li>
                    <li>Is the result still visible/important now?</li>
                    <li>Is the time period still continuing?</li>
                    <li>If yes to any → Present Perfect</li>
                    <li>If no to all → Simple Past</li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">6. The Duration vs. Point Test</h5>
                <p>Distinguish between actions with duration and point actions.</p>
                <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Duration Indicators:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Duration words:</strong> for, since, all day, how long
                    </li>
                    <li>
                      <strong>Continuous tenses:</strong> For ongoing actions
                    </li>
                    <li>
                      <strong>Perfect continuous:</strong> For duration with relevance
                    </li>
                    <li>
                      <strong>Point actions:</strong> Simple tenses
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">7. The Conditional Pattern Recognition</h5>
                <p>Quickly identify conditional types and their required tense patterns.</p>
                <div className="bg-pink-50 dark:bg-pink-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Conditional Quick Guide:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Real possibility:</strong> If + present, will + base
                    </li>
                    <li>
                      <strong>Unreal present:</strong> If + past, would + base
                    </li>
                    <li>
                      <strong>Unreal past:</strong> If + past perfect, would have + past participle
                    </li>
                    <li>
                      <strong>General truth:</strong> If + present, present
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">8. The Reported Speech Transformation</h5>
                <p>Apply systematic tense changes in reported speech.</p>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Tense Shift Rules:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Present → Past:</strong> "I am" → He said he was
                    </li>
                    <li>
                      <strong>Past → Past Perfect:</strong> "I went" → He said he had gone
                    </li>
                    <li>
                      <strong>Present Perfect → Past Perfect:</strong> "I have done" → He said he had done
                    </li>
                    <li>
                      <strong>Will → Would:</strong> "I will go" → He said he would go
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Comprehensive Exam Strategy</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Identify time expressions:</span> Look for clues about when the action
                  occurs
                </li>
                <li>
                  <span className="font-semibold">Determine the aspect:</span> Is it simple, continuous, perfect, or
                  perfect continuous?
                </li>
                <li>
                  <span className="font-semibold">Check for sequence:</span> What is the logical order of multiple
                  actions?
                </li>
                <li>
                  <span className="font-semibold">Consider relevance:</span> Does the past action affect the present?
                </li>
                <li>
                  <span className="font-semibold">Look for duration:</span> Is the action ongoing or completed?
                </li>
                <li>
                  <span className="font-semibold">Apply context:</span> What type of text or situation is this?
                </li>
                <li>
                  <span className="font-semibold">Check conditionals:</span> Is this a conditional sentence with
                  specific patterns?
                </li>
                <li>
                  <span className="font-semibold">Verify consistency:</span> Do all tenses work together logically?
                </li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Common Tense Mistakes and Solutions</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Major Tense Errors to Avoid
              </h4>
              <p className="mt-2">
                These are the most common tense mistakes in competitive exams and everyday communication. Master these
                to significantly improve your grammar accuracy.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. Present Perfect vs. Simple Past Confusion</h4>
              <p>Using the wrong tense when past actions have or don't have present relevance.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I have seen that movie yesterday.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">("Yesterday" requires Simple Past)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I saw that movie yesterday.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Specific past time = Simple Past)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Future Time in Time Clauses</h4>
              <p>Using "will" in time clauses instead of present tense.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>When I will arrive, I will call you.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(No "will" in time clauses)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>When I arrive, I will call you.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Present tense in time clauses)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Sequence of Tenses Errors</h4>
              <p>Incorrect tense relationships in complex sentences.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>He said that he will come tomorrow.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Should use "would" after past reporting verb)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>He said that he would come tomorrow.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Past reporting verb requires tense shift)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Stative Verbs in Continuous Tenses</h4>
              <p>Using continuous tenses with verbs that don't normally take continuous forms.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I am knowing the answer.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">("Know" is a stative verb)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I know the answer.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use simple tense with stative verbs)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Conditional Sentence Patterns</h4>
              <p>Mixing up tense patterns in different types of conditional sentences.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>If I would have money, I would buy a car.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Don't use "would" in if-clause)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>If I had money, I would buy a car.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Second conditional: If + past, would + base)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">6. Present Perfect Continuous Overuse</h4>
              <p>Using present perfect continuous when simple present perfect is more appropriate.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Less Natural:</p>
                  <p>I have been finishing my homework.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Completion is better expressed with simple perfect)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Better:</p>
                  <p>I have finished my homework.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Simple perfect for completed actions)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">7. Mixed Time References</h4>
              <p>Inconsistent tense usage when referring to the same time period.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Yesterday I go to the store and bought some milk.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Inconsistent past tense usage)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Yesterday I went to the store and bought some milk.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Consistent past tense for past time)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">8. Since vs. For Confusion</h4>
              <p>Using the wrong preposition with time expressions in perfect tenses.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I have lived here since five years.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    ("Since" is for points in time, not duration)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I have lived here for five years.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">("For" is used with duration)</p>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Exam Success Tip</AlertTitle>
              <AlertDescription>
                In competitive exams, tense questions often test your understanding of time relationships and context.
                Always consider when actions occur relative to each other and whether they have present relevance before
                choosing a tense.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export { TensesTheory }
export default TensesTheory
