import { InteractiveExample } from "@/components/ui/interactive-example"

export function PartsOfSpeechExamples() {
  return (
    <div className="space-y-6">
      <InteractiveExample
        title="Identifying Parts of Speech"
        description="Click on each word to see its function in this sentence."
        parts={[
          { text: "The", type: "article", explanation: "Definite article - specifies which dog" },
          { text: "happy", type: "adjective", explanation: "Adjective describing the dog's mood" },
          { text: "dog", type: "subject", explanation: "Noun functioning as the subject of the sentence" },
          { text: "quickly", type: "adverb", explanation: "Adverb describing how the dog ran (modifies the verb)" },
          { text: "ran", type: "verb", explanation: "Action verb - what the dog did" },
          { text: "across", type: "preposition", explanation: "Preposition showing direction/location" },
          { text: "the", type: "article", explanation: "Definite article" },
          { text: "green", type: "adjective", explanation: "Adjective describing the field's color" },
          { text: "field", type: "object", explanation: "Noun - object of the preposition 'across'" },
        ]}
        rule="Each word in a sentence has a specific function. Adjectives describe nouns, adverbs describe verbs, and prepositions show relationships."
        correctAnswer="The happy dog quickly ran across the green field."
      />

      <InteractiveExample
        title="Adjective vs Adverb Usage"
        description="Understanding the difference between adjectives and adverbs."
        parts={[
          { text: "She", type: "subject", explanation: "Personal pronoun - subject of the sentence" },
          { text: "sings", type: "verb", explanation: "Action verb - what she does" },
          {
            text: "beautifully",
            type: "adverb",
            explanation: "Adverb ending in -ly, describes HOW she sings (modifies the verb)",
          },
          { text: "in", type: "preposition", explanation: "Preposition showing location" },
          { text: "the", type: "article", explanation: "Definite article" },
          {
            text: "beautiful",
            type: "adjective",
            explanation: "Adjective describing WHAT KIND of choir (modifies the noun)",
          },
          { text: "choir", type: "object", explanation: "Noun - object of the preposition 'in'" },
        ]}
        rule="Adjectives describe nouns (beautiful choir), while adverbs describe verbs, adjectives, or other adverbs (sings beautifully)."
        correctAnswer="She sings beautifully in the beautiful choir."
        incorrectExample={{
          parts: [
            { text: "She", type: "subject" },
            { text: "sings", type: "verb" },
            { text: "beautiful", type: "adjective" },
            { text: "in", type: "preposition" },
            { text: "the", type: "article" },
            { text: "beautifully", type: "adverb" },
            { text: "choir", type: "object" },
          ],
          explanation:
            "Adjectives and adverbs are swapped. 'Beautiful' should modify 'choir' (noun), and 'beautifully' should modify 'sings' (verb).",
        }}
      />

      <InteractiveExample
        title="Pronoun Reference"
        description="Pronouns must clearly refer to their antecedents."
        parts={[
          { text: "Sarah", type: "subject", explanation: "Proper noun - the antecedent for the pronoun 'she'" },
          { text: "gave", type: "verb", explanation: "Past tense action verb" },
          { text: "her", type: "pronoun", explanation: "Possessive pronoun referring back to Sarah" },
          { text: "book", type: "object", explanation: "Direct object - what was given" },
          { text: "to", type: "preposition", explanation: "Preposition introducing indirect object" },
          { text: "Maria", type: "object", explanation: "Proper noun - indirect object (recipient)" },
          { text: "because", type: "conjunction", explanation: "Subordinating conjunction introducing reason" },
          { text: "she", type: "pronoun", explanation: "Personal pronoun referring back to Sarah (the giver)" },
          { text: "finished", type: "verb", explanation: "Past tense verb" },
          { text: "reading", type: "verb", explanation: "Gerund functioning as direct object" },
          { text: "it", type: "pronoun", explanation: "Personal pronoun referring back to 'book'" },
        ]}
        rule="Pronouns must have clear antecedents. 'Her' and 'she' refer to Sarah, while 'it' refers to the book."
        correctAnswer="Sarah gave her book to Maria because she finished reading it."
      />
    </div>
  )
}
