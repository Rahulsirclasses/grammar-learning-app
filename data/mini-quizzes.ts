export interface MiniQuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "easy" | "medium" | "hard"
}

export const subjectVerbAgreementQuiz: MiniQuizQuestion[] = [
  // Original 4 questions
  {
    id: "sva-1",
    question: "Choose the correct verb: The team _____ celebrating their victory.",
    options: ["is", "are", "was", "were"],
    correctAnswer: 1,
    explanation:
      "When a collective noun like 'team' refers to individual members acting separately (indicated by 'their'), use a plural verb.",
    difficulty: "medium",
  },
  {
    id: "sva-2",
    question: "Select the correct option: Each of the students _____ required to submit an essay.",
    options: ["are", "is", "were", "have been"],
    correctAnswer: 1,
    explanation:
      "'Each' is always singular, regardless of the prepositional phrase that follows. Use 'is' with singular subjects.",
    difficulty: "easy",
  },
  {
    id: "sva-3",
    question: "Which is correct: Either the cats or the dog _____ responsible for the mess.",
    options: ["are", "is", "were", "have been"],
    correctAnswer: 1,
    explanation:
      "With 'either...or' constructions, the verb agrees with the subject closest to it. Since 'dog' is singular, use 'is'.",
    difficulty: "hard",
  },
  {
    id: "sva-4",
    question: "Choose the right verb: The number of applicants _____ increasing every year.",
    options: ["are", "is", "were", "have been"],
    correctAnswer: 1,
    explanation:
      "'The number' is always singular and takes a singular verb. Don't confuse it with 'A number of' which takes a plural verb.",
    difficulty: "medium",
  },
  // New 50 questions from attachment
  {
    id: "sva-5",
    question: "The list of items _____ on the table.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation:
      "The subject 'list' is singular, so it takes the singular verb 'is'. The prepositional phrase 'of items' doesn't affect the verb agreement.",
    difficulty: "easy",
  },
  {
    id: "sva-6",
    question: "Neither the manager nor the employees _____ willing to work overtime.",
    options: ["is", "are", "has", "was"],
    correctAnswer: 1,
    explanation:
      "With 'neither...nor', the verb agrees with the subject closest to it. Since 'employees' is plural, use 'are'.",
    difficulty: "medium",
  },
  {
    id: "sva-7",
    question: "Either of the books _____ suitable for the project.",
    options: ["are", "were", "is", "have"],
    correctAnswer: 2,
    explanation:
      "'Either' is always singular and takes a singular verb, regardless of the prepositional phrase that follows.",
    difficulty: "easy",
  },
  {
    id: "sva-8",
    question: "The team _____ celebrating their victory.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 0,
    explanation: "When a collective noun refers to individual members (indicated by 'their'), use a plural verb.",
    difficulty: "medium",
  },
  {
    id: "sva-9",
    question: "A bouquet of roses _____ placed on the table.",
    options: ["is", "are", "have been", "were"],
    correctAnswer: 0,
    explanation:
      "The subject 'bouquet' is singular, so it takes the singular verb 'is'. The prepositional phrase 'of roses' doesn't change this.",
    difficulty: "easy",
  },
  {
    id: "sva-10",
    question: "The jury _____ divided in their opinion.",
    options: ["was", "is", "are", "has"],
    correctAnswer: 2,
    explanation:
      "When a collective noun like 'jury' refers to individual members (indicated by 'their'), use a plural verb.",
    difficulty: "medium",
  },
  {
    id: "sva-11",
    question: "Each of the boys _____ done his homework.",
    options: ["have", "has", "were", "are"],
    correctAnswer: 1,
    explanation:
      "'Each' is always singular and takes a singular verb, regardless of the prepositional phrase that follows.",
    difficulty: "easy",
  },
  {
    id: "sva-12",
    question: "Mathematics _____ a difficult subject for many.",
    options: ["are", "were", "is", "have"],
    correctAnswer: 2,
    explanation: "Subjects ending in -s like mathematics, physics, and economics are singular and take singular verbs.",
    difficulty: "easy",
  },
  {
    id: "sva-13",
    question: "The news _____ good today.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "'News' is always singular despite ending in -s, so it takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-14",
    question: "There _____ many options to choose from.",
    options: ["is", "was", "are", "has"],
    correctAnswer: 2,
    explanation:
      "In 'there' constructions, the verb agrees with the subject that follows. 'Options' is plural, so use 'are'.",
    difficulty: "easy",
  },
  {
    id: "sva-15",
    question: "The cost of all these items _____ increased.",
    options: ["have", "has", "are", "were"],
    correctAnswer: 1,
    explanation:
      "The subject 'cost' is singular, so it takes the singular verb 'has'. The prepositional phrase doesn't affect agreement.",
    difficulty: "easy",
  },
  {
    id: "sva-16",
    question: "Measles _____ a common childhood illness.",
    options: ["are", "were", "is", "have"],
    correctAnswer: 2,
    explanation: "Disease names like measles, mumps, and diabetes are singular despite ending in -s.",
    difficulty: "medium",
  },
  {
    id: "sva-17",
    question: "The scissors _____ on the table.",
    options: ["is", "are", "has", "was"],
    correctAnswer: 1,
    explanation: "Tools like scissors, pliers, and tweezers are always plural and take plural verbs.",
    difficulty: "easy",
  },
  {
    id: "sva-18",
    question: "The data _____ not conclusive.",
    options: ["is", "are", "were", "have"],
    correctAnswer: 1,
    explanation: "'Data' is the plural form of 'datum' and takes a plural verb in formal English.",
    difficulty: "hard",
  },
  {
    id: "sva-19",
    question: "Many a man _____ tried and failed.",
    options: ["have", "has", "were", "are"],
    correctAnswer: 1,
    explanation: "The expression 'many a' is always followed by a singular noun and takes a singular verb.",
    difficulty: "hard",
  },
  {
    id: "sva-20",
    question: "The police _____ investigating the matter.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "'Police' is always plural and takes a plural verb.",
    difficulty: "easy",
  },
  {
    id: "sva-21",
    question: "The quality of the apples _____ deteriorated.",
    options: ["have", "has", "were", "are"],
    correctAnswer: 1,
    explanation: "The subject 'quality' is singular, so it takes the singular verb 'has'.",
    difficulty: "easy",
  },
  {
    id: "sva-22",
    question: "Fifty dollars _____ too much for this toy.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "When referring to a sum of money as a single unit, use a singular verb.",
    difficulty: "medium",
  },
  {
    id: "sva-23",
    question: "The number of applications _____ increasing.",
    options: ["are", "is", "have", "were"],
    correctAnswer: 1,
    explanation:
      "'The number' is always singular and takes a singular verb. Don't confuse with 'A number of' which is plural.",
    difficulty: "medium",
  },
  {
    id: "sva-24",
    question: "A number of students _____ absent today.",
    options: ["is", "has", "are", "was"],
    correctAnswer: 2,
    explanation: "'A number of' means 'several' and takes a plural verb, unlike 'the number of' which is singular.",
    difficulty: "medium",
  },
  {
    id: "sva-25",
    question: "Neither of the answers _____ correct.",
    options: ["is", "are", "have", "were"],
    correctAnswer: 0,
    explanation: "'Neither' is always singular and takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-26",
    question: "The children, along with their teacher, _____ going on a trip.",
    options: ["is", "are", "has", "was"],
    correctAnswer: 1,
    explanation:
      "The subject 'children' is plural. Phrases like 'along with' don't change the number of the main subject.",
    difficulty: "medium",
  },
  {
    id: "sva-27",
    question: "The pair of shoes _____ lying under the bed.",
    options: ["are", "were", "is", "have"],
    correctAnswer: 2,
    explanation: "'Pair' is singular, so it takes a singular verb, even when referring to plural items.",
    difficulty: "medium",
  },
  {
    id: "sva-28",
    question: "The cattle _____ grazing in the field.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "'Cattle' is always plural and takes a plural verb.",
    difficulty: "easy",
  },
  {
    id: "sva-29",
    question: "Each of the girls _____ wearing a uniform.",
    options: ["were", "are", "is", "have"],
    correctAnswer: 2,
    explanation: "'Each' is always singular and takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-30",
    question: "The committee _____ reached a unanimous decision.",
    options: ["has", "have", "are", "were"],
    correctAnswer: 0,
    explanation: "When a collective noun acts as a single unit, use a singular verb.",
    difficulty: "medium",
  },
  {
    id: "sva-31",
    question: "The furniture in the house _____ expensive.",
    options: ["is", "are", "were", "have"],
    correctAnswer: 0,
    explanation: "'Furniture' is an uncountable noun and always takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-32",
    question: "Everyone _____ present at the meeting.",
    options: ["are", "is", "have", "were"],
    correctAnswer: 1,
    explanation: "Indefinite pronouns like 'everyone' are always singular and take singular verbs.",
    difficulty: "easy",
  },
  {
    id: "sva-33",
    question: "All the water _____ gone.",
    options: ["have", "is", "are", "has"],
    correctAnswer: 1,
    explanation:
      "'Water' is uncountable and takes a singular verb. 'All' doesn't change this when referring to uncountable nouns.",
    difficulty: "medium",
  },
  {
    id: "sva-34",
    question: "Politics _____ not my favorite subject.",
    options: ["are", "were", "is", "have"],
    correctAnswer: 2,
    explanation: "Subjects ending in -s like politics are singular and take singular verbs.",
    difficulty: "easy",
  },
  {
    id: "sva-35",
    question: "Time and tide _____ for none.",
    options: ["waits", "wait", "has waited", "was waiting"],
    correctAnswer: 1,
    explanation: "When two subjects are joined by 'and', they usually take a plural verb.",
    difficulty: "easy",
  },
  {
    id: "sva-36",
    question: "Not only the teacher but also the students _____ happy.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "With 'not only...but also', the verb agrees with the subject closest to it. 'Students' is plural.",
    difficulty: "medium",
  },
  {
    id: "sva-37",
    question: "The series of lectures _____ very interesting.",
    options: ["are", "have", "is", "were"],
    correctAnswer: 2,
    explanation: "'Series' can be singular or plural, but here it refers to one series, so use a singular verb.",
    difficulty: "hard",
  },
  {
    id: "sva-38",
    question: "Ten miles _____ a long distance to walk.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "When referring to distance as a single unit, use a singular verb.",
    difficulty: "medium",
  },
  {
    id: "sva-39",
    question: "There _____ a pen and two pencils on the table.",
    options: ["is", "are", "has", "were"],
    correctAnswer: 0,
    explanation: "In 'there' constructions, the verb agrees with the first subject mentioned. 'Pen' is singular.",
    difficulty: "hard",
  },
  {
    id: "sva-40",
    question: "Either my father or my brothers _____ going to the event.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "With 'either...or', the verb agrees with the subject closest to it. 'Brothers' is plural.",
    difficulty: "medium",
  },
  {
    id: "sva-41",
    question: "The wages of sin _____ death.",
    options: ["is", "are", "were", "have"],
    correctAnswer: 0,
    explanation: "This is an idiomatic expression where 'wages' is treated as singular.",
    difficulty: "hard",
  },
  {
    id: "sva-42",
    question: "Where _____ your keys?",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "'Keys' is plural, so use the plural verb 'are'.",
    difficulty: "easy",
  },
  {
    id: "sva-43",
    question: "Bread and butter _____ my favorite breakfast.",
    options: ["is", "are", "were", "have"],
    correctAnswer: 0,
    explanation: "When two nouns joined by 'and' refer to a single concept, use a singular verb.",
    difficulty: "hard",
  },
  {
    id: "sva-44",
    question: "The majority _____ against the proposal.",
    options: ["is", "are", "were", "has"],
    correctAnswer: 1,
    explanation: "'Majority' can be singular or plural. Here it refers to individual people, so use a plural verb.",
    difficulty: "hard",
  },
  {
    id: "sva-45",
    question: "His knowledge of these subjects _____ impressive.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "'Knowledge' is uncountable and always takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-46",
    question: "The staff _____ working overtime.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "When 'staff' refers to individual members, use a plural verb.",
    difficulty: "medium",
  },
  {
    id: "sva-47",
    question: "Neither the cats nor the dog _____ to blame.",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "With 'neither...nor', the verb agrees with the subject closest to it. 'Dog' is singular.",
    difficulty: "medium",
  },
  {
    id: "sva-48",
    question: "Ten rupees _____ not a big amount.",
    options: ["are", "is", "have", "were"],
    correctAnswer: 1,
    explanation: "When referring to money as a single amount, use a singular verb.",
    difficulty: "medium",
  },
  {
    id: "sva-49",
    question: "The soldiers _____ marching in formation.",
    options: ["is", "was", "are", "has"],
    correctAnswer: 2,
    explanation: "'Soldiers' is plural, so use the plural verb 'are'.",
    difficulty: "easy",
  },
  {
    id: "sva-50",
    question: "Several of the books _____ missing.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation: "'Several' indicates a plural quantity, so use a plural verb.",
    difficulty: "easy",
  },
  {
    id: "sva-51",
    question: "Many students _____ preparing for the exam.",
    options: ["is", "are", "has", "was"],
    correctAnswer: 1,
    explanation: "'Many students' is plural, so use the plural verb 'are'.",
    difficulty: "easy",
  },
  {
    id: "sva-52",
    question: "Nothing _____ been done yet.",
    options: ["have", "are", "has", "were"],
    correctAnswer: 2,
    explanation: "'Nothing' is always singular and takes a singular verb.",
    difficulty: "easy",
  },
  {
    id: "sva-53",
    question: "A few apples _____ rotten.",
    options: ["is", "are", "has", "was"],
    correctAnswer: 1,
    explanation: "'A few apples' is plural, so use the plural verb 'are'.",
    difficulty: "easy",
  },
  {
    id: "sva-54",
    question: "Some of the information _____ inaccurate.",
    options: ["are", "is", "have", "were"],
    correctAnswer: 1,
    explanation: "'Information' is uncountable and always takes a singular verb, even with 'some of'.",
    difficulty: "medium",
  },
]

