import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function PunctuationTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Punctuation</CardTitle>
        <CardDescription>
          Understanding how to use punctuation marks correctly to create clear and effective writing
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
            <h3 className="text-xl font-semibold text-blue-600">What Is Punctuation?</h3>
            <p>
              Punctuation marks are symbols that indicate the structure and organization of written language, as well as
              intonation and pauses to be observed when reading aloud. Proper punctuation helps convey your meaning
              clearly and effectively.
            </p>

            <h4 className="text-lg font-semibold mt-4">Common Punctuation Marks</h4>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">1. Period (.)</h5>
              <p>Used to mark the end of a declarative sentence or an imperative sentence that is not emphatic.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: The exam will be held next week<span className="text-blue-600 font-semibold">.</span> Please
                submit your assignments on time<span className="text-blue-600 font-semibold">.</span>
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">2. Question Mark (?)</h5>
              <p>Used at the end of a direct question.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: What time does the meeting start<span className="text-blue-600 font-semibold">?</span> Have you
                completed your assignment<span className="text-blue-600 font-semibold">?</span>
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">3. Exclamation Mark (!)</h5>
              <p>Used to express strong emotion, emphasis, or a command.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: What a wonderful performance<span className="text-blue-600 font-semibold">!</span> Stop
                <span className="text-blue-600 font-semibold">!</span>
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">4. Comma (,)</h5>
              <p>
                Used to separate elements in a sentence, including items in a list, clauses, and to set off introductory
                elements.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: I need to buy milk<span className="text-blue-600 font-semibold">,</span> bread
                <span className="text-blue-600 font-semibold">,</span> and eggs. After the exam
                <span className="text-blue-600 font-semibold">,</span> we'll go out for lunch.
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">5. Semicolon (;)</h5>
              <p>
                Used to connect independent clauses that are closely related in meaning, or to separate items in a list
                when the items themselves contain commas.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: The exam was difficult<span className="text-blue-600 font-semibold">;</span> many students
                couldn't finish it on time. We visited Paris, France
                <span className="text-blue-600 font-semibold">;</span> London, England
                <span className="text-blue-600 font-semibold">;</span> and Rome, Italy.
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">6. Colon (:)</h5>
              <p>
                Used to introduce a list, a quotation, an explanation, or an example. It can also be used between
                independent clauses when the second explains or illustrates the first.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: Please bring the following items<span className="text-blue-600 font-semibold">:</span> a
                notebook, a pen, and a calculator. The reason is clear
                <span className="text-blue-600 font-semibold">:</span> he didn't study for the exam.
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">7. Quotation Marks (" ")</h5>
              <p>Used to enclose direct speech, quotations, titles of short works, or words used in a special sense.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: <span className="text-blue-600 font-semibold">"</span>I'll be there at 5 PM,
                <span className="text-blue-600 font-semibold">"</span> she said. Have you read{" "}
                <span className="text-blue-600 font-semibold">"</span>The Lottery
                <span className="text-blue-600 font-semibold">"</span> by Shirley Jackson?
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">8. Apostrophe (')</h5>
              <p>Used to show possession, contraction, or omission of letters.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: That is John<span className="text-blue-600 font-semibold">'</span>s book. I can
                <span className="text-blue-600 font-semibold">'</span>t attend the meeting. The class of{" "}
                <span className="text-blue-600 font-semibold">'</span>22 graduated last month.
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">9. Hyphen (-) and Dash (—)</h5>
              <p>
                Hyphens are used to join words or parts of words. Dashes are used to indicate a pause or break in
                thought, or to set off parenthetical information.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: We need a well<span className="text-blue-600 font-semibold">-</span>prepared plan. The concert{" "}
                <span className="text-blue-600 font-semibold">—</span> which was sold out{" "}
                <span className="text-blue-600 font-semibold">—</span> was fantastic.
              </p>
            </div>

            <div className="pl-4 border-l-4 border-blue-200 my-4">
              <h5 className="font-semibold">10. Parentheses ( )</h5>
              <p>
                Used to enclose additional or supplementary information that is not essential to the meaning of the
                sentence.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: The meeting <span className="text-blue-600 font-semibold">(</span>which was scheduled for 3 PM
                <span className="text-blue-600 font-semibold">)</span> has been postponed.
              </p>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Key Concept</AlertTitle>
              <AlertDescription>
                Proper punctuation is essential for clear communication. It helps readers understand the intended
                meaning, tone, and structure of your writing. In competitive exams, punctuation errors can change the
                meaning of sentences and lead to incorrect answers.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Punctuation in Action</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Commas</h4>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">1. In a series</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: For the picnic, we packed sandwiches<span className="text-blue-600 font-semibold">,</span>{" "}
                    fruits<span className="text-blue-600 font-semibold">,</span> drinks
                    <span className="text-blue-600 font-semibold">,</span> and snacks.
                  </p>
                </div>
                <div>
                  <p className="font-medium">2. With introductory elements</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: After finishing the exam<span className="text-blue-600 font-semibold">,</span> the students
                    went to the cafeteria.
                  </p>
                </div>
                <div>
                  <p className="font-medium">3. With non-restrictive clauses (additional information)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: My brother<span className="text-blue-600 font-semibold">,</span> who lives in New York
                    <span className="text-blue-600 font-semibold">,</span> is visiting next week.
                  </p>
                </div>
                <div>
                  <p className="font-medium">4. With coordinate adjectives</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: She wore a beautiful<span className="text-blue-600 font-semibold">,</span> elegant dress to
                    the party.
                  </p>
                </div>
                <div>
                  <p className="font-medium">5. With conjunctions joining independent clauses</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: I wanted to go to the concert<span className="text-blue-600 font-semibold">,</span> but I
                    had to study for my exam.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Semicolons and Colons</h4>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">1. Semicolons between independent clauses</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The weather was terrible<span className="text-blue-600 font-semibold">;</span> we decided
                    to stay indoors.
                  </p>
                </div>
                <div>
                  <p className="font-medium">2. Semicolons in complex lists</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The conference had attendees from Paris, France
                    <span className="text-blue-600 font-semibold">;</span> London, England
                    <span className="text-blue-600 font-semibold">;</span> and Tokyo, Japan.
                  </p>
                </div>
                <div>
                  <p className="font-medium">3. Colons to introduce lists</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: Please bring the following items to class
                    <span className="text-blue-600 font-semibold">:</span> textbook, notebook, and calculator.
                  </p>
                </div>
                <div>
                  <p className="font-medium">4. Colons to introduce explanations</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: There's only one thing to do<span className="text-blue-600 font-semibold">:</span> study
                    harder for the next exam.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Apostrophes</h4>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">1. Showing possession for singular nouns</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The student<span className="text-blue-600 font-semibold">'</span>s book was left on the
                    desk.
                  </p>
                </div>
                <div>
                  <p className="font-medium">2. Showing possession for plural nouns</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The students<span className="text-blue-600 font-semibold">'</span> projects were displayed
                    in the hall.
                  </p>
                </div>
                <div>
                  <p className="font-medium">3. Contractions</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: I<span className="text-blue-600 font-semibold">'</span>m going to the library. They aren
                    <span className="text-blue-600 font-semibold">'</span>t coming to the party.
                  </p>
                </div>
                <div>
                  <p className="font-medium">4. Omission of numbers</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The class of <span className="text-blue-600 font-semibold">'</span>22 had their reunion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Quotation Marks and Dialogue</h4>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">1. Direct speech</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: <span className="text-blue-600 font-semibold">"</span>I'll be there at 7 PM,
                    <span className="text-blue-600 font-semibold">"</span> she promised.
                  </p>
                </div>
                <div>
                  <p className="font-medium">2. Titles of short works</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: Have you read <span className="text-blue-600 font-semibold">"</span>The Gift of the Magi
                    <span className="text-blue-600 font-semibold">"</span> by O. Henry?
                  </p>
                </div>
                <div>
                  <p className="font-medium">3. Words used in a special sense</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: The word <span className="text-blue-600 font-semibold">"</span>literally
                    <span className="text-blue-600 font-semibold">"</span> is often misused in casual conversation.
                  </p>
                </div>
                <div>
                  <p className="font-medium">4. Quotations within quotations</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Example: <span className="text-blue-600 font-semibold">"</span>Did she say{" "}
                    <span className="text-blue-600 font-semibold">'</span>I'll be late
                    <span className="text-blue-600 font-semibold">'</span>?
                    <span className="text-blue-600 font-semibold">"</span> he asked.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Punctuation Changes Meaning</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                  <p className="font-semibold text-blue-600">Example 1:</p>
                  <p>Let's eat, Grandma!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Inviting Grandma to eat)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                  <p className="font-semibold text-blue-600">vs.</p>
                  <p>Let's eat Grandma!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Suggesting cannibalism!)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                  <p className="font-semibold text-blue-600">Example 2:</p>
                  <p>The students, who completed their assignments, received extra credit.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (All students completed assignments and received extra credit)
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                  <p className="font-semibold text-blue-600">vs.</p>
                  <p>The students who completed their assignments received extra credit.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Only some students completed assignments and received extra credit)
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Punctuation Rules and Guidelines</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Quick Reference Guide
              </h4>
              <p className="mt-2">Use these guidelines to quickly determine correct punctuation usage.</p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">Comma Usage Guidelines</h4>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. Use commas to separate items in a series</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use commas to separate three or more words, phrases, or clauses in a series.
                  <br />
                  Example: The recipe calls for flour, sugar, eggs, and butter.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. Use commas after introductory elements</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use a comma after introductory words, phrases, or clauses.
                  <br />
                  Example: After the concert, we went out for dinner.
                  <br />
                  Example: However, the results were inconclusive.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. Use commas to set off non-essential information</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use commas to enclose information that is not essential to the meaning of the sentence.
                  <br />
                  Example: My sister, who lives in Boston, is visiting next week.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">
                  4. Use commas with coordinating conjunctions joining independent clauses
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use a comma before coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) when
                  they join independent clauses.
                  <br />
                  Example: I wanted to go to the beach, but it started raining.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">Semicolon and Colon Guidelines</h4>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. Use semicolons to join related independent clauses</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use a semicolon to join two independent clauses that are closely related in meaning.
                  <br />
                  Example: The test was difficult; many students couldn't finish it on time.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. Use colons to introduce lists, explanations, or elaborations</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rule: Use a colon after an independent clause to introduce a list, explanation, or elaboration.
                  <br />
                  Example: Please bring the following items: a notebook, a pen, and a calculator.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                <h4 className="text-lg font-semibold">Apostrophe Quick Rules</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-semibold">Singular possession:</span> Add 's (John's book)
                  </li>
                  <li>
                    <span className="font-semibold">Plural possession (ending in s):</span> Add just an apostrophe
                    (students' books)
                  </li>
                  <li>
                    <span className="font-semibold">Plural possession (not ending in s):</span> Add 's (children's toys)
                  </li>
                  <li>
                    <span className="font-semibold">Contractions:</span> Place the apostrophe where letters are omitted
                    (don't, can't, it's)
                  </li>
                  <li>
                    <span className="font-semibold">Its vs. It's:</span> "Its" is possessive; "it's" is a contraction of
                    "it is" or "it has"
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
                <h4 className="text-lg font-semibold">Quotation Mark Guidelines</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-semibold">Direct speech:</span> Enclose exact words in quotation marks
                  </li>
                  <li>
                    <span className="font-semibold">Titles of short works:</span> Use quotation marks for articles,
                    short stories, poems, songs, and episodes
                  </li>
                  <li>
                    <span className="font-semibold">Punctuation with quotation marks:</span> In American English,
                    periods and commas go inside quotation marks; semicolons and colons go outside
                  </li>
                  <li>
                    <span className="font-semibold">Quotations within quotations:</span> Use single quotation marks
                    inside double quotation marks
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Exam Strategy</AlertTitle>
                <AlertDescription>
                  When answering punctuation questions in competitive exams, first identify the sentence structure
                  (simple, compound, complex), then determine what punctuation marks are needed based on the
                  relationships between clauses and phrases. Pay special attention to commas with non-restrictive
                  elements, semicolons between independent clauses, and apostrophes for possession and contractions.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Common Punctuation Mistakes</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Punctuation Errors to Avoid
              </h4>
              <p className="mt-2">These common punctuation errors frequently appear in competitive exams.</p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. Comma Splices</h4>
              <p>Using only a comma to join two independent clauses without a coordinating conjunction.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The exam was difficult, many students failed it.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Comma splice: two independent clauses joined only by a comma)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The exam was difficult, so many students failed it.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Added coordinating conjunction "so")</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Also Correct:</p>
                  <p>The exam was difficult; many students failed it.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Used semicolon to join related independent clauses)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Also Correct:</p>
                  <p>The exam was difficult. Many students failed it.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Used period to create two separate sentences)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Missing or Misplaced Apostrophes</h4>
              <p>Incorrect use of apostrophes for possessives and contractions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The students books were left in the classroom.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Missing apostrophe for possession)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The students' books were left in the classroom.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Added apostrophe for plural possession)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Its going to rain tomorrow.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Missing apostrophe in contraction)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>It's going to rain tomorrow.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Added apostrophe for contraction of "it is")
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Unnecessary Commas</h4>
              <p>Adding commas where they are not needed.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The students who, completed their assignments, received extra credit.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Unnecessary commas around essential clause)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The students who completed their assignments received extra credit.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (No commas needed for restrictive clause)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Missing Commas</h4>
              <p>Omitting commas where they are required.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>After the exam the students went to the cafeteria.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Missing comma after introductory phrase)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>After the exam, the students went to the cafeteria.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Added comma after introductory phrase)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Incorrect Semicolon Usage</h4>
              <p>Using semicolons incorrectly between dependent and independent clauses.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Although it was raining; we still went to the park.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Semicolon used between dependent and independent clause)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Although it was raining, we still went to the park.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Used comma instead of semicolon)</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                <h4 className="text-lg font-semibold">Common Punctuation Errors in Competitive Exams</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-semibold">Comma usage with restrictive vs. non-restrictive elements:</span>{" "}
                    Understanding when to use commas with "which" vs. "that" clauses.
                  </li>
                  <li>
                    <span className="font-semibold">Apostrophe errors with possessives:</span> Especially with plural
                    possessives and words ending in "s".
                  </li>
                  <li>
                    <span className="font-semibold">Semicolon vs. colon confusion:</span> Understanding the different
                    purposes of these punctuation marks.
                  </li>
                  <li>
                    <span className="font-semibold">Run-on sentences and comma splices:</span> Failing to properly
                    separate independent clauses.
                  </li>
                  <li>
                    <span className="font-semibold">Quotation mark placement with other punctuation:</span> Knowing
                    whether periods, commas, etc. go inside or outside quotation marks.
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Exam Tip</AlertTitle>
                <AlertDescription>
                  In competitive exams, punctuation questions often test your understanding of how punctuation affects
                  meaning. When analyzing a sentence, first identify its structure and the relationships between its
                  parts. Then determine what punctuation is needed to clearly convey the intended meaning.
                </AlertDescription>
              </Alert>

              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
                <h4 className="text-lg font-semibold">Punctuation Error Detection Strategy</h4>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-semibold">Identify clause types:</span> Determine if clauses are independent
                    or dependent.
                  </li>
                  <li>
                    <span className="font-semibold">Check for proper separation:</span> Ensure independent clauses are
                    properly separated with periods, semicolons, or commas with coordinating conjunctions.
                  </li>
                  <li>
                    <span className="font-semibold">Verify possessives and contractions:</span> Check that apostrophes
                    are used correctly.
                  </li>
                  <li>
                    <span className="font-semibold">Look for introductory elements:</span> Ensure they're followed by
                    commas.
                  </li>
                  <li>
                    <span className="font-semibold">Examine non-essential elements:</span> Make sure they're properly
                    set off with commas.
                  </li>
                </ol>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
