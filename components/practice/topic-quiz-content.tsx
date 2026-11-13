"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle, Clock, HelpCircle, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface TopicQuizContentProps {
  topicId: string
}

// Question types
type BaseQuestion = {
  id: string
  question: string
  explanation: string
  difficulty: "Easy" | "Medium" | "Hard"
}

type MCQQuestion = BaseQuestion & {
  type: "mcq"
  options: string[]
  correctAnswer: number
}

type FillBlankQuestion = BaseQuestion & {
  type: "fill-blank"
  blanks: string[]
  correctAnswers: string[]
}

type ErrorSpottingQuestion = BaseQuestion & {
  type: "error-spotting"
  parts: string[]
  errorPart: number // 0-based index, -1 if no error
}

type Question = MCQQuestion | FillBlankQuestion | ErrorSpottingQuestion

// Placeholder quiz data - in a real app, this would come from an API
const getQuizQuestions = (topicId: string): Question[] => {
  // Return different questions based on the topic
  switch (topicId) {
    case "subject-verb-agreement":
      return [
        {
          id: "sva-q1",
          type: "mcq",
          question: "Which of the following sentences demonstrates correct subject-verb agreement?",
          options: [
            "The team of researchers are conducting the experiment.",
            "The team of researchers is conducting the experiment.",
            "The researchers team are conducting the experiment.",
            "The researchers team is conducting the experiment.",
          ],
          correctAnswer: 1,
          explanation:
            "When a collective noun like 'team' is followed by a prepositional phrase ('of researchers'), the verb should agree with the collective noun. 'Team' is singular, so it takes the singular verb 'is'.",
          difficulty: "Medium",
        },
        {
          id: "sva-q2",
          type: "fill-blank",
          question:
            "Complete the sentence with the correct form: Neither the students nor the teacher ____ going to the field trip tomorrow.",
          blanks: [""],
          correctAnswers: ["is"],
          explanation:
            "When 'neither/nor' connects a singular and plural subject, the verb agrees with the subject closest to it. In this case, 'teacher' is singular, so we use the singular verb 'is'.",
          difficulty: "Medium",
        },
        {
          id: "sva-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["The committee", "have decided", "to postpone", "the meeting."],
          errorPart: 1,
          explanation:
            "In American English, collective nouns like 'committee' are treated as singular and take singular verbs. The correct form should be 'The committee has decided...'",
          difficulty: "Medium",
        },
        {
          id: "sva-q4",
          type: "mcq",
          question: "Which sentence demonstrates correct subject-verb agreement with indefinite pronouns?",
          options: [
            "Each of the students have completed their assignments.",
            "Each of the students has completed their assignments.",
            "None of the cake were eaten at the party.",
            "Either of the options are acceptable.",
          ],
          correctAnswer: 1,
          explanation:
            "Indefinite pronouns like 'each', 'everyone', 'anybody', 'either', and 'neither' are singular and take singular verbs. So 'Each of the students has completed' is correct.",
          difficulty: "Medium",
        },
        {
          id: "sva-q5",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["The number of students", "attending the lecture", "have increased", "significantly this year."],
          errorPart: 2,
          explanation:
            "The subject is 'The number' (singular), not 'students'. So it should be 'The number of students has increased'. Be careful with phrases like 'a number of' (plural) versus 'the number of' (singular).",
          difficulty: "Hard",
        },
        {
          id: "sva-q6",
          type: "fill-blank",
          question:
            "Complete the sentence with the correct verb form: The jury ____ (deliberate) for three days before reaching a verdict.",
          blanks: [""],
          correctAnswers: ["deliberated", "has deliberated", "had deliberated"],
          explanation:
            "In American English, collective nouns like 'jury', 'team', and 'family' are typically treated as singular, but when emphasizing the individual members, they can take plural verbs. In this case, 'deliberated' is correct as we're using the past tense.",
          difficulty: "Medium",
        },
      ]

    case "tenses":
      return [
        {
          id: "tenses-q1",
          type: "mcq",
          question: "Which sentence correctly uses the past perfect tense?",
          options: [
            "I have eaten lunch before he arrived.",
            "I had eaten lunch before he arrived.",
            "I was eating lunch before he arrived.",
            "I ate lunch before he arrived.",
          ],
          correctAnswer: 1,
          explanation:
            "The past perfect tense (had + past participle) is used to indicate that an action was completed before another action in the past. 'I had eaten lunch' happened before 'he arrived'.",
          difficulty: "Medium",
        },
        {
          id: "tenses-q2",
          type: "fill-blank",
          question:
            "Complete with the correct tense: By the time we reach the theater, the movie ____ (already/start).",
          blanks: [""],
          correctAnswers: ["will have already started"],
          explanation:
            "This requires the future perfect tense (will have + past participle) to show that one future action (the movie starting) will be completed before another future action (reaching the theater).",
          difficulty: "Hard",
        },
        {
          id: "tenses-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["She is working", "at this company", "since 2010", "and loves her job."],
          errorPart: 0,
          explanation:
            "For an action that started in the past and continues to the present with 'since', we need the present perfect continuous tense. It should be 'She has been working' instead of 'She is working'.",
          difficulty: "Medium",
        },
        {
          id: "tenses-q4",
          type: "mcq",
          question: "Which sentence correctly uses the present perfect continuous tense?",
          options: [
            "I am studying English for five years.",
            "I have been studying English for five years.",
            "I studied English for five years.",
            "I have studied English for five years.",
          ],
          correctAnswer: 1,
          explanation:
            "The present perfect continuous tense (have/has been + present participle) is used for actions that started in the past and continue to the present. 'I have been studying' correctly expresses an ongoing action from the past until now.",
          difficulty: "Medium",
        },
        {
          id: "tenses-q5",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["If I would have known", "about the problem earlier,", "I would have fixed it", "immediately."],
          errorPart: 0,
          explanation:
            "In conditional sentences expressing unreal past situations, we use 'If + past perfect' in the if-clause. The correct form should be 'If I had known about the problem earlier...'",
          difficulty: "Hard",
        },
        {
          id: "tenses-q6",
          type: "fill-blank",
          question:
            "Complete with the correct tense: By the time I graduate, I ____ (study) at this university for five years.",
          blanks: [""],
          correctAnswers: ["will have been studying", "will have studied"],
          explanation:
            "This requires the future perfect continuous tense (will have been + present participle) or future perfect tense (will have + past participle) to show an action that will continue up to a certain point in the future.",
          difficulty: "Hard",
        },
      ]

    case "modifiers":
      return [
        {
          id: "mod-q1",
          type: "mcq",
          question: "Which sentence contains a dangling modifier?",
          options: [
            "Walking down the street, the birds sang loudly.",
            "Walking down the street, I saw a beautiful garden.",
            "The children played happily in the garden.",
            "The well-decorated room impressed all the guests.",
          ],
          correctAnswer: 0,
          explanation:
            "In 'Walking down the street, the birds sang loudly', the modifier 'Walking down the street' is dangling because birds cannot walk down the street. The sentence should be rewritten to clearly identify who was walking.",
          difficulty: "Medium",
        },
        {
          id: "mod-q2",
          type: "fill-blank",
          question: "Correct the dangling modifier: '____ the equation, the solution became clear.'",
          blanks: [""],
          correctAnswers: ["After solving", "Upon solving", "When I solved", "After we solved"],
          explanation:
            "The original sentence has a dangling modifier because it doesn't specify who solved the equation. Adding a subject or changing to 'After solving' makes it clear who performed the action.",
          difficulty: "Medium",
        },
        {
          id: "mod-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["Quickly and with precision,", "the surgeon performed", "the delicate operation", "successful."],
          errorPart: 3,
          explanation:
            "The adverb 'successful' is incorrectly used to modify the verb 'performed'. It should be 'successfully' to properly modify how the operation was performed.",
          difficulty: "Hard",
        },
        {
          id: "mod-q4",
          type: "mcq",
          question: "Which sentence uses a misplaced modifier?",
          options: [
            "The professor discussed the assignment that was due on Friday in class.",
            "In class, the professor discussed the assignment that was due on Friday.",
            "The professor discussed in class the assignment that was due on Friday.",
            "The assignment that was due on Friday was discussed by the professor in class.",
          ],
          correctAnswer: 0,
          explanation:
            "In the first option, 'in class' is misplaced, creating ambiguity about whether the assignment is due in class on Friday or if the discussion happened in class. The modifier should be placed closer to the verb it modifies.",
          difficulty: "Medium",
        },
        {
          id: "mod-q5",
          type: "fill-blank",
          question: "Correct the misplaced modifier: '____ in the refrigerator, my roommate ate the leftover pizza.'",
          blanks: [""],
          correctAnswers: ["After finding it", "Finding it", "After it was found", "Once found"],
          explanation:
            "The original sentence suggests the roommate was in the refrigerator, which is a misplaced modifier. The corrected version clarifies that the pizza was in the refrigerator.",
          difficulty: "Medium",
        },
        {
          id: "mod-q6",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["The student", "handed in his paper", "to the professor", "full of errors."],
          errorPart: 3,
          explanation:
            "The phrase 'full of errors' is a misplaced modifier. As written, it suggests the professor is full of errors. It should be placed closer to 'paper': 'The student handed in his paper, full of errors, to the professor.'",
          difficulty: "Hard",
        },
      ]

    // Add more cases for other topics
    case "pronouns":
      return [
        {
          id: "pron-q1",
          type: "mcq",
          question: "Which sentence uses pronouns correctly?",
          options: [
            "Him and me went to the store.",
            "Her and I went to the store.",
            "She and I went to the store.",
            "She and me went to the store.",
          ],
          correctAnswer: 2,
          explanation:
            "When pronouns are used as subjects, they must be in the subjective case. 'She' and 'I' are both subjective pronouns, making 'She and I went to the store' correct.",
          difficulty: "Easy",
        },
        {
          id: "pron-q2",
          type: "fill-blank",
          question: "Complete with the correct pronoun: The prize was divided between John and ____.",
          blanks: [""],
          correctAnswers: ["me"],
          explanation:
            "After prepositions like 'between', we use object pronouns. Since 'I' is the subject form and 'me' is the object form, 'me' is correct here.",
          difficulty: "Medium",
        },
        {
          id: "pron-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["Everyone must bring", "their own supplies", "to the workshop", "tomorrow."],
          errorPart: -1,
          explanation:
            "There is no error. While traditionally 'everyone' (singular) would take 'his or her', modern English accepts the singular 'they/their' as gender-neutral pronouns, especially in cases like this.",
          difficulty: "Medium",
        },
        {
          id: "pron-q4",
          type: "mcq",
          question: "Which sentence demonstrates correct pronoun-antecedent agreement?",
          options: [
            "Each student must complete their assignment by Friday.",
            "Every applicant must submit his or her resume online.",
            "Neither of the girls brought their lunch today.",
            "Someone left their umbrella in the office.",
          ],
          correctAnswer: 1,
          explanation:
            "Traditionally, singular antecedents like 'every applicant' require singular pronouns ('his or her'). While modern usage increasingly accepts singular 'they/their' for gender neutrality (making options A and D acceptable in many contexts), option B follows the strictest traditional grammar rules.",
          difficulty: "Medium",
        },
        {
          id: "pron-q5",
          type: "fill-blank",
          question: "Complete with the correct relative pronoun: The book ____ I borrowed from the library is overdue.",
          blanks: [""],
          correctAnswers: ["that", "which"],
          explanation:
            "Both 'that' and 'which' can be used as relative pronouns to refer to things in this context. 'That' is more common in restrictive clauses (essential information), while 'which' is traditionally used in non-restrictive clauses (with commas), but both are acceptable here.",
          difficulty: "Easy",
        },
        {
          id: "pron-q6",
          type: "error-spotting",
          question: "Identify the part that contains an error, if any:",
          parts: ["The professor", "whom everyone respects", "gave I and my classmates", "extra time for the exam."],
          errorPart: 2,
          explanation:
            "The phrase 'I and my classmates' contains an error in pronoun case. Object pronouns should be used after prepositions, so it should be 'gave me and my classmates' or better yet, 'gave my classmates and me'.",
          difficulty: "Medium",
        },
      ]
    case "parallelism":
      return [
        {
          id: "para-q1",
          type: "mcq",
          question: "Which sentence demonstrates correct parallel structure?",
          options: [
            "The CEO likes talking to his employees and to visit the factory floor.",
            "The CEO likes talking to his employees and visiting the factory floor.",
            "The CEO likes to talk to his employees and visiting the factory floor.",
            "The CEO likes to talk to his employees and visit to the factory floor.",
          ],
          correctAnswer: 1,
          explanation:
            "Parallel structure requires using the same grammatical form for similar elements. Option B correctly uses gerunds ('talking' and 'visiting') for both activities.",
          difficulty: "Medium",
        },
        {
          id: "para-q2",
          type: "fill-blank",
          question:
            "Complete the sentence with the correct parallel structure: 'The professor asked students to analyze the data, interpret the results, and ____ a conclusion.'",
          blanks: [""],
          correctAnswers: ["draw", "to draw", "drawing"],
          explanation:
            "The sentence uses infinitives ('to analyze', 'interpret' which implies 'to interpret'), so 'to draw' or just 'draw' maintains parallel structure. If you chose 'drawing', the entire structure would need to be gerunds.",
          difficulty: "Medium",
        },
        {
          id: "para-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error in parallel structure, if any:",
          parts: ["The candidate promised", "to lower taxes,", "creating jobs,", "and to improve education."],
          errorPart: 2,
          explanation:
            "The items in the list should all use the same grammatical form. 'To lower' and 'to improve' are infinitives, but 'creating' is a gerund. It should be 'to create jobs' to maintain parallel structure.",
          difficulty: "Hard",
        },
        {
          id: "para-q4",
          type: "mcq",
          question: "Which sentence uses correct parallel structure with correlative conjunctions?",
          options: [
            "Not only did she win the race, but also received a scholarship.",
            "Not only did she win the race, but she also received a scholarship.",
            "She not only won the race, but also she received a scholarship.",
            "She not only won the race, but received also a scholarship.",
          ],
          correctAnswer: 1,
          explanation:
            "With correlative conjunctions like 'not only...but also', parallel structure requires balanced elements on both sides. Option B correctly balances 'did she win' with 'she also received'.",
          difficulty: "Hard",
        },
        {
          id: "para-q5",
          type: "error-spotting",
          question: "Identify the part that contains an error in parallel structure, if any:",
          parts: [
            "The workshop focuses on",
            "writing effective emails,",
            "how to conduct meetings,",
            "and delivering presentations.",
          ],
          errorPart: 2,
          explanation:
            "The list items should use the same grammatical form. 'Writing' and 'delivering' are gerunds, but 'how to conduct' is a noun clause with an infinitive. It should be 'conducting meetings' to maintain parallel structure.",
          difficulty: "Medium",
        },
      ]

    case "idioms-phrases":
      return [
        {
          id: "idiom-q1",
          type: "mcq",
          question: "Which sentence uses the idiom correctly?",
          options: [
            "The new employee is really pulling his weight in the department.",
            "The new employee is really pushing his weight in the department.",
            "The new employee is really carrying his weight in the department.",
            "The new employee is really holding his weight in the department.",
          ],
          correctAnswer: 0,
          explanation:
            "'To pull one's weight' is the correct idiom, meaning to do one's fair share of work or contribute equally to a group effort.",
          difficulty: "Medium",
        },
        {
          id: "idiom-q2",
          type: "fill-blank",
          question: "Complete the idiom: 'The merger fell through at the last minute, so it's back to the ____ board.'",
          blanks: [""],
          correctAnswers: ["drawing"],
          explanation:
            "'Back to the drawing board' is an idiom meaning to start over after an idea or plan has failed.",
          difficulty: "Easy",
        },
        {
          id: "idiom-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error in the idiomatic expression, if any:",
          parts: ["The politician was", "on the hot seat", "during the press conference", "about the scandal."],
          errorPart: -1,
          explanation:
            "There is no error. 'On the hot seat' is the correct idiomatic expression meaning to be in a difficult situation where one must answer tough questions or face criticism.",
          difficulty: "Medium",
        },
        {
          id: "idiom-q4",
          type: "mcq",
          question: "Which phrase correctly completes the idiom: 'Don't count your chickens before they ____'?",
          options: ["are born", "are hatched", "come home", "are grown"],
          correctAnswer: 1,
          explanation:
            "The correct idiom is 'Don't count your chickens before they are hatched,' meaning don't make plans based on something that might not happen.",
          difficulty: "Easy",
        },
        {
          id: "idiom-q5",
          type: "fill-blank",
          question: "Complete the idiom: 'The CEO's decision to expand internationally was a ____ in the dark.'",
          blanks: [""],
          correctAnswers: ["shot"],
          explanation:
            "'A shot in the dark' is an idiom meaning an attempt to do something when you have little information or knowledge about it and are not sure if you will succeed.",
          difficulty: "Medium",
        },
      ]
    case "punctuation":
      return [
        {
          id: "punct-q1",
          type: "mcq",
          question: "Which sentence uses semicolons correctly?",
          options: [
            "I have three cats; they are all black and white.",
            "I have three cats: Fluffy, Mittens; and Whiskers.",
            "I have three cats, they are all black and white.",
            "I have three cats; Fluffy; Mittens; and Whiskers.",
          ],
          correctAnswer: 0,
          explanation:
            "Semicolons are used to join two independent clauses without a coordinating conjunction. Option A correctly uses a semicolon to join two related independent clauses.",
          difficulty: "Medium",
        },
        {
          id: "punct-q2",
          type: "fill-blank",
          question:
            "Add the correct punctuation: 'The following items are required for the trip ____ a tent, a sleeping bag, and food supplies.'",
          blanks: [""],
          correctAnswers: [":", ";", "."],
          explanation:
            "A colon (:) is appropriate here to introduce a list. A semicolon (;) could work if the first part were an independent clause. A period (.) would be correct if you wanted to make it two separate sentences.",
          difficulty: "Easy",
        },
        {
          id: "punct-q3",
          type: "error-spotting",
          question: "Identify the part that contains a punctuation error, if any:",
          parts: [
            "The professor said",
            '"The exam will be on Friday,"',
            "and we should prepare",
            "for multiple choice questions.",
          ],
          errorPart: -1,
          explanation: "There is no punctuation error. The quotation marks and comma are correctly placed.",
          difficulty: "Medium",
        },
        {
          id: "punct-q4",
          type: "mcq",
          question: "Which sentence uses apostrophes correctly?",
          options: [
            "The childrens' toys were scattered across the floor.",
            "The children's toys were scattered across the floor.",
            "The childrens toys' were scattered across the floor.",
            "The children toys were scattered across the floor.",
          ],
          correctAnswer: 1,
          explanation:
            "For plural nouns not ending in 's' (like 'children'), add 's to show possession. 'Children's' is the correct possessive form.",
          difficulty: "Medium",
        },
        {
          id: "punct-q5",
          type: "error-spotting",
          question: "Identify the part that contains a punctuation error, if any:",
          parts: [
            "After considering all options",
            "the committee decided",
            "to approve the proposal,",
            "which surprised everyone.",
          ],
          errorPart: 1,
          explanation:
            "There should be a comma after 'After considering all options' because it's an introductory phrase. The correct punctuation would be 'After considering all options, the committee decided...'",
          difficulty: "Medium",
        },
      ]

    case "articles-determiners":
      return [
        {
          id: "art-q1",
          type: "mcq",
          question: "Which sentence uses articles correctly?",
          options: [
            "She is an university student studying a history.",
            "She is a university student studying history.",
            "She is the university student studying a history.",
            "She is university student studying the history.",
          ],
          correctAnswer: 1,
          explanation:
            "We use 'a' before words beginning with a consonant sound (like 'university' which starts with a 'y' sound). 'History' as a general subject doesn't need an article, but specific history topics would use 'the' (e.g., 'the history of Rome').",
          difficulty: "Easy",
        },
        {
          id: "art-q2",
          type: "fill-blank",
          question:
            "Complete with the correct article: 'My father is ____ doctor who works at ____ hospital in our town.'",
          blanks: ["", ""],
          correctAnswers: ["a", "the"],
          explanation:
            "We use 'a' for the first mention of a non-specific person in a profession. We use 'the' for a specific hospital (the one in our town), as it's a specific reference.",
          difficulty: "Medium",
        },
        {
          id: "art-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error in article usage, if any:",
          parts: ["She plays", "the violin", "in an orchestra", "every weekend."],
          errorPart: -1,
          explanation:
            "There is no error. We use 'the' with musical instruments ('the violin'), and 'an' before words beginning with a vowel sound ('an orchestra').",
          difficulty: "Medium",
        },
        {
          id: "art-q4",
          type: "mcq",
          question: "Which sentence demonstrates correct use of zero article (no article)?",
          options: [
            "The dogs make good pets.",
            "The gold is valuable metal.",
            "She studies the physics at university.",
            "Dogs make good pets.",
          ],
          correctAnswer: 3,
          explanation:
            "We use zero article (no article) when talking about things in general. 'Dogs' refers to dogs as a category or type of animal, not specific dogs.",
          difficulty: "Medium",
        },
        {
          id: "art-q5",
          type: "fill-blank",
          question:
            "Complete with the correct article (a, an, the) or leave blank if no article is needed: 'I have ____ appointment with ____ Dr. Smith at noon.'",
          blanks: ["", ""],
          correctAnswers: ["an", ""],
          explanation:
            "We use 'an' before words beginning with a vowel sound ('an appointment'). We don't use articles before titles followed by names ('Dr. Smith'), though in some varieties of English 'the' is used.",
          difficulty: "Medium",
        },
        {
          id: "art-q6",
          type: "error-spotting",
          question: "Identify the part that contains an error in article or determiner usage, if any:",
          parts: ["She visited", "a few countries", "in the Europe", "last summer."],
          errorPart: 2,
          explanation:
            "We don't use 'the' before continent names unless they're part of a specific political entity. It should be 'in Europe' without 'the'.",
          difficulty: "Medium",
        },
        {
          id: "art-q7",
          type: "mcq",
          question: "Which sentence uses demonstrative determiners correctly?",
          options: [
            "This books are interesting.",
            "That student over there is my cousin.",
            "These student is from Japan.",
            "Those book belongs to me.",
          ],
          correctAnswer: 1,
          explanation:
            "Demonstrative determiners must agree in number with the nouns they modify. 'That student' correctly uses the singular demonstrative 'that' with the singular noun 'student'.",
          difficulty: "Easy",
        },
        {
          id: "art-q8",
          type: "fill-blank",
          question:
            "Complete with the correct article or determiner: 'I don't have ____ money to buy ____ expensive car.'",
          blanks: ["", ""],
          correctAnswers: ["enough", "an"],
          explanation:
            "'Enough' is a determiner indicating sufficient quantity. 'An' is used before 'expensive' because it begins with a vowel sound.",
          difficulty: "Medium",
        },
        {
          id: "art-q9",
          type: "error-spotting",
          question: "Identify the part that contains an error in article or determiner usage, if any:",
          parts: ["Most students", "in the class", "passed their exams", "with good grades."],
          errorPart: -1,
          explanation:
            "There is no error. 'Most' is a quantifier used correctly with the plural noun 'students'. 'The class' correctly uses the definite article for a specific class.",
          difficulty: "Medium",
        },
        {
          id: "art-q10",
          type: "mcq",
          question: "Which sentence uses possessive determiners correctly?",
          options: [
            "The dog wagged it's tail.",
            "The company announced their new policy.",
            "Each student must bring his or her own calculator.",
            "The team lost its best player to injury.",
          ],
          correctAnswer: 3,
          explanation:
            "'Its' (without an apostrophe) is the correct possessive determiner for 'team', which is a singular collective noun. 'It's' with an apostrophe means 'it is'.",
          difficulty: "Hard",
        },
      ]

    case "prepositions":
      return [
        {
          id: "prep-q1",
          type: "mcq",
          question: "Which sentence uses prepositions correctly?",
          options: [
            "She arrived to the airport at 9 PM on Monday.",
            "She arrived at the airport at 9 PM on Monday.",
            "She arrived in the airport at 9 PM in Monday.",
            "She arrived at the airport on 9 PM in Monday.",
          ],
          correctAnswer: 1,
          explanation:
            "We use 'at' with specific locations like airports, 'at' with specific times, and 'on' with days of the week. 'She arrived at the airport at 9 PM on Monday' is correct.",
          difficulty: "Easy",
        },
        {
          id: "prep-q2",
          type: "fill-blank",
          question: "Complete with the correct preposition: 'The book is ____ the table, right ____ the lamp.'",
          blanks: ["", ""],
          correctAnswers: ["on", "next to"],
          explanation:
            "'On' is used for objects resting on horizontal surfaces. 'Next to' indicates position beside something. Other possible answers for the second blank could include 'beside' or 'by'.",
          difficulty: "Easy",
        },
        {
          id: "prep-q3",
          type: "error-spotting",
          question: "Identify the part that contains an error in preposition usage, if any:",
          parts: ["She has been working", "in this company", "for ten years", "and loves her job."],
          errorPart: 1,
          explanation:
            "We typically use 'at' or 'for' with companies, not 'in'. The correct phrase would be 'She has been working at this company' or 'She has been working for this company'.",
          difficulty: "Medium",
        },
        {
          id: "prep-q4",
          type: "mcq",
          question: "Which sentence demonstrates correct use of prepositions of time?",
          options: [
            "We're meeting in January 15 at 3:00 in the afternoon.",
            "We're meeting on January 15 at 3:00 in the afternoon.",
            "We're meeting at January 15 on 3:00 in the afternoon.",
            "We're meeting at January 15 at 3:00 on the afternoon.",
          ],
          correctAnswer: 1,
          explanation:
            "We use 'on' with specific dates, 'at' with specific times, and 'in' with parts of the day. 'On January 15 at 3:00 in the afternoon' is correct.",
          difficulty: "Medium",
        },
        {
          id: "prep-q5",
          type: "fill-blank",
          question:
            "Complete with the correct preposition: 'The professor is disappointed ____ the students who didn't submit their assignments ____ time.'",
          blanks: ["", ""],
          correctAnswers: ["with", "on"],
          explanation:
            "'Disappointed with' is the correct collocation when referring to people. 'On time' is the correct phrase meaning 'punctually' or 'by the deadline'.",
          difficulty: "Medium",
        },
        {
          id: "prep-q6",
          type: "error-spotting",
          question: "Identify the part that contains an error in preposition usage, if any:",
          parts: ["The criminal was accused", "for robbery", "and sentenced", "to five years in prison."],
          errorPart: 1,
          explanation:
            "The correct preposition to use with 'accused' is 'of', not 'for'. The correct phrase is 'accused of robbery'.",
          difficulty: "Medium",
        },
        {
          id: "prep-q7",
          type: "mcq",
          question: "Which sentence uses a phrasal verb correctly?",
          options: [
            "Can you look after my luggage while I go to the restroom?",
            "Can you look at my luggage while I go to the restroom?",
            "Can you look for my luggage while I go to the restroom?",
            "Can you look on my luggage while I go to the restroom?",
          ],
          correctAnswer: 0,
          explanation:
            "'Look after' means to take care of or watch over something temporarily. 'Look at' means to direct your eyes toward something, 'look for' means to search for something, and 'look on' means to observe without participating.",
          difficulty: "Medium",
        },
        {
          id: "prep-q8",
          type: "fill-blank",
          question:
            "Complete with the correct preposition: 'The new policy differs ____ the old one ____ several important ways.'",
          blanks: ["", ""],
          correctAnswers: ["from", "in"],
          explanation:
            "'Differ from' is used when comparing two things. 'In several ways' indicates the aspects or dimensions of difference.",
          difficulty: "Hard",
        },
        {
          id: "prep-q9",
          type: "error-spotting",
          question: "Identify the part that contains an error in preposition usage, if any:",
          parts: ["The plane flew", "over the mountains", "and arrived to", "its destination safely."],
          errorPart: 2,
          explanation:
            "The correct preposition to use with 'arrived' is 'at', not 'to'. The correct phrase is 'arrived at its destination'.",
          difficulty: "Medium",
        },
        {
          id: "prep-q10",
          type: "mcq",
          question: "Which sentence demonstrates correct use of dependent prepositions?",
          options: [
            "She's very good at playing the piano.",
            "She's very good in playing the piano.",
            "She's very good with playing the piano.",
            "She's very good on playing the piano.",
          ],
          correctAnswer: 0,
          explanation:
            "Certain adjectives require specific prepositions. 'Good at' is the correct combination when referring to skills or abilities.",
          difficulty: "Medium",
        },
        {
          id: "prep-q11",
          type: "fill-blank",
          question:
            "Complete with the correct preposition: 'The suspect was taken ____ custody and charged ____ assault.'",
          blanks: ["", ""],
          correctAnswers: ["into", "with"],
          explanation:
            "'Take into custody' is the correct legal phrase for arresting someone. 'Charged with' is the correct phrase for formal accusations of crimes.",
          difficulty: "Medium",
        },
        {
          id: "prep-q12",
          type: "error-spotting",
          question: "Identify the part that contains an error in preposition usage, if any:",
          parts: ["The company invested", "millions of dollars", "on research", "and development."],
          errorPart: 2,
          explanation:
            "The correct preposition to use with 'invest' is 'in', not 'on'. The correct phrase is 'invested in research'.",
          difficulty: "Medium",
        },
      ]

    // Default case with generic questions
    default:
      return [
        {
          id: "gen-q1",
          type: "mcq",
          question: "This is a sample question for the " + topicId.replace(/-/g, " ") + " topic.",
          options: [
            "First option - incorrect",
            "Second option - correct",
            "Third option - incorrect",
            "Fourth option - incorrect",
          ],
          correctAnswer: 1,
          explanation:
            "This is a placeholder explanation for the " +
            topicId.replace(/-/g, " ") +
            " topic. In a complete implementation, this would contain topic-specific content.",
          difficulty: "Medium",
        },
        {
          id: "gen-q2",
          type: "fill-blank",
          question:
            "This is a sample fill-in-the-blank question for the " + topicId.replace(/-/g, " ") + " topic: _____.",
          blanks: [""],
          correctAnswers: ["correct answer"],
          explanation:
            "This is a placeholder explanation for the " +
            topicId.replace(/-/g, " ") +
            " topic. In a complete implementation, this would contain topic-specific content.",
          difficulty: "Medium",
        },
        {
          id: "gen-q3",
          type: "error-spotting",
          question: "This is a sample error-spotting question for the " + topicId.replace(/-/g, " ") + " topic:",
          parts: ["This part is correct", "This part has an error", "This part is correct", "This part is correct"],
          errorPart: 1,
          explanation:
            "This is a placeholder explanation for the " +
            topicId.replace(/-/g, " ") +
            " topic. In a complete implementation, this would contain topic-specific content.",
          difficulty: "Medium",
        },
      ]
  }
}

