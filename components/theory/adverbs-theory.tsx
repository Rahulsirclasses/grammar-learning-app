"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { TheoryContainer } from "./theory-container"

export function AdverbsTheory() {
  return (
    <TheoryContainer
      title="Adverbs"
      description="Master the use of adverbs to enhance your descriptions and add precision to your writing"
    >
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="common-errors">Common Errors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What are Adverbs?</CardTitle>
              <CardDescription>Understanding the role of adverbs in English grammar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Adverbs are words that modify or describe verbs, adjectives, other adverbs, or entire sentences. They
                provide information about how, when, where, why, or to what extent something happens or is done.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-2 border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Modifying a Verb</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      She sang <span className="text-blue-600 font-medium">beautifully</span>.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">(How did she sing? Beautifully.)</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Modifying an Adjective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The test was <span className="text-green-600 font-medium">extremely</span> difficult.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">(How difficult was the test? Extremely.)</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Modifying Another Adverb</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      She sang <span className="text-purple-600 font-medium">very</span> beautifully.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">(How beautifully did she sing? Very.)</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Modifying a Sentence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      <span className="text-orange-600 font-medium">Fortunately</span>, we arrived on time.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (Expressing an attitude toward the entire sentence)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  While many adverbs end in -ly, not all do (e.g., fast, well, very), and not all words ending in -ly
                  are adverbs (e.g., friendly, lovely). The function of the word in the sentence determines whether it's
                  an adverb.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Adverbs Matter</CardTitle>
              <CardDescription>The impact of adverbs on communication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Adverbs add precision, nuance, and color to your writing. They help convey exactly how, when, where, or
                to what extent an action occurs, making your communication more vivid and specific.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Precision</h4>
                  <p className="text-sm text-muted-foreground">
                    Adverbs allow you to express exactly how something happens.
                  </p>
                  <div className="flex space-x-2 text-sm">
                    <p>Basic: She spoke.</p>
                    <p className="text-blue-600">→</p>
                    <p>
                      Precise: She spoke <span className="font-medium">softly</span>.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Efficiency</h4>
                  <p className="text-sm text-muted-foreground">Adverbs can convey information concisely.</p>
                  <div className="flex space-x-2 text-sm">
                    <p>Wordy: He ran in a quick manner.</p>
                    <p className="text-blue-600">→</p>
                    <p>
                      Concise: He ran <span className="font-medium">quickly</span>.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Tone and Attitude</h4>
                  <p className="text-sm text-muted-foreground">
                    Adverbs can express the speaker's attitude or perspective.
                  </p>
                  <div className="flex space-x-2 text-sm">
                    <p>Neutral: They left.</p>
                    <p className="text-blue-600">→</p>
                    <p>
                      <span className="font-medium">Unfortunately</span>, they left.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Clarity</h4>
                  <p className="text-sm text-muted-foreground">Adverbs can clarify the exact meaning of a statement.</p>
                  <div className="flex space-x-2 text-sm">
                    <p>Ambiguous: I'll see you soon.</p>
                    <p className="text-blue-600">→</p>
                    <p>
                      Clear: I'll see you <span className="font-medium">tomorrow</span>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Types of Adverbs</CardTitle>
              <CardDescription>Understanding the different categories of adverbs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Adverbs can be categorized based on the type of information they provide about the action, state, or
                quality they modify.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Manner</h3>
                  <p className="text-sm">Describe how an action is performed or how something happens.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>quickly, slowly, carefully, well, badly</li>
                    <li>loudly, quietly, beautifully, easily</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: She <span className="text-blue-600">carefully</span> examined the document.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Time</h3>
                  <p className="text-sm">Indicate when an action occurs or how often it happens.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>now, then, soon, yesterday, today</li>
                    <li>always, never, often, sometimes, rarely</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: We will leave <span className="text-blue-600">tomorrow</span>.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Place</h3>
                  <p className="text-sm">Show where an action happens or the direction of movement.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>here, there, everywhere, nowhere</li>
                    <li>upstairs, downstairs, inside, outside</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: The children played <span className="text-blue-600">outside</span>.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Frequency</h3>
                  <p className="text-sm">Indicate how often something happens or is the case.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>always, usually, often, sometimes</li>
                    <li>occasionally, rarely, never</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: He <span className="text-blue-600">always</span> arrives on time.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Degree</h3>
                  <p className="text-sm">Show the intensity or degree of an action, adjective, or another adverb.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>very, extremely, quite, rather</li>
                    <li>almost, nearly, too, enough</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: The test was <span className="text-blue-600">extremely</span> difficult.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Adverbs of Affirmation and Negation</h3>
                  <p className="text-sm">Express agreement or disagreement, confirmation or denial.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>yes, certainly, definitely, indeed</li>
                    <li>no, not, never, hardly</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: She <span className="text-blue-600">definitely</span> wants to attend the meeting.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Interrogative Adverbs</h3>
                  <p className="text-sm">Used to ask questions about time, place, manner, reason, etc.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>when, where, why, how</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: <span className="text-blue-600">When</span> will you arrive?
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Conjunctive Adverbs</h3>
                  <p className="text-sm">Connect independent clauses and show the relationship between them.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>however, therefore, moreover, consequently</li>
                    <li>furthermore, nevertheless, thus, meanwhile</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Example: It was raining; <span className="text-blue-600">therefore</span>, we canceled the picnic.
                  </p>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Multiple Functions</AlertTitle>
                <AlertDescription>
                  Some adverbs can fall into multiple categories depending on how they're used in a sentence. For
                  example, "fast" can be an adverb of manner ("He runs fast") or an adverb of frequency ("He eats fast
                  food fast").
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="placement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Adverb Placement</CardTitle>
              <CardDescription>Understanding where to position adverbs in sentences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                The position of an adverb in a sentence can affect its meaning and emphasis. While there is some
                flexibility in adverb placement, certain positions are more common and natural for different types of
                adverbs.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">General Placement Rules</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Front Position</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">At the beginning of a sentence, often followed by a comma.</p>
                      <p className="text-sm italic mt-2">
                        <span className="text-blue-600 font-medium">Fortunately</span>, we arrived on time.
                      </p>
                      <p className="text-sm italic mt-1">
                        <span className="text-blue-600 font-medium">Yesterday</span>, I met an old friend.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Common for: sentence adverbs, time adverbs, conjunctive adverbs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Mid Position</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Between the subject and the main verb, after auxiliary verbs, or before the main verb.
                      </p>
                      <p className="text-sm italic mt-2">
                        She <span className="text-blue-600 font-medium">always</span> arrives early.
                      </p>
                      <p className="text-sm italic mt-1">
                        They have <span className="text-blue-600 font-medium">completely</span> forgotten the incident.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Common for: frequency adverbs, degree adverbs, focus adverbs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">End Position</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">At the end of a clause or sentence.</p>
                      <p className="text-sm italic mt-2">
                        She speaks English <span className="text-blue-600 font-medium">fluently</span>.
                      </p>
                      <p className="text-sm italic mt-1">
                        The children are playing <span className="text-blue-600 font-medium">outside</span>.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Common for: manner adverbs, place adverbs, time adverbs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Pre-modifier Position</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Directly before the word they modify.</p>
                      <p className="text-sm italic mt-2">
                        The test was <span className="text-blue-600 font-medium">extremely</span> difficult.
                      </p>
                      <p className="text-sm italic mt-1">
                        She sang <span className="text-blue-600 font-medium">very</span> beautifully.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Common for: adverbs modifying adjectives or other adverbs
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Placement Flexibility</AlertTitle>
                <AlertDescription>
                  While these guidelines are helpful, adverb placement in English has some flexibility. The position can
                  sometimes be changed for emphasis or stylistic reasons. However, in formal writing and exams,
                  following standard placement rules is generally recommended.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Adverb Formation</CardTitle>
              <CardDescription>How adverbs are formed and their comparative and superlative forms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Forming Adverbs from Adjectives</h3>
                <p>
                  Many adverbs are formed by adding -ly to an adjective. This is the most common way to create an
                  adverb.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Basic Rule: Add -ly</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          quick → quick<span className="text-blue-600 font-medium">ly</span>
                        </li>
                        <li>
                          careful → careful<span className="text-blue-600 font-medium">ly</span>
                        </li>
                        <li>
                          slow → slow<span className="text-blue-600 font-medium">ly</span>
                        </li>
                        <li>
                          beautiful → beautiful<span className="text-blue-600 font-medium">ly</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Spelling Changes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          Adjectives ending in -y: happy → happi<span className="text-blue-600 font-medium">ly</span>
                        </li>
                        <li>
                          Adjectives ending in -le: gentle → gent<span className="text-blue-600 font-medium">ly</span>
                        </li>
                        <li>
                          Adjectives ending in -ic: basic → basic<span className="text-blue-600 font-medium">ally</span>
                        </li>
                        <li>
                          Adjectives ending in -l: full → ful<span className="text-blue-600 font-medium">ly</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Exam Tip</AlertTitle>
                <AlertDescription>
                  Pay special attention to irregular adverbs and their comparative/superlative forms, as these are
                  frequently tested in grammar exams. The distinction between adjectives and adverbs with the same form
                  (like "fast" and "hard") is also a common testing point.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="common-errors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Common Adverb Errors</CardTitle>
              <CardDescription>Frequent mistakes to avoid in adverb usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Confusing Adjectives and Adverbs</h3>
                <p>One of the most common errors is using an adjective where an adverb is needed, or vice versa.</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-2 border-red-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Incorrect Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          He runs <span className="text-red-600 font-medium">quick</span>. ❌
                        </li>
                        <li>
                          She speaks <span className="text-red-600 font-medium">good</span>. ❌
                        </li>
                        <li>
                          The car drives <span className="text-red-600 font-medium">smooth</span>. ❌
                        </li>
                        <li>
                          They performed <span className="text-red-600 font-medium">amazing</span>. ❌
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Correct Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          He runs <span className="text-green-600 font-medium">quickly</span>. ✓
                        </li>
                        <li>
                          She speaks <span className="text-green-600 font-medium">well</span>. ✓
                        </li>
                        <li>
                          The car drives <span className="text-green-600 font-medium">smoothly</span>. ✓
                        </li>
                        <li>
                          They performed <span className="text-green-600 font-medium">amazingly</span>. ✓
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Confusing "Good" and "Well"</h3>
                <p>
                  "Good" is an adjective, while "well" is usually an adverb (though it can be an adjective when
                  referring to health).
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-2 border-purple-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Using "Good" (Adjective)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          She is a <span className="text-purple-600 font-medium">good</span> singer. ✓
                        </li>
                        <li>
                          The food tastes <span className="text-purple-600 font-medium">good</span>. ✓
                        </li>
                        <li>
                          We had a <span className="text-purple-600 font-medium">good</span> time at the party. ✓
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Using "Well" (Adverb)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          She sings <span className="text-blue-600 font-medium">well</span>. ✓
                        </li>
                        <li>
                          The plan worked <span className="text-blue-600 font-medium">well</span>. ✓
                        </li>
                        <li>
                          He performed <span className="text-blue-600 font-medium">well</span> on the test. ✓
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Practice Tip</AlertTitle>
                <AlertDescription>
                  To avoid common adverb errors, always identify what the word is modifying. If it modifies a verb,
                  adjective, or another adverb, you likely need an adverb. If it modifies a noun or follows a linking
                  verb, you likely need an adjective.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </TheoryContainer>
  )
}