export const tensesQuiz: MiniQuizQuestion[] = [
  {
    id: "tenses-1",
    question: "Complete the sentence: By the time you arrive, I _____ dinner.",
    options: ["will cook", "will be cooking", "will have cooked", "am cooking"],
    correctAnswer: 2,
    explanation:
      "Future perfect tense (will have + past participle) is used for actions that will be completed before a specific time in the future.",
    difficulty: "hard",
  },
  {
    id: "tenses-2",
    question: "Choose the correct tense: She _____ in this company since 2010.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2,
    explanation:
      "Present perfect continuous (has/have been + -ing) is used for actions that started in the past and continue to the present, often with 'since' or 'for'.",
    difficulty: "medium",
  },
  {
    id: "tenses-3",
    question: "Select the right option: While I _____ TV, the phone rang.",
    options: ["watched", "was watching", "have watched", "had watched"],
    correctAnswer: 1,
    explanation:
      "Past continuous tense is used for ongoing actions that were interrupted by another action in the past.",
    difficulty: "easy",
  },
  {
    id: "tenses-4",
    question: "What's correct: I _____ three books this month.",
    options: ["read", "am reading", "have read", "had read"],
    correctAnswer: 2,
    explanation:
      "Present perfect tense is used for actions completed at an unspecified time with relevance to the present. 'This month' indicates a time period that includes the present.",
    difficulty: "medium",
  },
]