export default function TopicQuizContent({ topicId }: TopicQuizContentProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | string[] | number)[]>([])
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds per question
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  // Load questions based on topic ID
  useEffect(() => {
    const loadedQuestions = getQuizQuestions(topicId)
    setQuestions(loadedQuestions)

    // Initialize user answers array
    setUserAnswers(new Array(loadedQuestions.length).fill(null))
  }, [topicId])

  // Timer effect
  useEffect(() => {
    if (quizCompleted || isAnswerSubmitted || questions.length === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitAnswer()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizCompleted, isAnswerSubmitted, currentQuestionIndex, questions])

  // Reset timer when moving to next question
  useEffect(() => {
    setTimeLeft(60)
  }, [currentQuestionIndex])

  const currentQuestion = questions[currentQuestionIndex]

  const handleMCQChange = (value: string) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = Number.parseInt(value)
    setUserAnswers(newAnswers)
  }

  const handleFillBlankChange = (value: string, index: number) => {
    const newAnswers = [...userAnswers]
    const currentAnswer = (newAnswers[currentQuestionIndex] as string[]) || []

    // Create a new array if it doesn't exist
    if (!Array.isArray(currentAnswer)) {
      newAnswers[currentQuestionIndex] = new Array((currentQuestion as FillBlankQuestion).blanks.length).fill("")
    }

    // Update the specific blank
    const updatedAnswer = [...((newAnswers[currentQuestionIndex] as string[]) || [])]
    updatedAnswer[index] = value
    newAnswers[currentQuestionIndex] = updatedAnswer

    setUserAnswers(newAnswers)
  }

  const handleErrorSpottingChange = (value: string) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = Number.parseInt(value)
    setUserAnswers(newAnswers)
  }

  const handleSubmitAnswer = () => {
    if (isAnswerSubmitted) return

    setIsAnswerSubmitted(true)

    // Calculate score
    let isCorrect = false

    if (currentQuestion.type === "mcq") {
      isCorrect = userAnswers[currentQuestionIndex] === (currentQuestion as MCQQuestion).correctAnswer
    } else if (currentQuestion.type === "fill-blank") {
      const fillQuestion = currentQuestion as FillBlankQuestion
      const userAnswer = (userAnswers[currentQuestionIndex] as string[]) || []

      isCorrect = fillQuestion.correctAnswers.every(
        (answer, index) => userAnswer[index]?.toLowerCase().trim() === answer.toLowerCase().trim(),
      )
    } else if (currentQuestion.type === "error-spotting") {
      isCorrect = userAnswers[currentQuestionIndex] === (currentQuestion as ErrorSpottingQuestion).errorPart
    }

    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setIsAnswerSubmitted(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const renderQuestion = () => {
    if (!currentQuestion) return null

    switch (currentQuestion.type) {
      case "mcq":
        return renderMCQQuestion(currentQuestion)
      case "fill-blank":
        return renderFillBlankQuestion(currentQuestion)
      case "error-spotting":
        return renderErrorSpottingQuestion(currentQuestion)
      default:
        return null
    }
  }

  const renderMCQQuestion = (question: MCQQuestion) => {
    const userAnswer = userAnswers[currentQuestionIndex] as number

    return (
      <>
        <div className="mb-4">{question.question}</div>
        <RadioGroup value={userAnswer?.toString() || ""} onValueChange={handleMCQChange} disabled={isAnswerSubmitted}>
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-md ${
                isAnswerSubmitted && index === question.correctAnswer
                  ? "bg-green-50"
                  : isAnswerSubmitted && userAnswer === index && index !== question.correctAnswer
                    ? "bg-red-50"
                    : ""
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-grow">
                {option}
              </Label>
              {isAnswerSubmitted && index === question.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
              {isAnswerSubmitted && userAnswer === index && index !== question.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
          ))}
        </RadioGroup>
      </>
    )
  }

  const renderFillBlankQuestion = (question: FillBlankQuestion) => {
    const userAnswer = (userAnswers[currentQuestionIndex] as string[]) || []

    return (
      <>
        <div className="mb-4">{question.question}</div>
        <div className="space-y-4">
          {question.blanks.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={userAnswer[index] || ""}
                onChange={(e) => handleFillBlankChange(e.target.value, index)}
                disabled={isAnswerSubmitted}
                className={`max-w-xs ${
                  isAnswerSubmitted
                    ? userAnswer[index]?.toLowerCase().trim() === question.correctAnswers[index].toLowerCase().trim()
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : ""
                }`}
              />
              {isAnswerSubmitted && (
                <div className="flex items-center">
                  {userAnswer[index]?.toLowerCase().trim() === question.correctAnswers[index].toLowerCase().trim() ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                  )}
                  <span className="text-sm">
                    {userAnswer[index]?.toLowerCase().trim() !== question.correctAnswers[index].toLowerCase().trim() &&
                      `Correct: ${question.correctAnswers[index]}`}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    )
  }

  const renderErrorSpottingQuestion = (question: ErrorSpottingQuestion) => {
    const userAnswer = userAnswers[currentQuestionIndex] as number

    return (
      <>
        <div className="mb-4">{question.question}</div>
        <RadioGroup
          value={userAnswer?.toString() || ""}
          onValueChange={handleErrorSpottingChange}
          disabled={isAnswerSubmitted}
        >
          {question.parts.map((part, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-md ${
                isAnswerSubmitted && index === question.errorPart
                  ? "bg-green-50"
                  : isAnswerSubmitted && userAnswer === index && index !== question.errorPart
                    ? "bg-red-50"
                    : ""
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`part-${index}`} />
              <Label htmlFor={`part-${index}`} className="flex-grow">
                {part}
              </Label>
              {isAnswerSubmitted && index === question.errorPart && <CheckCircle className="h-5 w-5 text-green-600" />}
              {isAnswerSubmitted && userAnswer === index && index !== question.errorPart && (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
          ))}
          <div
            className={`flex items-center space-x-2 p-3 rounded-md ${
              isAnswerSubmitted && question.errorPart === -1
                ? "bg-green-50"
                : isAnswerSubmitted && userAnswer === -1 && question.errorPart !== -1
                  ? "bg-red-50"
                  : ""
            }`}
          >
            <RadioGroupItem value="-1" id="no-error" />
            <Label htmlFor="no-error" className="flex-grow">
              No error
            </Label>
            {isAnswerSubmitted && question.errorPart === -1 && <CheckCircle className="h-5 w-5 text-green-600" />}
            {isAnswerSubmitted && userAnswer === -1 && question.errorPart !== -1 && (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
          </div>
        </RadioGroup>
      </>
    )
  }

  const renderQuizCompletion = () => {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-700 mb-6">
          <Trophy className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
        <p className="text-lg mb-6">
          Your score: <span className="font-bold">{score}</span> out of{" "}
          <span className="font-bold">{questions.length}</span> ({percentage}%)
        </p>

        <div className="mb-8">
          <Progress value={percentage} className="h-3" />
        </div>

        <div className="space-y-4">
          <Button onClick={() => window.location.reload()} className="mr-4">
            Retry Quiz
          </Button>
          <Button variant="outline" asChild>
            <Link href="/practice/topic-quizzes">Back to Topic Quizzes</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-8">
            <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Loading quiz questions...</h3>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (quizCompleted) {
    return (
      <Card>
        <CardContent className="pt-6">{renderQuizCompletion()}</CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className={`text-sm font-medium ${timeLeft < 10 ? "text-red-500" : "text-muted-foreground"}`}>
            {timeLeft} seconds
          </span>
        </div>
      </div>

      <Progress value={(currentQuestionIndex / questions.length) * 100} className="h-2" />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {currentQuestion?.type === "mcq"
                ? "Multiple Choice Question"
                : currentQuestion?.type === "fill-blank"
                  ? "Fill in the Blanks"
                  : "Error Spotting"}
            </span>
            <Badge
              variant="outline"
              className={
                currentQuestion?.difficulty === "Easy"
                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                  : currentQuestion?.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    : "bg-red-100 text-red-800 hover:bg-red-100"
              }
            >
              {currentQuestion?.difficulty}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderQuestion()}

          {isAnswerSubmitted && (
            <Alert className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Explanation</AlertTitle>
              <AlertDescription>{currentQuestion?.explanation}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            disabled={currentQuestionIndex === 0}
            onClick={() => {
              setCurrentQuestionIndex((prev) => prev - 1)
              setIsAnswerSubmitted(false)
            }}
          >
            Previous
          </Button>
          <div>
            {!isAnswerSubmitted ? (
              <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

// This component would be imported from lucide-react in a real app
function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
