export const articlesDeterminersQuestions = [
  // Basic Article Usage
  {
    id: "ad-1",
    question: "I need _____ umbrella because it's raining.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "an",
    explanation: "We use 'an' before words that begin with a vowel sound. 'Umbrella' begins with the vowel sound /ʌ/.",
  },
  {
    id: "ad-2",
    question: "She is _____ university student.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "a",
    explanation:
      "Although 'university' begins with a vowel letter, it starts with a consonant sound /j/ (like 'you'). Therefore, we use 'a' instead of 'an'.",
  },
  {
    id: "ad-3",
    question: "_____ book you lent me was very interesting.",
    options: ["A", "An", "The", "No article needed"],
    correctAnswer: "The",
    explanation:
      "We use 'the' for specific items that both the speaker and listener can identify. In this case, both people know which specific book is being referred to.",
  },

  // Zero Article Cases
  {
    id: "ad-4",
    question: "_____ cats are popular pets worldwide.",
    options: ["A", "An", "The", "No article needed"],
    correctAnswer: "No article needed",
    explanation: "We don't use articles with plural nouns when making general statements about a category.",
  },
  {
    id: "ad-5",
    question: "She speaks _____ French fluently.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "no article needed",
    explanation: "Languages typically don't take articles when referring to the language itself.",
  },
  {
    id: "ad-6",
    question: "We usually eat _____ dinner at 7 PM.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "no article needed",
    explanation: "Meals (breakfast, lunch, dinner) typically don't take articles when referring to the regular meal.",
  },

  // Demonstrative Determiners
  {
    id: "ad-7",
    question: "_____ books on the shelf belong to my brother.",
    options: ["This", "That", "These", "Those"],
    correctAnswer: "These",
    explanation: "'These' is the correct demonstrative determiner for plural objects that are near to the speaker.",
  },
  {
    id: "ad-8",
    question: "Do you remember _____ summer when we went to Italy?",
    options: ["this", "that", "these", "those"],
    correctAnswer: "that",
    explanation:
      "'That' is used for singular objects or concepts that are distant in time or space. Here, we're referring to a summer in the past.",
  },

  // Quantifiers and Possessives
  {
    id: "ad-9",
    question: "She doesn't have _____ free time these days.",
    options: ["much", "many", "few", "little"],
    correctAnswer: "much",
    explanation: "'Much' is used with uncountable nouns like 'time', while 'many' is used with countable nouns.",
  },
  {
    id: "ad-10",
    question: "_____ car broke down on the highway yesterday.",
    options: ["Me", "My", "Mine", "Myself"],
    correctAnswer: "My",
    explanation:
      "'My' is the correct possessive determiner to show ownership before a noun. 'Mine' would be used without a following noun.",
  },

  // Definite vs. Indefinite Articles
  {
    id: "ad-11",
    question: "I saw _____ movie last night. _____ movie was about space exploration.",
    options: ["a, A", "a, The", "the, A", "the, The"],
    correctAnswer: "a, The",
    explanation:
      "We use 'a' when introducing something for the first time (indefinite), and 'the' when referring to it again (now definite).",
  },
  {
    id: "ad-12",
    question: "_____ Nile is _____ longest river in Africa.",
    options: ["A, a", "A, the", "The, a", "The, the"],
    correctAnswer: "The, the",
    explanation: "We use 'the' with specific rivers ('The Nile') and with superlatives ('the longest').",
  },

  // Special Rules
  {
    id: "ad-13",
    question: "My sister plays _____ piano beautifully.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "the",
    explanation: "Musical instruments typically take 'the' when referring to playing the instrument.",
  },
  {
    id: "ad-14",
    question: "We're going to _____ Paris next summer.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "no article needed",
    explanation:
      "Most city names don't take articles. Exceptions include cities with 'of' or plural forms (e.g., The Hague).",
  },
  {
    id: "ad-15",
    question: "_____ United States is a large country.",
    options: ["A", "An", "The", "No article needed"],
    correctAnswer: "The",
    explanation:
      "Country names that are plural or contain 'of' or 'union/republic' typically take 'the' (e.g., The United States, The United Kingdom).",
  },

  // Common Errors
  {
    id: "ad-16",
    question: "She gave me _____ useful advice.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "no article needed",
    explanation:
      "'Advice' is an uncountable noun, so it doesn't take 'a' or 'an'. We could say 'a piece of advice' to make it countable.",
  },
  {
    id: "ad-17",
    question: "_____ hour ago, I was still at work.",
    options: ["A", "An", "The", "No article needed"],
    correctAnswer: "An",
    explanation:
      "Although 'hour' begins with 'h', the 'h' is silent, so the word begins with a vowel sound. Therefore, we use 'an'.",
  },
  {
    id: "ad-18",
    question: "I have _____ one-way ticket to London.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "a",
    explanation:
      "'One' begins with the consonant sound /w/, so we use 'a' even though it starts with the vowel letter 'o'.",
  },

  // Advanced Usage
  {
    id: "ad-19",
    question: "_____ elderly need special care and attention.",
    options: ["An", "The", "Some", "No article needed"],
    correctAnswer: "The",
    explanation:
      "When an adjective is used to refer to a group of people (without a noun), we use 'the' (e.g., the poor, the rich, the elderly).",
  },
  {
    id: "ad-20",
    question: "She visits her parents _____ every Sunday.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "no article needed",
    explanation:
      "We don't use articles before days of the week unless referring to a specific instance (e.g., 'the Sunday when we met').",
  },
]