export const partsOfSpeechQuiz: MiniQuizQuestion[] = [
  {
    id: "pos-1",
    question: "In the sentence 'The quick brown fox jumps', what part of speech is 'quick'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 2,
    explanation: "'Quick' describes the noun 'fox', making it an adjective. Adjectives modify nouns and pronouns.",
    difficulty: "easy",
  },
  {
    id: "pos-2",
    question: "Identify the adverb in: 'She sings beautifully every morning.'",
    options: ["sings", "beautifully", "every", "morning"],
    correctAnswer: 1,
    explanation: "'Beautifully' modifies the verb 'sings' by describing how she sings, making it an adverb.",
    difficulty: "easy",
  },
  {
    id: "pos-3",
    question: "What part of speech is 'running' in: 'Running is good exercise'?",
    options: ["Verb", "Adjective", "Noun", "Adverb"],
    correctAnswer: 2,
    explanation:
      "'Running' functions as the subject of the sentence, making it a gerund (a verb form functioning as a noun).",
    difficulty: "medium",
  },
  {
    id: "pos-4",
    question: "In 'The book on the table is mine', what is 'on'?",
    options: ["Verb", "Preposition", "Conjunction", "Adverb"],
    correctAnswer: 1,
    explanation: "'On' shows the relationship between 'book' and 'table', making it a preposition.",
    difficulty: "easy",
  },
]

