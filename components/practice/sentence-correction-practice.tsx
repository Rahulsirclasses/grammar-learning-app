"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, AlertTriangle, BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Difficulty = "easy" | "medium" | "hard"

interface SentenceCorrectionQuestion {
  id: number
  sentence: string
  error: string
  correction: string
  explanation: string
  difficulty: Difficulty
  topic: string
  subtopic?: string
}

// Sample questions array - shortened for brevity
const sampleSentenceCorrections: SentenceCorrectionQuestion[] = [
  // Subject-Verb Agreement (Questions 1-40)
  {
    id: 1,
    sentence: "The committee have decided to postpone the meeting.",
    error: "Subject-verb agreement",
    correction: "The committee has decided to postpone the meeting.",
    explanation:
      "The word 'committee' is a collective noun and takes a singular verb when considered as a single unit.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Collective Nouns",
  },
  {
    id: 2,
    sentence: "Each of the students have submitted their assignments.",
    error: "Subject-verb agreement",
    correction: "Each of the students has submitted their assignments.",
    explanation:
      "'Each' is singular and requires a singular verb 'has', regardless of the plural noun in the prepositional phrase.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Indefinite Pronouns",
  },
  {
    id: 3,
    sentence: "Neither the teacher nor the students was ready for the test.",
    error: "Subject-verb agreement",
    correction: "Neither the teacher nor the students were ready for the test.",
    explanation:
      "With 'neither...nor', the verb agrees with the subject closest to it. 'Students' is plural, so use 'were'.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 4,
    sentence: "The number of applicants have increased significantly.",
    error: "Subject-verb agreement",
    correction: "The number of applicants has increased significantly.",
    explanation: "'The number of' takes a singular verb, while 'a number of' takes a plural verb.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Number Expressions",
  },
  {
    id: 5,
    sentence: "There's many reasons why this project failed.",
    error: "Subject-verb agreement",
    correction: "There are many reasons why this project failed.",
    explanation:
      "In 'there' constructions, the verb agrees with the subject that follows. 'Reasons' is plural, so use 'are'.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Existential There",
  },
  {
    id: 6,
    sentence: "The data shows a clear trend in consumer behavior.",
    error: "Subject-verb agreement",
    correction: "The data show a clear trend in consumer behavior.",
    explanation: "'Data' is the plural form of 'datum' and requires a plural verb in formal writing.",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 7,
    sentence: "Every man and woman are responsible for their actions.",
    error: "Subject-verb agreement",
    correction: "Every man and woman is responsible for their actions.",
    explanation: "When 'every' precedes compound subjects joined by 'and', use a singular verb.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Compound Subjects",
  },
  {
    id: 8,
    sentence: "The team are playing well this season.",
    error: "Subject-verb agreement",
    correction: "The team is playing well this season.",
    explanation:
      "In American English, collective nouns like 'team' typically take singular verbs when acting as a unit.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Collective Nouns",
  },
  {
    id: 9,
    sentence: "Mathematics are my favorite subject.",
    error: "Subject-verb agreement",
    correction: "Mathematics is my favorite subject.",
    explanation: "Subjects ending in '-ics' like mathematics, physics, and economics are singular.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Academic Subjects",
  },
  {
    id: 10,
    sentence: "The scissors is on the table.",
    error: "Subject-verb agreement",
    correction: "The scissors are on the table.",
    explanation: "'Scissors' is always plural and requires a plural verb.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Plural-Only Nouns",
  },

  // Pronoun Usage (Questions 11-30)
  {
    id: 11,
    sentence: "Between you and I, the project might not be completed on time.",
    error: "Pronoun case",
    correction: "Between you and me, the project might not be completed on time.",
    explanation:
      "Prepositions like 'between' should be followed by pronouns in the objective case ('me'), not the subjective case ('I').",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Pronoun Case",
  },
  {
    id: 12,
    sentence: "The manager gave the assignment to John and I.",
    error: "Pronoun case",
    correction: "The manager gave the assignment to John and me.",
    explanation: "After prepositions, use the objective case 'me', not the subjective case 'I'.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Pronoun Case",
  },
  {
    id: 13,
    sentence: "Who did you give the book to?",
    error: "Pronoun case",
    correction: "Whom did you give the book to?",
    explanation: "Use 'whom' when the pronoun is the object of a verb or preposition.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Who vs Whom",
  },
  {
    id: 14,
    sentence: "Each student must bring their own lunch.",
    error: "Pronoun agreement",
    correction: "Each student must bring his or her own lunch.",
    explanation:
      "'Each' is singular, so it should be followed by singular pronouns. However, 'their' is increasingly accepted in modern usage.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Pronoun Agreement",
  },
  {
    id: 15,
    sentence: "The book which I borrowed it from the library is very interesting.",
    error: "Redundant pronoun",
    correction: "The book which I borrowed from the library is very interesting.",
    explanation: "The pronoun 'it' is redundant because 'which' already refers to 'the book'.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Relative Pronouns",
  },
  {
    id: 16,
    sentence: "Me and my friend went to the movies.",
    error: "Pronoun case",
    correction: "My friend and I went to the movies.",
    explanation:
      "Use the subjective case 'I' when the pronoun is the subject. Also, put the other person first as a matter of courtesy.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Pronoun Case",
  },
  {
    id: 17,
    sentence: "The company is proud of it's achievements.",
    error: "Possessive pronoun",
    correction: "The company is proud of its achievements.",
    explanation: "'Its' is the possessive form; 'it's' is a contraction for 'it is' or 'it has'.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Possessive Pronouns",
  },
  {
    id: 18,
    sentence: "This is the man which helped me yesterday.",
    error: "Relative pronoun",
    correction: "This is the man who helped me yesterday.",
    explanation: "Use 'who' for people and 'which' for things.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Relative Pronouns",
  },
  {
    id: 19,
    sentence: "The team celebrated their victory.",
    error: "Pronoun agreement",
    correction: "The team celebrated its victory.",
    explanation:
      "In American English, collective nouns like 'team' are typically treated as singular and take singular pronouns.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Collective Nouns",
  },
  {
    id: 20,
    sentence: "Everyone should do their best.",
    error: "Pronoun agreement",
    correction: "Everyone should do his or her best.",
    explanation:
      "'Everyone' is singular and traditionally takes singular pronouns, though 'their' is increasingly accepted.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Indefinite Pronouns",
  },

  // Verb Tenses (Questions 21-50)
  {
    id: 21,
    sentence: "I have went to the store yesterday.",
    error: "Incorrect past participle",
    correction: "I went to the store yesterday.",
    explanation: "Use simple past 'went' for completed actions with specific time references like 'yesterday'.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Past Tense",
  },
  {
    id: 22,
    sentence: "She has been working here since five years.",
    error: "Preposition with time",
    correction: "She has been working here for five years.",
    explanation: "Use 'for' with periods of time and 'since' with specific points in time.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Present Perfect",
  },
  {
    id: 23,
    sentence: "I wish I was taller.",
    error: "Subjunctive mood",
    correction: "I wish I were taller.",
    explanation:
      "After 'wish', use the subjunctive form 'were' for hypothetical situations, regardless of the subject.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Subjunctive Mood",
  },
  {
    id: 24,
    sentence: "The dog laid in the shade all afternoon.",
    error: "Verb usage",
    correction: "The dog lay in the shade all afternoon.",
    explanation: "The past tense of the intransitive verb 'to lie' (meaning to recline) is 'lay', not 'laid'.",
    difficulty: "hard",
    topic: "Tenses",
    subtopic: "Irregular Verbs",
  },
  {
    id: 25,
    sentence: "By the time you arrive, I will finish my work.",
    error: "Future perfect needed",
    correction: "By the time you arrive, I will have finished my work.",
    explanation: "Use future perfect for actions that will be completed before a future time.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Future Perfect",
  },
  {
    id: 26,
    sentence: "If I would have known, I would have come earlier.",
    error: "Conditional structure",
    correction: "If I had known, I would have come earlier.",
    explanation: "In third conditional sentences, use 'had + past participle' in the if-clause, not 'would have'.",
    difficulty: "hard",
    topic: "Tenses",
    subtopic: "Conditionals",
  },
  {
    id: 27,
    sentence: "I am knowing the answer to that question.",
    error: "Stative verb in progressive",
    correction: "I know the answer to that question.",
    explanation: "Stative verbs like 'know' are not typically used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 28,
    sentence: "She told me that she will call me tomorrow.",
    error: "Sequence of tenses",
    correction: "She told me that she would call me tomorrow.",
    explanation:
      "When the reporting verb is in the past tense, the verb in reported speech typically shifts from future to conditional.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Reported Speech",
  },
  {
    id: 29,
    sentence: "I have been living here since I am a child.",
    error: "Tense consistency",
    correction: "I have been living here since I was a child.",
    explanation: "Use past tense 'was' after 'since' when referring to a past state or condition.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Tense Consistency",
  },
  {
    id: 30,
    sentence: "The train leaves at 3 PM tomorrow.",
    error: "No error",
    correction: "The train leaves at 3 PM tomorrow.",
    explanation: "Present tense can be used for scheduled future events, especially with transportation.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Present for Future",
  },

  // Modifiers (Questions 31-60)
  {
    id: 31,
    sentence: "Walking down the street, the trees looked beautiful.",
    error: "Dangling modifier",
    correction: "Walking down the street, I thought the trees looked beautiful.",
    explanation: "The modifier 'walking down the street' should modify the subject performing the action.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Dangling Modifiers",
  },
  {
    id: 32,
    sentence: "She almost drove her kids to school every day.",
    error: "Misplaced modifier",
    correction: "She drove her kids to school almost every day.",
    explanation: "'Almost' should modify 'every day', not 'drove'.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Misplaced Modifiers",
  },
  {
    id: 33,
    sentence: "This is the most easiest question in the test.",
    error: "Double comparative",
    correction: "This is the easiest question in the test.",
    explanation:
      "Don't use both 'most' and the '-est' suffix. For one-syllable adjectives, use only the '-est' suffix.",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives and Superlatives",
  },
  {
    id: 34,
    sentence: "He runs more faster than his brother.",
    error: "Double comparative",
    correction: "He runs faster than his brother.",
    explanation: "Don't use 'more' with comparative forms ending in '-er'.",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives and Superlatives",
  },
  {
    id: 35,
    sentence: "She is the most unique person I know.",
    error: "Absolute adjective",
    correction: "She is a unique person I know.",
    explanation: "'Unique' is an absolute adjective and cannot be modified by 'most' or other degree words.",
    difficulty: "hard",
    topic: "Modifiers",
    subtopic: "Absolute Adjectives",
  },
  {
    id: 36,
    sentence: "The car in the garage that is red belongs to me.",
    error: "Ambiguous modifier",
    correction: "The red car in the garage belongs to me.",
    explanation: "Place modifiers close to what they modify to avoid ambiguity about whether the garage or car is red.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Ambiguous Modifiers",
  },
  {
    id: 37,
    sentence: "Having finished the project, the deadline was no longer a concern.",
    error: "Dangling modifier",
    correction: "Having finished the project, we were no longer concerned about the deadline.",
    explanation: "The modifier should have a clear subject that performs the action of finishing.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Dangling Modifiers",
  },
  {
    id: 38,
    sentence: "She only ate vegetables for dinner.",
    error: "Misplaced modifier",
    correction: "She ate only vegetables for dinner.",
    explanation: "'Only' should be placed directly before what it modifies ('vegetables').",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Misplaced Modifiers",
  },
  {
    id: 39,
    sentence: "Between the two options, this one is best.",
    error: "Comparative vs superlative",
    correction: "Between the two options, this one is better.",
    explanation: "Use comparative forms ('better') when comparing two items, superlative ('best') for three or more.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Comparatives and Superlatives",
  },
  {
    id: 40,
    sentence: "The weather today is more cold than yesterday.",
    error: "Incorrect comparative form",
    correction: "The weather today is colder than yesterday.",
    explanation: "For one-syllable adjectives like 'cold', use '-er' not 'more'.",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives and Superlatives",
  },

  // Parallelism (Questions 41-60)
  {
    id: 41,
    sentence: "She likes reading, writing, and to paint.",
    error: "Parallel structure",
    correction: "She likes reading, writing, and painting.",
    explanation: "Items in a series should have the same grammatical form (all gerunds in this case).",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Series",
  },
  {
    id: 42,
    sentence: "The job requires patience, dedication, and being creative.",
    error: "Parallel structure",
    correction: "The job requires patience, dedication, and creativity.",
    explanation: "All items in the series should be nouns.",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Series",
  },
  {
    id: 43,
    sentence: "He not only plays tennis but also enjoys swimming.",
    error: "Parallel structure with correlative conjunctions",
    correction: "He not only plays tennis but also swims.",
    explanation: "The structures after 'not only' and 'but also' should be parallel (both verbs).",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 44,
    sentence: "The presentation was both informative and it was engaging.",
    error: "Parallel structure",
    correction: "The presentation was both informative and engaging.",
    explanation: "After 'both...and', use parallel structures (both adjectives).",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 45,
    sentence: "She prefers walking to run.",
    error: "Parallel structure",
    correction: "She prefers walking to running.",
    explanation: "After 'prefer...to', use parallel forms (both gerunds).",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Comparisons",
  },
  {
    id: 46,
    sentence: "The manager told us to work harder and that we should be more efficient.",
    error: "Parallel structure",
    correction: "The manager told us to work harder and to be more efficient.",
    explanation: "Use parallel infinitive structures after 'told us'.",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Infinitives",
  },
  {
    id: 47,
    sentence: "Either you can come with us or staying home.",
    error: "Parallel structure",
    correction: "Either you can come with us or you can stay home.",
    explanation: "The structures after 'either' and 'or' should be parallel (both clauses).",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 48,
    sentence: "The course covers grammar, vocabulary, and how to pronounce words.",
    error: "Parallel structure",
    correction: "The course covers grammar, vocabulary, and pronunciation.",
    explanation: "All items in the series should be nouns.",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Series",
  },
  {
    id: 49,
    sentence: "She is talented, hardworking, and has dedication.",
    error: "Parallel structure",
    correction: "She is talented, hardworking, and dedicated.",
    explanation: "All items should be adjectives to maintain parallel structure.",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Series",
  },
  {
    id: 50,
    sentence: "The new policy will reduce costs and improving efficiency.",
    error: "Parallel structure",
    correction: "The new policy will reduce costs and improve efficiency.",
    explanation: "Both verbs should be in the same form (base form after 'will').",
    difficulty: "easy",
    topic: "Parallelism",
    subtopic: "Compound Predicates",
  },

  // Prepositions (Questions 51-70)
  {
    id: 51,
    sentence: "She is good in mathematics.",
    error: "Wrong preposition",
    correction: "She is good at mathematics.",
    explanation: "Use 'good at' for skills and abilities.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 52,
    sentence: "The meeting is on Monday morning.",
    error: "No error",
    correction: "The meeting is on Monday morning.",
    explanation: "Use 'on' with days and specific dates.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Time Prepositions",
  },
  {
    id: 53,
    sentence: "She arrived to the airport early.",
    error: "Wrong preposition",
    correction: "She arrived at the airport early.",
    explanation: "Use 'arrive at' for specific places and 'arrive in' for cities or countries.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Verb + Preposition",
  },
  {
    id: 54,
    sentence: "He is interested about learning new languages.",
    error: "Wrong preposition",
    correction: "He is interested in learning new languages.",
    explanation: "Use 'interested in', not 'interested about'.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 55,
    sentence: "The book is laying on the table.",
    error: "Wrong verb",
    correction: "The book is lying on the table.",
    explanation: "Use 'lying' (from 'lie') for position, 'laying' (from 'lay') requires a direct object.",
    difficulty: "hard",
    topic: "Prepositions",
    subtopic: "Lie vs Lay",
  },
  {
    id: 56,
    sentence: "She has been waiting since two hours.",
    error: "Wrong preposition",
    correction: "She has been waiting for two hours.",
    explanation: "Use 'for' with periods of time and 'since' with specific points in time.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Time Prepositions",
  },
  {
    id: 57,
    sentence: "The cat jumped off of the table.",
    error: "Redundant preposition",
    correction: "The cat jumped off the table.",
    explanation: "'Off of' is redundant; use just 'off'.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Redundant Prepositions",
  },
  {
    id: 58,
    sentence: "She is married with a doctor.",
    error: "Wrong preposition",
    correction: "She is married to a doctor.",
    explanation: "Use 'married to', not 'married with'.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 59,
    sentence: "The difference among the two proposals is significant.",
    error: "Wrong preposition",
    correction: "The difference between the two proposals is significant.",
    explanation: "Use 'between' for two items and 'among' for three or more.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Between vs Among",
  },
  {
    id: 60,
    sentence: "He graduated from college on 2020.",
    error: "Wrong preposition",
    correction: "He graduated from college in 2020.",
    explanation: "Use 'in' with years, months, and seasons.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Time Prepositions",
  },

  // Articles and Determiners (Questions 61-80)
  {
    id: 61,
    sentence: "She is a honest person.",
    error: "Wrong article",
    correction: "She is an honest person.",
    explanation: "Use 'an' before words that begin with a vowel sound, even if they start with a consonant letter.",
    difficulty: "easy",
    topic: "Articles",
    subtopic: "A vs An",
  },
  {
    id: 62,
    sentence: "The life is beautiful.",
    error: "Unnecessary article",
    correction: "Life is beautiful.",
    explanation: "Don't use 'the' with abstract nouns when speaking generally.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Definite Article",
  },
  {
    id: 63,
    sentence: "I need an advice from you.",
    error: "Wrong article",
    correction: "I need advice from you.",
    explanation: "'Advice' is uncountable and doesn't take an article.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Uncountable Nouns",
  },
  {
    id: 64,
    sentence: "She plays piano very well.",
    error: "Missing article",
    correction: "She plays the piano very well.",
    explanation: "Use 'the' with musical instruments.",
    difficulty: "easy",
    topic: "Articles",
    subtopic: "Musical Instruments",
  },
  {
    id: 65,
    sentence: "He is studying the medicine at university.",
    error: "Unnecessary article",
    correction: "He is studying medicine at university.",
    explanation: "Don't use 'the' with academic subjects.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Academic Subjects",
  },
  {
    id: 66,
    sentence: "The both students passed the exam.",
    error: "Wrong determiner",
    correction: "Both students passed the exam.",
    explanation: "Don't use 'the' with 'both'.",
    difficulty: "easy",
    topic: "Articles",
    subtopic: "Determiners",
  },
  {
    id: 67,
    sentence: "I have a little time to finish this.",
    error: "No error",
    correction: "I have a little time to finish this.",
    explanation: "'A little' means some (positive), while 'little' means not much (negative).",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Quantifiers",
  },
  {
    id: 68,
    sentence: "She went to the church every Sunday.",
    error: "Unnecessary article",
    correction: "She went to church every Sunday.",
    explanation: "Don't use 'the' with places when referring to their primary function.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Places",
  },
  {
    id: 69,
    sentence: "The Mount Everest is the highest mountain.",
    error: "Unnecessary article",
    correction: "Mount Everest is the highest mountain.",
    explanation: "Don't use 'the' with individual mountain names.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Geographical Names",
  },
  {
    id: 70,
    sentence: "I bought a furniture for my apartment.",
    error: "Wrong article",
    correction: "I bought furniture for my apartment.",
    explanation: "'Furniture' is uncountable and doesn't take 'a' or 'an'.",
    difficulty: "medium",
    topic: "Articles",
    subtopic: "Uncountable Nouns",
  },

  // Conjunctions (Questions 71-90)
  {
    id: 71,
    sentence: "Neither the students or the teacher was able to solve the problem.",
    error: "Correlative conjunctions",
    correction: "Neither the students nor the teacher was able to solve the problem.",
    explanation: "The correlative conjunction pair is 'neither...nor', not 'neither...or'.",
    difficulty: "easy",
    topic: "Conjunctions",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 72,
    sentence: "Although it was raining, but we went for a walk.",
    error: "Double conjunction",
    correction: "Although it was raining, we went for a walk.",
    explanation: "Don't use 'but' with 'although'. Use one or the other.",
    difficulty: "easy",
    topic: "Conjunctions",
    subtopic: "Subordinating Conjunctions",
  },
  {
    id: 73,
    sentence: "Because of he was sick, he couldn't attend the meeting.",
    error: "Wrong conjunction",
    correction: "Because he was sick, he couldn't attend the meeting.",
    explanation: "Use 'because' before a clause, 'because of' before a noun phrase.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Because vs Because of",
  },
  {
    id: 74,
    sentence: "Not only she is smart, but she is also hardworking.",
    error: "Word order",
    correction: "Not only is she smart, but she is also hardworking.",
    explanation: "After 'not only' at the beginning of a sentence, use inverted word order.",
    difficulty: "hard",
    topic: "Conjunctions",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 75,
    sentence: "Despite of the rain, we enjoyed our picnic.",
    error: "Wrong preposition",
    correction: "Despite the rain, we enjoyed our picnic.",
    explanation: "Use 'despite', not 'despite of'. 'In spite of' is also correct.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Concessive Conjunctions",
  },
  {
    id: 76,
    sentence: "She studied hard so that to pass the exam.",
    error: "Wrong conjunction structure",
    correction: "She studied hard so that she could pass the exam.",
    explanation: "'So that' is followed by a clause, not an infinitive.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Purpose Conjunctions",
  },
  {
    id: 77,
    sentence: "Either you come with us, or you stay home.",
    error: "No error",
    correction: "Either you come with us, or you stay home.",
    explanation: "This sentence correctly uses the correlative conjunction 'either...or'.",
    difficulty: "easy",
    topic: "Conjunctions",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 78,
    sentence: "Since you are here, so let's start the meeting.",
    error: "Double conjunction",
    correction: "Since you are here, let's start the meeting.",
    explanation: "Don't use 'so' with 'since' when 'since' means 'because'.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Subordinating Conjunctions",
  },
  {
    id: 79,
    sentence: "The reason why he left is because he was unhappy.",
    error: "Redundant expression",
    correction: "The reason he left is that he was unhappy.",
    explanation: "Use 'the reason...is that' or 'he left because', but not both 'reason' and 'because'.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Reason Clauses",
  },
  {
    id: 80,
    sentence: "Unless you don't study, you won't pass the exam.",
    error: "Double negative",
    correction: "Unless you study, you won't pass the exam.",
    explanation: "'Unless' already contains a negative meaning, so don't use 'don't' with it.",
    difficulty: "medium",
    topic: "Conjunctions",
    subtopic: "Conditional Conjunctions",
  },

  // Word Choice and Idioms (Questions 81-100)
  {
    id: 81,
    sentence: "I could care less about what he thinks.",
    error: "Wrong idiom",
    correction: "I couldn't care less about what he thinks.",
    explanation:
      "The correct idiom is 'couldn't care less', meaning you care so little that you couldn't care any less.",
    difficulty: "medium",
    topic: "Idioms",
    subtopic: "Common Idioms",
  },
  {
    id: 82,
    sentence: "She has a photogenic memory.",
    error: "Wrong word",
    correction: "She has a photographic memory.",
    explanation: "'Photographic memory' is the correct term, not 'photogenic memory'.",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Commonly Confused Words",
  },
  {
    id: 83,
    sentence: "The effect of the new policy will effect everyone.",
    error: "Wrong word",
    correction: "The effect of the new policy will affect everyone.",
    explanation: "'Effect' is usually a noun, 'affect' is usually a verb.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Effect vs Affect",
  },
  {
    id: 84,
    sentence: "I am very interested to learn more about this topic.",
    error: "Wrong preposition",
    correction: "I am very interested in learning more about this topic.",
    explanation: "Use 'interested in' + gerund, not 'interested to' + infinitive.",
    difficulty: "medium",
    topic: "Idioms",
    subtopic: "Preposition + Gerund",
  },
  {
    id: 85,
    sentence: "For all intensive purposes, the project is complete.",
    error: "Wrong idiom",
    correction: "For all intents and purposes, the project is complete.",
    explanation: "The correct idiom is 'for all intents and purposes', not 'intensive purposes'.",
    difficulty: "medium",
    topic: "Idioms",
    subtopic: "Commonly Misheard Idioms",
  },
  {
    id: 86,
    sentence: "She is very conscious about her appearance.",
    error: "Wrong preposition",
    correction: "She is very conscious of her appearance.",
    explanation: "Use 'conscious of', not 'conscious about'.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 87,
    sentence: "The data is very reliable.",
    error: "Subject-verb agreement",
    correction: "The data are very reliable.",
    explanation: "'Data' is plural in formal writing and takes plural verbs.",
    difficulty: "hard",
    topic: "Word Choice",
    subtopic: "Latin Plurals",
  },
  {
    id: 88,
    sentence: "I am anxious to meet you.",
    error: "Wrong word choice",
    correction: "I am eager to meet you.",
    explanation: "'Anxious' implies worry or nervousness; 'eager' expresses positive anticipation.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Anxious vs Eager",
  },
  {
    id: 89,
    sentence: "The amount of people at the concert was surprising.",
    error: "Wrong word",
    correction: "The number of people at the concert was surprising.",
    explanation: "Use 'number' with countable nouns and 'amount' with uncountable nouns.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Number vs Amount",
  },
  {
    id: 90,
    sentence: "She is older then me.",
    error: "Wrong word",
    correction: "She is older than me.",
    explanation: "'Than' is used for comparisons; 'then' refers to time.",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Than vs Then",
  },

  // Punctuation (Questions 91-110)
  {
    id: 91,
    sentence: "Its a beautiful day today.",
    error: "Missing apostrophe",
    correction: "It's a beautiful day today.",
    explanation: "'It's' is a contraction for 'it is'; 'its' is possessive.",
    difficulty: "easy",
    topic: "Punctuation",
    subtopic: "Apostrophes",
  },
  {
    id: 92,
    sentence: "The students books were left in the classroom.",
    error: "Missing apostrophe",
    correction: "The students' books were left in the classroom.",
    explanation: "For plural nouns ending in 's', add only an apostrophe for possession.",
    difficulty: "easy",
    topic: "Punctuation",
    subtopic: "Apostrophes",
  },
  {
    id: 93,
    sentence: "She said, 'I will be there at 3 PM.'",
    error: "No error",
    correction: "She said, 'I will be there at 3 PM.'",
    explanation: "This sentence correctly uses quotation marks and punctuation.",
    difficulty: "easy",
    topic: "Punctuation",
    subtopic: "Quotation Marks",
  },
  {
    id: 94,
    sentence: "The meeting which was scheduled for today has been postponed.",
    error: "Missing commas",
    correction: "The meeting, which was scheduled for today, has been postponed.",
    explanation: "Non-restrictive relative clauses should be set off with commas.",
    difficulty: "medium",
    topic: "Punctuation",
    subtopic: "Commas",
  },
  {
    id: 95,
    sentence: "I need to buy: milk, bread, and eggs.",
    error: "Wrong punctuation",
    correction: "I need to buy milk, bread, and eggs.",
    explanation: "Don't use a colon before a simple list that follows a verb.",
    difficulty: "medium",
    topic: "Punctuation",
    subtopic: "Colons",
  },
  {
    id: 96,
    sentence: "However; the results were not what we expected.",
    error: "Wrong punctuation",
    correction: "However, the results were not what we expected.",
    explanation: "Use a comma, not a semicolon, after transitional words like 'however'.",
    difficulty: "medium",
    topic: "Punctuation",
    subtopic: "Semicolons",
  },
  {
    id: 97,
    sentence: "She asked, 'What time is it?'.",
    error: "Double punctuation",
    correction: "She asked, 'What time is it?'",
    explanation: "Don't use a period after a question mark inside quotation marks.",
    difficulty: "medium",
    topic: "Punctuation",
    subtopic: "Quotation Marks",
  },
  {
    id: 98,
    sentence: "The company's profits increased by 15% this year.",
    error: "No error",
    correction: "The company's profits increased by 15% this year.",
    explanation: "This sentence correctly uses the apostrophe for possession.",
    difficulty: "easy",
    topic: "Punctuation",
    subtopic: "Apostrophes",
  },
  {
    id: 99,
    sentence: "Dear Sir or Madam;",
    error: "Wrong punctuation",
    correction: "Dear Sir or Madam:",
    explanation: "Use a colon after formal salutations in business letters.",
    difficulty: "easy",
    topic: "Punctuation",
    subtopic: "Colons",
  },
  {
    id: 100,
    sentence: "The book that I borrowed from the library, is very interesting.",
    error: "Unnecessary comma",
    correction: "The book that I borrowed from the library is very interesting.",
    explanation: "Don't use a comma before a restrictive relative clause introduced by 'that'.",
    difficulty: "medium",
    topic: "Punctuation",
    subtopic: "Commas",
  },

  // Advanced Grammar (Questions 101-120)
  {
    id: 101,
    sentence: "She doesn't hardly ever go to the movies.",
    error: "Double negative",
    correction: "She hardly ever goes to the movies.",
    explanation: "'Doesn't' and 'hardly' both express negative ideas, creating a double negative.",
    difficulty: "medium",
    topic: "Negation",
    subtopic: "Double Negatives",
  },
  {
    id: 102,
    sentence: "The reason is because we don't have enough time.",
    error: "Redundant expression",
    correction: "The reason is that we don't have enough time.",
    explanation: "Use 'the reason is that' or just 'because', but not both 'reason' and 'because'.",
    difficulty: "medium",
    topic: "Redundancy",
    subtopic: "Reason Clauses",
  },
  {
    id: 103,
    sentence: "If I was you, I would accept the offer.",
    error: "Subjunctive mood",
    correction: "If I were you, I would accept the offer.",
    explanation: "Use 'were' in hypothetical conditions with 'if', regardless of the subject.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Subjunctive Mood",
  },
  {
    id: 104,
    sentence: "The house was built by John and I.",
    error: "Pronoun case",
    correction: "The house was built by John and me.",
    explanation: "After prepositions like 'by', use the objective case 'me'.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Pronoun Case",
  },
  {
    id: 105,
    sentence: "Irregardless of the weather, we will go hiking.",
    error: "Non-standard word",
    correction: "Regardless of the weather, we will go hiking.",
    explanation: "'Irregardless' is non-standard; use 'regardless'.",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Non-standard Words",
  },
  {
    id: 106,
    sentence: "She is one of those people who always complains.",
    error: "Subject-verb agreement",
    correction: "She is one of those people who always complain.",
    explanation: "In 'one of those who' constructions, the verb agrees with the plural noun ('people').",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Complex Constructions",
  },
  {
    id: 107,
    sentence: "The media is biased in their reporting.",
    error: "Subject-verb agreement",
    correction: "The media are biased in their reporting.",
    explanation: "'Media' is plural and requires plural verbs and pronouns.",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 108,
    sentence: "I seen that movie last week.",
    error: "Wrong verb form",
    correction: "I saw that movie last week.",
    explanation: "'Seen' is a past participle and needs a helping verb; 'saw' is the simple past.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Past Tense",
  },
  {
    id: 109,
    sentence: "Where is the meeting at?",
    error: "Unnecessary preposition",
    correction: "Where is the meeting?",
    explanation: "Don't end questions with unnecessary prepositions.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Unnecessary Prepositions",
  },
  {
    id: 110,
    sentence: "I should of studied harder for the exam.",
    error: "Wrong auxiliary",
    correction: "I should have studied harder for the exam.",
    explanation: "Use 'should have', not 'should of'. The contraction 'should've' sounds like 'should of'.",
    difficulty: "easy",
    topic: "Auxiliaries",
    subtopic: "Modal Auxiliaries",
  },

  // Mixed Advanced Topics (Questions 111-200)
  {
    id: 111,
    sentence: "The criteria for admission is very strict.",
    error: "Subject-verb agreement",
    correction: "The criteria for admission are very strict.",
    explanation: "'Criteria' is plural; the singular is 'criterion'.",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 112,
    sentence: "She graduated college last year.",
    error: "Missing preposition",
    correction: "She graduated from college last year.",
    explanation: "Use 'graduate from' an institution.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Verb + Preposition",
  },
  {
    id: 113,
    sentence: "The phenomena is quite interesting.",
    error: "Subject-verb agreement",
    correction: "The phenomena are quite interesting.",
    explanation: "'Phenomena' is plural; the singular is 'phenomenon'.",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 114,
    sentence: "I am doing good in my studies.",
    error: "Wrong word",
    correction: "I am doing well in my studies.",
    explanation: "Use 'well' (adverb) to describe how you're doing, not 'good' (adjective).",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Good vs Well",
  },
  {
    id: 115,
    sentence: "Can I lend your pen?",
    error: "Wrong verb",
    correction: "Can I borrow your pen?",
    explanation: "You 'borrow' from someone; you 'lend' to someone.",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Borrow vs Lend",
  },
  {
    id: 116,
    sentence: "The alarm clock rang at 6 AM.",
    error: "Wrong verb",
    correction: "The alarm clock went off at 6 AM.",
    explanation: "Alarm clocks 'go off' or 'sound'; bells and phones 'ring'.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Verb Usage",
  },
  {
    id: 117,
    sentence: "I have less friends than my sister.",
    error: "Wrong word",
    correction: "I have fewer friends than my sister.",
    explanation: "Use 'fewer' with countable nouns and 'less' with uncountable nouns.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Fewer vs Less",
  },
  {
    id: 118,
    sentence: "The teacher learned us about grammar.",
    error: "Wrong verb",
    correction: "The teacher taught us about grammar.",
    explanation: "Teachers 'teach' students; students 'learn' from teachers.",
    difficulty: "easy",
    topic: "Word Choice",
    subtopic: "Teach vs Learn",
  },
  {
    id: 119,
    sentence: "I am very much interested in this job.",
    error: "Redundant expression",
    correction: "I am very interested in this job.",
    explanation: "Don't use 'much' with 'very' before adjectives.",
    difficulty: "medium",
    topic: "Redundancy",
    subtopic: "Intensifiers",
  },
  {
    id: 120,
    sentence: "She is more prettier than her sister.",
    error: "Double comparative",
    correction: "She is prettier than her sister.",
    explanation: "Don't use 'more' with comparative adjectives ending in '-er'.",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives",
  },
  {
    id: 121,
    sentence: "The house needs painted.",
    error: "Missing auxiliary",
    correction: "The house needs to be painted.",
    explanation: "Use 'needs to be + past participle' for passive constructions.",
    difficulty: "medium",
    topic: "Voice",
    subtopic: "Passive Voice",
  },
  {
    id: 122,
    sentence: "I am used to wake up early.",
    error: "Wrong form after 'used to'",
    correction: "I am used to waking up early.",
    explanation: "'Be used to' is followed by a gerund; 'used to' (past habit) is followed by base form.",
    difficulty: "medium",
    topic: "Idioms",
    subtopic: "Used To vs Be Used To",
  },
  {
    id: 123,
    sentence: "The meeting will be held in next Monday.",
    error: "Unnecessary preposition",
    correction: "The meeting will be held next Monday.",
    explanation: "Don't use 'in' before 'next' with time expressions.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Time Prepositions",
  },
  {
    id: 124,
    sentence: "She is senior than me in the company.",
    error: "Wrong comparative form",
    correction: "She is senior to me in the company.",
    explanation: "Use 'senior to', not 'senior than'.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 125,
    sentence: "I prefer tea than coffee.",
    error: "Wrong preposition",
    correction: "I prefer tea to coffee.",
    explanation: "Use 'prefer...to', not 'prefer...than'.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Prefer To",
  },
  {
    id: 126,
    sentence: "She is working hardly to finish the project.",
    error: "Wrong adverb",
    correction: "She is working hard to finish the project.",
    explanation: "'Hard' is both an adjective and adverb; 'hardly' means 'barely'.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Hard vs Hardly",
  },
  {
    id: 127,
    sentence: "The news are very disturbing.",
    error: "Subject-verb agreement",
    correction: "The news is very disturbing.",
    explanation: "'News' is uncountable and takes singular verbs.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Uncountable Nouns",
  },
  {
    id: 128,
    sentence: "I am going to lay down for a while.",
    error: "Wrong verb",
    correction: "I am going to lie down for a while.",
    explanation: "Use 'lie down' (intransitive); 'lay' requires a direct object.",
    difficulty: "hard",
    topic: "Word Choice",
    subtopic: "Lie vs Lay",
  },
  {
    id: 129,
    sentence: "The police is investigating the crime.",
    error: "Subject-verb agreement",
    correction: "The police are investigating the crime.",
    explanation: "'Police' is always plural and takes plural verbs.",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Collective Nouns",
  },
  {
    id: 130,
    sentence: "I have been living here since five years.",
    error: "Wrong preposition",
    correction: "I have been living here for five years.",
    explanation: "Use 'for' with periods of time and 'since' with specific points in time.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "For vs Since",
  },
  {
    id: 131,
    sentence: "She is elder than her brother.",
    error: "Wrong comparative",
    correction: "She is older than her brother.",
    explanation: "Use 'older' for age comparisons; 'elder' is used as a noun or with family relationships.",
    difficulty: "medium",
    topic: "Word Choice",
    subtopic: "Elder vs Older",
  },
  {
    id: 132,
    sentence: "I am going to the market for buying vegetables.",
    error: "Wrong preposition",
    correction: "I am going to the market to buy vegetables.",
    explanation: "Use infinitive 'to buy' to express purpose, not 'for buying'.",
    difficulty: "medium",
    topic: "Infinitives",
    subtopic: "Purpose",
  },
  {
    id: 133,
    sentence: "She is afraid from dogs.",
    error: "Wrong preposition",
    correction: "She is afraid of dogs.",
    explanation: "Use 'afraid of', not 'afraid from'.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Adjective + Preposition",
  },
  {
    id: 134,
    sentence: "I am going to home now.",
    error: "Unnecessary preposition",
    correction: "I am going home now.",
    explanation: "'Home' is an adverb when it means 'to one's home'; don't use 'to'.",
    difficulty: "easy",
    topic: "Prepositions",
    subtopic: "Home as Adverb",
  },
  {
    id: 135,
    sentence: "She is very much beautiful.",
    error: "Wrong intensifier",
    correction: "She is very beautiful.",
    explanation: "Use 'very' with adjectives, not 'very much'.",
    difficulty: "easy",
    topic: "Intensifiers",
    subtopic: "Very vs Very Much",
  },
  {
    id: 136,
    sentence: "I am agree with your opinion.",
    error: "Wrong verb form",
    correction: "I agree with your opinion.",
    explanation: "'Agree' is a verb, not an adjective; don't use 'am' with it.",
    difficulty: "easy",
    topic: "Verb Forms",
    subtopic: "Stative Verbs",
  },
  {
    id: 137,
    sentence: "She is having a car.",
    error: "Wrong tense",
    correction: "She has a car.",
    explanation: "'Have' meaning 'possess' is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 138,
    sentence: "I am knowing the answer.",
    error: "Wrong tense",
    correction: "I know the answer.",
    explanation: "'Know' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 139,
    sentence: "She is resembling her mother.",
    error: "Wrong tense",
    correction: "She resembles her mother.",
    explanation: "'Resemble' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 140,
    sentence: "I am understanding the lesson now.",
    error: "Wrong tense",
    correction: "I understand the lesson now.",
    explanation: "'Understand' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 141,
    sentence: "The book is belonging to me.",
    error: "Wrong tense",
    correction: "The book belongs to me.",
    explanation: "'Belong' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 142,
    sentence: "I am needing your help.",
    error: "Wrong tense",
    correction: "I need your help.",
    explanation: "'Need' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 143,
    sentence: "She is seeming tired today.",
    error: "Wrong tense",
    correction: "She seems tired today.",
    explanation: "'Seem' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 144,
    sentence: "I am wanting to go home.",
    error: "Wrong tense",
    correction: "I want to go home.",
    explanation: "'Want' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 145,
    sentence: "The food is tasting delicious.",
    error: "Wrong tense",
    correction: "The food tastes delicious.",
    explanation: "When 'taste' means 'have a flavor', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 146,
    sentence: "I am believing in hard work.",
    error: "Wrong tense",
    correction: "I believe in hard work.",
    explanation: "'Believe' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 147,
    sentence: "She is owning a beautiful house.",
    error: "Wrong tense",
    correction: "She owns a beautiful house.",
    explanation: "'Own' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 148,
    sentence: "I am loving this song.",
    error: "Wrong tense",
    correction: "I love this song.",
    explanation: "'Love' meaning 'like very much' is stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 149,
    sentence: "The shirt is fitting me perfectly.",
    error: "Wrong tense",
    correction: "The shirt fits me perfectly.",
    explanation: "When 'fit' means 'be the right size', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 150,
    sentence: "I am preferring tea to coffee.",
    error: "Wrong tense",
    correction: "I prefer tea to coffee.",
    explanation: "'Prefer' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 151,
    sentence: "The house is costing too much.",
    error: "Wrong tense",
    correction: "The house costs too much.",
    explanation: "When 'cost' means 'have a price', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 152,
    sentence: "I am doubting his sincerity.",
    error: "Wrong tense",
    correction: "I doubt his sincerity.",
    explanation: "'Doubt' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 153,
    sentence: "She is hating her job.",
    error: "Wrong tense",
    correction: "She hates her job.",
    explanation: "'Hate' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 154,
    sentence: "I am forgetting his name.",
    error: "Wrong tense",
    correction: "I forget his name.",
    explanation: "'Forget' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 155,
    sentence: "The bag is weighing five kilograms.",
    error: "Wrong tense",
    correction: "The bag weighs five kilograms.",
    explanation: "When 'weigh' means 'have weight', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 156,
    sentence: "I am recognizing that voice.",
    error: "Wrong tense",
    correction: "I recognize that voice.",
    explanation: "'Recognize' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 157,
    sentence: "She is realizing her mistake.",
    error: "Wrong tense",
    correction: "She realizes her mistake.",
    explanation: "'Realize' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 158,
    sentence: "The room is containing fifty people.",
    error: "Wrong tense",
    correction: "The room contains fifty people.",
    explanation: "When 'contain' means 'hold' or 'have inside', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 159,
    sentence: "I am supposing you are right.",
    error: "Wrong tense",
    correction: "I suppose you are right.",
    explanation: "'Suppose' meaning 'think' is stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 160,
    sentence: "She is depending on her parents for support.",
    error: "Wrong tense",
    correction: "She depends on her parents for support.",
    explanation: "'Depend' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 161,
    sentence: "The story is sounding interesting.",
    error: "Wrong tense",
    correction: "The story sounds interesting.",
    explanation: "When 'sound' means 'seem', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 162,
    sentence: "I am meaning to call you.",
    error: "Wrong tense",
    correction: "I mean to call you.",
    explanation: "'Mean' meaning 'intend' is stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 163,
    sentence: "The milk is smelling sour.",
    error: "Wrong tense",
    correction: "The milk smells sour.",
    explanation: "When 'smell' means 'have an odor', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 164,
    sentence: "I am minding the noise.",
    error: "Wrong tense",
    correction: "I mind the noise.",
    explanation: "'Mind' meaning 'be bothered by' is stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 165,
    sentence: "She is appearing confident.",
    error: "Wrong tense",
    correction: "She appears confident.",
    explanation: "When 'appear' means 'seem', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 166,
    sentence: "The solution is involving complex calculations.",
    error: "Wrong tense",
    correction: "The solution involves complex calculations.",
    explanation: "When 'involve' means 'include' or 'require', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 167,
    sentence: "I am disagreeing with your proposal.",
    error: "Wrong tense",
    correction: "I disagree with your proposal.",
    explanation: "'Disagree' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 168,
    sentence: "The book is consisting of ten chapters.",
    error: "Wrong tense",
    correction: "The book consists of ten chapters.",
    explanation: "'Consist' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 169,
    sentence: "I am lacking confidence in this area.",
    error: "Wrong tense",
    correction: "I lack confidence in this area.",
    explanation: "'Lack' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 170,
    sentence: "The evidence is suggesting otherwise.",
    error: "Wrong tense",
    correction: "The evidence suggests otherwise.",
    explanation: "When 'suggest' means 'indicate', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 171,
    sentence: "I am remembering our conversation.",
    error: "Wrong tense",
    correction: "I remember our conversation.",
    explanation: "'Remember' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 172,
    sentence: "She is deserving better treatment.",
    error: "Wrong tense",
    correction: "She deserves better treatment.",
    explanation: "'Deserve' is a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 173,
    sentence: "The problem is concerning everyone.",
    error: "Wrong tense",
    correction: "The problem concerns everyone.",
    explanation: "When 'concern' means 'worry' or 'affect', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 174,
    sentence: "I am imagining a better future.",
    error: "Wrong tense",
    correction: "I imagine a better future.",
    explanation: "'Imagine' is typically a stative verb and is not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 175,
    sentence: "The data is indicating a trend.",
    error: "Wrong tense",
    correction: "The data indicates a trend.",
    explanation: "When 'indicate' means 'show' or 'suggest', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 176,
    sentence: "I am hoping for the best.",
    error: "No error",
    correction: "I am hoping for the best.",
    explanation: "'Hope' can be used in progressive tenses when expressing ongoing hope.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 177,
    sentence: "She is thinking about the problem.",
    error: "No error",
    correction: "She is thinking about the problem.",
    explanation: "'Think' can be progressive when it means 'consider' or 'ponder'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 178,
    sentence: "I am feeling much better today.",
    error: "No error",
    correction: "I am feeling much better today.",
    explanation: "'Feel' can be progressive when referring to physical or emotional states that are changing.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 179,
    sentence: "The chef is tasting the soup.",
    error: "No error",
    correction: "The chef is tasting the soup.",
    explanation: "'Taste' can be progressive when it means 'sample' or 'test the flavor'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 180,
    sentence: "We are having dinner at 7 PM.",
    error: "No error",
    correction: "We are having dinner at 7 PM.",
    explanation: "'Have' can be progressive when it means 'eat' or refers to activities.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 181,
    sentence: "The doctor is seeing patients today.",
    error: "No error",
    correction: "The doctor is seeing patients today.",
    explanation: "'See' can be progressive when it means 'meet with' or 'visit'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 182,
    sentence: "I am looking at the painting.",
    error: "No error",
    correction: "I am looking at the painting.",
    explanation: "'Look' is dynamic and can be used in progressive tenses.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 183,
    sentence: "She is smelling the flowers.",
    error: "No error",
    correction: "She is smelling the flowers.",
    explanation: "'Smell' can be progressive when it means 'sniff' or 'inhale the scent'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 184,
    sentence: "The company is being investigated.",
    error: "No error",
    correction: "The company is being investigated.",
    explanation: "'Be' can be progressive in passive constructions.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Passive Progressive",
  },
  {
    id: 185,
    sentence: "He is being very helpful today.",
    error: "No error",
    correction: "He is being very helpful today.",
    explanation: "'Be' can be progressive when describing temporary behavior.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Temporary Behavior",
  },
  {
    id: 186,
    sentence: "The athlete is weighing himself.",
    error: "No error",
    correction: "The athlete is weighing himself.",
    explanation: "'Weigh' can be progressive when it means 'measure weight'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 187,
    sentence: "I am considering your offer.",
    error: "No error",
    correction: "I am considering your offer.",
    explanation: "'Consider' can be progressive when it means 'think about' over time.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 188,
    sentence: "The situation is appearing more complex.",
    error: "Wrong tense",
    correction: "The situation appears more complex.",
    explanation: "When 'appear' means 'seem', it's stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 189,
    sentence: "I am measuring the room.",
    error: "No error",
    correction: "I am measuring the room.",
    explanation: "'Measure' is dynamic and can be used in progressive tenses.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 190,
    sentence: "The team is fitting the new equipment.",
    error: "No error",
    correction: "The team is fitting the new equipment.",
    explanation: "'Fit' can be progressive when it means 'install' or 'adjust'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 191,
    sentence: "She is expecting a baby.",
    error: "No error",
    correction: "She is expecting a baby.",
    explanation: "'Expect' can be progressive when referring to pregnancy or ongoing anticipation.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 192,
    sentence: "The company is costing the project.",
    error: "No error",
    correction: "The company is costing the project.",
    explanation: "'Cost' can be progressive when it means 'calculate the cost'.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Dynamic vs Stative",
  },
  {
    id: 193,
    sentence: "I am doubting whether to go.",
    error: "Wrong tense",
    correction: "I doubt whether to go.",
    explanation: "'Doubt' is typically stative and not used in progressive tenses.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Stative Verbs",
  },
  {
    id: 194,
    sentence: "The medicine is working well.",
    error: "No error",
    correction: "The medicine is working well.",
    explanation: "'Work' meaning 'function' can be progressive.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 195,
    sentence: "I am forgetting to call him.",
    error: "Wrong tense",
    correction: "I forgot to call him.",
    explanation: "Use simple past for completed actions of forgetting.",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Past vs Progressive",
  },
  {
    id: 196,
    sentence: "The weather is getting warmer.",
    error: "No error",
    correction: "The weather is getting warmer.",
    explanation: "'Get' meaning 'become' is dynamic and can be progressive.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 197,
    sentence: "She is growing taller every year.",
    error: "No error",
    correction: "She is growing taller every year.",
    explanation: "'Grow' meaning 'become' is dynamic and can be progressive.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 198,
    sentence: "The situation is becoming clearer.",
    error: "No error",
    correction: "The situation is becoming clearer.",
    explanation: "'Become' is dynamic and can be used in progressive tenses.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 199,
    sentence: "I am learning to drive.",
    error: "No error",
    correction: "I am learning to drive.",
    explanation: "'Learn' is dynamic and can be used in progressive tenses.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
  {
    id: 200,
    sentence: "The company is developing new products.",
    error: "No error",
    correction: "The company is developing new products.",
    explanation: "'Develop' is dynamic and can be used in progressive tenses.",
    difficulty: "easy",
    topic: "Tenses",
    subtopic: "Dynamic Verbs",
  },
]

export default function SentenceCorrectionPractice() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(sampleSentenceCorrections.length).fill(""))
  const [showExplanation, setShowExplanation] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // No longer tracking time separately as it was redundant

  const filteredQuestions =
    activeTab === "all"
      ? sampleSentenceCorrections
      : sampleSentenceCorrections.filter((q) => q.topic.toLowerCase() === activeTab.toLowerCase())

  const currentQuestion = filteredQuestions[currentQuestionIndex]
  const topics = Array.from(new Set(sampleSentenceCorrections.map((q) => q.topic)))

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
      setIsSubmitted(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
      setIsSubmitted(false)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setShowExplanation(true)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentQuestionIndex(0)
    setShowExplanation(false)
    setIsSubmitted(false)
    setQuizCompleted(false)
  }

  const getDifficultyTextColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600"
      case "medium":
        return "text-yellow-600"
      case "hard":
        return "text-red-600"
      default:
        return "text-blue-600"
    }
  }

  const calculateScore = () => {
    let correctCount = 0
    filteredQuestions.forEach((question, index) => {
      if (userAnswers[index].trim().toLowerCase() === question.correction.toLowerCase()) {
        correctCount++
      }
    })
    return {
      correct: correctCount,
      total: filteredQuestions.length,
      percentage: Math.round((correctCount / filteredQuestions.length) * 100),
    }
  }

  if (quizCompleted) {
    const score = calculateScore()
    return (
      <Card className="w-full shadow-md">
        <CardHeader className="pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">Practice Completed</CardTitle>
              <CardDescription>Review your performance below</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-lg">
            <div className="text-5xl font-bold mb-2">{score.percentage}%</div>
            <p className="text-muted-foreground">
              {score.correct} of {score.total} questions correct
            </p>
          </div>

          <div className="space-y-4">
            <Progress value={score.percentage} className="h-3" />

            <div className="grid gap-3 p-4 bg-muted/30 rounded-lg">
              {score.percentage >= 80 ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Excellent! You have a strong grasp of sentence correction.</span>
                </div>
              ) : score.percentage >= 60 ? (
                <div className="flex items-center gap-2 text-yellow-600">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Good job! With a bit more practice, you'll master sentence correction.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                  <span>Keep practicing! Sentence correction takes time to master.</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={() => setQuizCompleted(false)}>
            Review Answers
          </Button>
          <Button
            onClick={() => {
              setCurrentQuestionIndex(0)
              setUserAnswers(Array(sampleSentenceCorrections.length).fill(""))
              setShowExplanation(false)
              setIsSubmitted(false)
              setQuizCompleted(false)
            }}
          >
            Restart Practice
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-sm border p-4">
        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Grammar Topics
            </h2>
          </div>
          <div className="relative">
            <div className="overflow-x-auto pb-2 -mx-1 px-1">
              <TabsList className="flex w-max">
                <TabsTrigger value="all" className="px-4">
                  All Topics
                </TabsTrigger>
                {topics.map((topic) => (
                  <TabsTrigger key={topic} value={topic.toLowerCase()} className="px-4">
                    {topic}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-6 pt-0">
            <Card className="w-full shadow-md border">
              <CardHeader className="pb-4 border-b">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {currentQuestionIndex + 1} of {filteredQuestions.length}
                      </Badge>
                      <Badge
                        className={cn(
                          "font-normal",
                          getDifficultyTextColor(currentQuestion.difficulty),
                          "bg-muted border",
                        )}
                      >
                        {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Correct the error: {currentQuestion.error}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                <div className="p-4 bg-muted rounded-md border text-base">{currentQuestion.sentence}</div>

                <div className="space-y-3">
                  <Textarea
                    placeholder="Type the corrected sentence here..."
                    value={userAnswers[currentQuestionIndex]}
                    onChange={(e) => {
                      const newAnswers = [...userAnswers]
                      newAnswers[currentQuestionIndex] = e.target.value
                      setUserAnswers(newAnswers)
                    }}
                    disabled={isSubmitted}
                    className="min-h-[100px] text-base resize-none"
                  />
                </div>

                {showExplanation && (
                  <div className="space-y-4 rounded-lg bg-muted/30 p-4">
                    <div className="space-y-3">
                      <div className="font-medium flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        Correct Answer:
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md text-base">
                        {currentQuestion.correction}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                        Explanation:
                      </div>
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-base">
                        {currentQuestion.explanation}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {!isSubmitted ? (
                    <Button onClick={handleSubmit} disabled={!userAnswers[currentQuestionIndex]}>
                      Submit
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion} variant="default">
                      {currentQuestionIndex < filteredQuestions.length - 1 ? (
                        <>
                          Next
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      ) : (
                        "Complete Practice"
                      )}
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
