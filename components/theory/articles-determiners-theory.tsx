"use client"

import { QuizSection } from "@/components/ui/quiz-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function ArticlesDeterminersTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Articles & Determiners</CardTitle>
        <CardDescription>
          Master the correct usage of articles (a, an, the) and determiners to specify and quantify nouns
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
              <h3 className="text-xl font-semibold text-blue-600">What Are Articles & Determiners?</h3>
              <p>
                Articles and determiners are words that come before nouns to specify, quantify, or provide context about
                the noun. Articles (a, an, the) are the most common determiners, while other determiners include
                demonstratives (this, that), quantifiers (some, many, few), possessives (my, your), and numbers (one,
                two, first).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Indefinite Articles</h4>
                  <p className="text-sm text-red-600 dark:text-red-400 font-semibold">A, An</p>
                  <p className="text-xs mt-1">Use with singular, countable nouns when not specific</p>
                  <p className="text-xs mt-1">Introduce something for the first time</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Definite Article</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">The</p>
                  <p className="text-xs mt-1">Use with specific nouns (singular or plural)</p>
                  <p className="text-xs mt-1">Both speaker and listener know what is being referred to</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Zero Article</h4>
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold">No article</p>
                  <p className="text-xs mt-1">Use with general plurals and uncountable nouns</p>
                  <p className="text-xs mt-1">General statements and abstract concepts</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Fundamental Rules</h4>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">1. Indefinite Articles (A/An)</h5>
                <p>
                  Use "a" before consonant sounds, "an" before vowel sounds. This is about pronunciation, not spelling.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>A:</strong> a book, a university (sounds like "you"), a one-way street, a European country
                  <br />
                  <strong>An:</strong> an apple, an hour (silent h), an honest person, an MBA degree
                  <br />
                  <strong>Function:</strong> Introduces new information, means "one" or "any"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">2. Definite Article (The)</h5>
                <p>Use when referring to something specific that both speaker and listener can identify.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Specific reference:</strong> The book you gave me, the sun, the first person
                  <br />
                  <strong>Previously mentioned:</strong> I saw a movie. The movie was excellent.
                  <br />
                  <strong>Unique items:</strong> the moon, the president, the best student
                  <br />
                  <strong>Superlatives:</strong> the tallest building, the most important factor
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">3. Zero Article (No Article)</h5>
                <p>No article needed in several specific contexts.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>General plurals:</strong> Dogs are loyal, Students study hard
                  <br />
                  <strong>Uncountable nouns:</strong> Water is essential, Love conquers all
                  <br />
                  <strong>Proper nouns:</strong> John, London, Christmas, Mount Everest
                  <br />
                  <strong>Abstract concepts:</strong> Freedom, happiness, democracy
                  <br />
                  <strong>Languages/subjects:</strong> English, mathematics, history
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">4. Other Determiners</h5>
                <p>Various types of determiners serve different functions.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Demonstratives:</strong> this, that, these, those (point to specific items)
                  <br />
                  <strong>Possessives:</strong> my, your, his, her, its, our, their (show ownership)
                  <br />
                  <strong>Quantifiers:</strong> some, any, many, much, few, little, several, all
                  <br />
                  <strong>Numbers:</strong> one, two, first, second, both, either, neither
                  <br />
                  <strong>Distributives:</strong> each, every, either, neither
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">5. Special Cases with "The"</h5>
                <p>Specific contexts where "the" is required or omitted.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Musical instruments:</strong> play the piano, the guitar
                  <br />
                  <strong>Geographical features:</strong> the Himalayas, the Pacific Ocean, the Sahara Desert
                  <br />
                  <strong>Countries with "the":</strong> the United States, the United Kingdom, the Philippines
                  <br />
                  <strong>Adjectives as nouns:</strong> the rich, the poor, the elderly
                  <br />
                  <strong>Ordinal numbers:</strong> the first, the second, the last
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">6. Countable vs. Uncountable Nouns</h5>
                <p>Article usage depends heavily on whether nouns are countable or uncountable.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Countable singular:</strong> a book, an apple, the car (must have an article)
                  <br />
                  <strong>Countable plural:</strong> books, apples, the cars (can have "the" or no article)
                  <br />
                  <strong>Uncountable:</strong> water, advice, information (usually no "a/an", can have "the")
                  <br />
                  <strong>Both countable/uncountable:</strong> paper (uncountable) vs. a paper (countable)
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">7. Institutional Uses</h5>
                <p>Special rules for institutions, places, and activities.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>General activity:</strong> go to school, in hospital, at university
                  <br />
                  <strong>Specific building:</strong> go to the school, the hospital, the university
                  <br />
                  <strong>Meals:</strong> have breakfast, lunch, dinner (no article for general meals)
                  <br />
                  <strong>Transport:</strong> by car, by train, by plane (no article with "by")
                </p>
              </div>

              {/* Mini Quiz */}
              <div className="mt-8">
                <QuizSection
                  topic="articles-determiners"
                  title="Articles & Determiners Quiz"
                  description="Test your understanding of article and determiner usage"
                />
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  The choice of article depends on whether the noun is countable/uncountable, singular/plural, and
                  specific/general. Listen to the sound, not just the spelling, when choosing between "a" and "an".
                  Context and the speaker's intention determine whether something is specific or general.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Articles & Determiners Examples</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Indefinite Articles (A/An)</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  I need <span className="text-blue-600 font-semibold">a</span> pen to write. (any pen)
                </li>
                <li>
                  She is <span className="text-blue-600 font-semibold">an</span> honest person. (silent h sound)
                </li>
                <li>
                  He works at <span className="text-blue-600 font-semibold">a</span> university. (consonant sound "you")
                </li>
                <li>
                  It takes <span className="text-blue-600 font-semibold">an</span> hour to get there. (silent h)
                </li>
                <li>
                  She bought <span className="text-blue-600 font-semibold">a</span> European car. (consonant sound)
                </li>
                <li>
                  He has <span className="text-blue-600 font-semibold">an</span> MBA degree. (vowel sound "em")
                </li>
                <li>
                  There's <span className="text-blue-600 font-semibold">a</span> one-way street ahead. (consonant sound
                  "wun")
                </li>
                <li>
                  She received <span className="text-blue-600 font-semibold">an</span> urgent message. (vowel sound)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Definite Article (The)</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">The</span> book on the table is mine. (specific book)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> sun rises in the east. (unique item)
                </li>
                <li>
                  I saw <span className="text-blue-600 font-semibold">the</span> movie you recommended. (specific movie)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> children are playing outside. (specific
                  children)
                </li>
                <li>
                  She is <span className="text-blue-600 font-semibold">the</span> best student in the class.
                  (superlative)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> first person to arrive gets a prize.
                  (ordinal)
                </li>
                <li>
                  I visited <span className="text-blue-600 font-semibold">the</span> museum yesterday. (specific museum)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> information you provided was helpful.
                  (specific information)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Zero Article</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Dogs make great pets. (general statement about dogs)</li>
                <li>Water is essential for life. (uncountable noun, general)</li>
                <li>John lives in Paris. (proper nouns)</li>
                <li>I love chocolate ice cream. (general preference)</li>
                <li>Mathematics is challenging. (academic subject)</li>
                <li>Freedom is important. (abstract concept)</li>
                <li>She speaks English fluently. (language)</li>
                <li>We had dinner at eight. (meal, general time)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Demonstrative Determiners</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">This</span> car is expensive. (near, singular)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">That</span> building is very tall. (far, singular)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">These</span> books are interesting. (near, plural)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Those</span> mountains are beautiful. (far, plural)
                </li>
                <li>
                  I prefer <span className="text-blue-600 font-semibold">this</span> restaurant to that one.
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">These</span> days, technology changes rapidly.
                </li>
                <li>
                  Do you remember <span className="text-blue-600 font-semibold">those</span> times we had together?
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Quantifying Determiners</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">Some</span> people prefer tea over coffee. (indefinite
                  quantity)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Many</span> students attended the lecture. (large
                  quantity, countable)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Much</span> time was wasted. (large quantity,
                  uncountable)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Few</span> people understand quantum physics. (small
                  quantity, countable)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Little</span> progress has been made. (small quantity,
                  uncountable)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Several</span> options are available. (more than two but
                  not many)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">All</span> students must attend the meeting. (every one)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Both</span> answers are correct. (two items)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Possessive Determiners</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">My</span> car needs repair. (belonging to me)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Your</span> presentation was excellent. (belonging to
                  you)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">His</span> ideas are innovative. (belonging to him)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Her</span> performance impressed everyone. (belonging to
                  her)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Its</span> battery is dead. (belonging to it)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Our</span> team won the championship. (belonging to us)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Their</span> house is for sale. (belonging to them)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Numbers and Distributives</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">Each</span> participant received a certificate. (every
                  individual)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Every</span> student must submit their assignment. (all
                  without exception)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Either</span> option is acceptable. (one or the other)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Neither</span> candidate was suitable. (not one, not the
                  other)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">One</span> person can make a difference. (single
                  individual)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">Two</span> heads are better than one. (specific number)
                </li>
                <li>
                  The <span className="text-blue-600 font-semibold">first</span> impression is important. (ordinal
                  number)
                </li>
                <li>
                  She finished in <span className="text-blue-600 font-semibold">second</span> place. (ordinal number)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Special Cases</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  He plays <span className="text-blue-600 font-semibold">the</span> piano beautifully. (musical
                  instruments)
                </li>
                <li>
                  She went to <span className="text-blue-600 font-semibold">the</span> hospital for treatment. (specific
                  place)
                </li>
                <li>I go to school every day. (general activity, no article)</li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> rich should help the poor. (adjectives as
                  nouns)
                </li>
                <li>
                  We traveled by <span className="text-blue-600 font-semibold">train</span> to London. (means of
                  transport, no article)
                </li>
                <li>
                  She's in <span className="text-blue-600 font-semibold">prison</span> for theft. (general state, no
                  article)
                </li>
                <li>
                  Let's meet at <span className="text-blue-600 font-semibold">the</span> prison to visit him. (specific
                  building)
                </li>
                <li>
                  We had <span className="text-blue-600 font-semibold">lunch</span> at noon. (meal, no article)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Geographical Names</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="text-blue-600 font-semibold">The</span> United States,{" "}
                  <span className="text-blue-600 font-semibold">the</span> Philippines (countries with "the")
                </li>
                <li>India, France, Japan (countries without "the")</li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> Himalayas,{" "}
                  <span className="text-blue-600 font-semibold">the</span> Alps (mountain ranges)
                </li>
                <li>Mount Everest, Mount Fuji (individual mountains)</li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> Pacific Ocean,{" "}
                  <span className="text-blue-600 font-semibold">the</span> Mediterranean Sea (oceans, seas)
                </li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> Nile River,{" "}
                  <span className="text-blue-600 font-semibold">the</span> Amazon (rivers)
                </li>
                <li>Lake Victoria, Lake Superior (lakes, no article)</li>
                <li>
                  <span className="text-blue-600 font-semibold">The</span> Sahara Desert,{" "}
                  <span className="text-blue-600 font-semibold">the</span> Gobi Desert (deserts)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Context-Dependent Usage</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  I saw <span className="text-blue-600 font-semibold">a</span> movie last night.{" "}
                  <span className="text-blue-600 font-semibold">The</span> movie was fantastic. (first mention → second
                  mention)
                </li>
                <li>
                  She's <span className="text-blue-600 font-semibold">a</span> teacher. She works at{" "}
                  <span className="text-blue-600 font-semibold">the</span> local school. (general → specific)
                </li>
                <li>
                  I need <span className="text-blue-600 font-semibold">some</span> advice.{" "}
                  <span className="text-blue-600 font-semibold">The</span> advice you gave was helpful. (general →
                  specific)
                </li>
                <li>
                  Dogs are loyal animals. <span className="text-blue-600 font-semibold">The</span> dogs in our
                  neighborhood are friendly. (general → specific group)
                </li>
                <li>
                  Water is essential. <span className="text-blue-600 font-semibold">The</span> water in this bottle is
                  pure. (general → specific water)
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Articles & Determiners Shortcuts</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Quick Decision Strategies
              </h4>
              <p className="mt-2">
                Use these shortcuts to quickly choose the right article or determiner in competitive exams.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. Sound Rule for A/An</h5>
                <p>Listen to the SOUND, not the spelling. Use "an" before vowel sounds, "a" before consonant sounds.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Vowel sounds (an):</strong> an hour, an honest person, an MBA, an FBI agent, an X-ray
                  <br />
                  <strong>Consonant sounds (a):</strong> a university, a European, a one-way street, a useful tool
                  <br />
                  <strong>Memory trick:</strong> Say the word aloud - if it starts with a vowel sound, use "an"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. The Specificity Test</h5>
                <p>
                  Ask: "Which one?" If you can point to a specific item or both speaker and listener know which one, use
                  "the".
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Specific:</strong> "I need the pen" (specific pen we both know about)
                  <br />
                  <strong>General:</strong> "I need a pen" (any pen will do)
                  <br />
                  <strong>Test:</strong> Can you point to it? Can you identify it uniquely? → Use "the"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. Countability Check</h5>
                <p>Determine if the noun is countable or uncountable, singular or plural.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Countable singular:</strong> Must have an article (a book, the book)
                  <br />
                  <strong>Countable plural:</strong> Can have "the" or no article (books, the books)
                  <br />
                  <strong>Uncountable:</strong> Usually no "a/an", can have "the" (water, the water)
                  <br />
                  <strong>Quick test:</strong> Can you count it? Can you say "two ___s"?
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">4. First Mention vs. Second Mention</h5>
                <p>First mention uses "a/an", second mention uses "the".</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Pattern:</strong> "I saw a movie. The movie was excellent."
                  <br />
                  <strong>Rule:</strong> Introduce with "a/an", refer back with "the"
                  <br />
                  <strong>Exception:</strong> If it's already known to both parties, start with "the"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">5. Unique Things Rule</h5>
                <p>Things that are unique in context always take "the".</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Natural unique items:</strong> the sun, the moon, the earth, the sky
                  <br />
                  <strong>Superlatives:</strong> the best, the most important, the first, the last
                  <br />
                  <strong>Ordinals:</strong> the first person, the second time, the next day
                  <br />
                  <strong>Only one in context:</strong> the president, the capital, the winner
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">6. General vs. Specific Rule</h5>
                <p>General statements usually need no article; specific references need "the".</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>General:</strong> Dogs are loyal (all dogs in general)
                  <br />
                  <strong>Specific:</strong> The dogs in our neighborhood are friendly (specific group)
                  <br />
                  <strong>General:</strong> Life is beautiful (life in general)
                  <br />
                  <strong>Specific:</strong> The life he leads is interesting (his specific life)
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">7. Institution Usage Pattern</h5>
                <p>Different meanings with and without "the" for institutions.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Activity/Purpose:</strong> go to school, in hospital, at university
                  <br />
                  <strong>Building/Place:</strong> go to the school, the hospital, the university
                  <br />
                  <strong>Pattern:</strong> No article = purpose/activity; "the" = specific building
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">8. Geographical Name Patterns</h5>
                <p>Learn the patterns for different types of geographical names.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>With "the":</strong> Countries with "United/Republic", oceans, rivers, mountain ranges,
                  deserts
                  <br />
                  <strong>Without "the":</strong> Most countries, cities, individual mountains, lakes, continents
                  <br />
                  <strong>Memory trick:</strong> If it's a group or collection, use "the"
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Memory Tricks</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">FANBOYS vowels:</span> Remember "an" before F, H, L, M, N, R, S, X
                  sounds when they start with vowel sounds
                </li>
                <li>
                  <span className="font-semibold">THE rule:</span> T-specific, H-heard before, E-everyone knows which
                  one
                </li>
                <li>
                  <span className="font-semibold">Zero article:</span> General plurals, proper nouns, abstract concepts,
                  languages, subjects
                </li>
                <li>
                  <span className="font-semibold">Superlatives:</span> Always use "the" (the best, the most beautiful,
                  the worst)
                </li>
                <li>
                  <span className="font-semibold">First/Second rule:</span> First mention = a/an, Second mention = the
                </li>
                <li>
                  <span className="font-semibold">Unique items:</span> Only one exists = the (the sun, the president,
                  the winner)
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
              <h4 className="text-lg font-semibold">Quick Decision Flowchart</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Is it a proper noun?</span> → Usually no article
                </li>
                <li>
                  <span className="font-semibold">Is it uncountable or plural general?</span> → Usually no article
                </li>
                <li>
                  <span className="font-semibold">Is it specific/known to both parties?</span> → Use "the"
                </li>
                <li>
                  <span className="font-semibold">Is it countable singular?</span> → Must have an article
                </li>
                <li>
                  <span className="font-semibold">First mention or any one?</span> → Use "a/an"
                </li>
                <li>
                  <span className="font-semibold">Check sound for a/an choice</span> → Vowel sound = "an", Consonant
                  sound = "a"
                </li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Common Articles & Determiners Mistakes</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Major Article Errors
              </h4>
              <p className="mt-2">
                These are the most common article and determiner mistakes in competitive exams and formal writing.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. A/An Confusion Based on Spelling</h4>
              <p>Using spelling instead of sound to choose between "a" and "an".</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>A hour, a honest person, an university</p>
                  <p>A FBI agent, a X-ray, an European</p>
                  <p>A one-way street, an useful tool</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Based on spelling, not sound)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>An hour, an honest person, a university</p>
                  <p>An FBI agent, an X-ray, a European</p>
                  <p>A one-way street, a useful tool</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Based on pronunciation)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Overusing "The" with General Concepts</h4>
              <p>Adding "the" when talking about things in general or making universal statements.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The life is beautiful. The dogs are loyal.</p>
                  <p>The mathematics is difficult. The freedom is important.</p>
                  <p>The children love the ice cream.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(General concepts don't need "the")</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Life is beautiful. Dogs are loyal.</p>
                  <p>Mathematics is difficult. Freedom is important.</p>
                  <p>Children love ice cream.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Zero article for general concepts)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Missing Articles with Countable Singular Nouns</h4>
              <p>Forgetting articles with singular countable nouns that require them.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I need pen. She is teacher.</p>
                  <p>He bought car. Book is on table.</p>
                  <p>Student asked question.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Singular countable nouns need articles)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I need a pen. She is a teacher.</p>
                  <p>He bought a car. The book is on the table.</p>
                  <p>A student asked a question.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Articles required for singular countable nouns)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Wrong Articles with Superlatives and Ordinals</h4>
              <p>Not using "the" with superlative adjectives and ordinal numbers.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>He is best student. This is most beautiful place.</p>
                  <p>She came first time. Second option is better.</p>
                  <p>Worst thing happened yesterday.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Superlatives and ordinals always need "the")
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>He is the best student. This is the most beautiful place.</p>
                  <p>She came the first time. The second option is better.</p>
                  <p>The worst thing happened yesterday.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    ("The" required with superlatives and ordinals)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Geographical Name Errors</h4>
              <p>Incorrect article usage with countries, mountains, rivers, and other geographical features.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I live in the India. Mount Everest is in Himalayas.</p>
                  <p>Pacific Ocean is vast. He crossed the Lake Superior.</p>
                  <p>The London is beautiful. United States is large.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Wrong geographical article usage)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I live in India. Mount Everest is in the Himalayas.</p>
                  <p>The Pacific Ocean is vast. He crossed Lake Superior.</p>
                  <p>London is beautiful. The United States is large.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Correct geographical usage)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">6. Institution and Activity Confusion</h4>
              <p>Confusing when to use articles with institutions based on purpose vs. place.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>She goes to the school every day. (as a student)</p>
                  <p>He is in the hospital. (as a patient)</p>
                  <p>They went to the church on Sunday. (to worship)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Activity/purpose doesn't need "the")</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>She goes to school every day. (as a student)</p>
                  <p>He is in hospital. (as a patient)</p>
                  <p>They went to church on Sunday. (to worship)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(No article for general activity)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">7. Uncountable Noun Article Errors</h4>
              <p>Using "a/an" with uncountable nouns or missing "the" when specific.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>I need an advice. She gave me an information.</p>
                  <p>He has a knowledge of computers.</p>
                  <p>Water in this bottle is pure. (specific water)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Uncountable nouns don't take "a/an")</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>I need advice. She gave me information.</p>
                  <p>He has knowledge of computers.</p>
                  <p>The water in this bottle is pure. (specific water)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Correct uncountable noun usage)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">8. Determiner Combination Errors</h4>
              <p>Using multiple determiners incorrectly or in wrong combinations.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The my book is missing. This the car is expensive.</p>
                  <p>A some students came late. The both options are good.</p>
                  <p>Many the people attended.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Can't combine certain determiners)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>My book is missing. This car is expensive.</p>
                  <p>Some students came late. Both options are good.</p>
                  <p>Many people attended.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use one determiner at a time)</p>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Exam Tip</AlertTitle>
              <AlertDescription>
                In competitive exams, article questions often test the sound rule for a/an, specificity for "the", and
                zero article usage. Practice identifying countable vs. uncountable nouns and general vs. specific
                contexts. Pay special attention to geographical names, institutions, and superlatives.
              </AlertDescription>
            </Alert>

            <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-md border border-orange-200 dark:border-orange-800 mt-4">
              <h4 className="text-lg font-semibold">Error Prevention Checklist</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>✓ Listen to pronunciation for a/an choice (not spelling)</li>
                <li>✓ Check if the noun is countable or uncountable</li>
                <li>✓ Determine if the reference is specific or general</li>
                <li>✓ Verify first mention (a/an) vs. second mention (the)</li>
                <li>✓ Always use "the" with superlatives and ordinals</li>
                <li>✓ Check geographical name patterns</li>
                <li>✓ Distinguish between activity and place for institutions</li>
                <li>✓ Avoid combining incompatible determiners</li>
                <li>✓ Remember zero article for general plurals and abstracts</li>
                <li>✓ Use "the" for unique items and previously mentioned things</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default ArticlesDeterminersTheory