export const pronounsQuiz: MiniQuizQuestion[] = [
  {
    id: "pronouns-1",
    question: "Choose the correct pronoun: Between you and _____, this is confidential.",
    options: ["I", "me", "myself", "mine"],
    correctAnswer: 1,
    explanation: "After prepositions like 'between', use the objective case. 'Me' is the objective form of 'I'.",
    difficulty: "medium",
  },
  {
    id: "pronouns-2",
    question: "Select the right option: _____ of the students completed the assignment?",
    options: ["Who", "Whom", "Which", "Whose"],
    correctAnswer: 0,
    explanation:
      "'Who' is used as a subject pronoun. Since we're asking about which students (subjects) completed the assignment, use 'who'.",
    difficulty: "medium",
  },
  {
    id: "pronouns-3",
    question: "What's correct: The dog wagged _____ tail happily.",
    options: ["it's", "its", "its'", "it"],
    correctAnswer: 1,
    explanation: "'Its' is the possessive form of 'it'. 'It's' is a contraction meaning 'it is' or 'it has'.",
    difficulty: "easy",
  },
  {
    id: "pronouns-4",
    question: "Choose correctly: The teacher asked John and _____ to stay after class.",
    options: ["I", "me", "myself", "mine"],
    correctAnswer: 1,
    explanation: "When the pronoun is the object of a verb, use the objective case. 'Me' is the objective form.",
    difficulty: "easy",
  },
]

export const getQuizByTopic = (topic: string): MiniQuizQuestion[] => {
  switch (topic) {
    case "subject-verb-agreement":
      return subjectVerbAgreementQuiz
    case "tenses":
      return tensesQuiz
    case "parts-of-speech":
      return partsOfSpeechQuiz
    case "pronouns":
      return pronounsQuiz
    default:
      return []
  }
}
