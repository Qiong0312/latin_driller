import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const grammarPrepositionsQuiz: QuizQuestion[] = [
  {
    question: 'In Latin, what do prepositions like in, ad, and cum typically govern?',
    options: [
      'Only the nominative case',
      'Specific cases on the noun or pronoun that follows',
      'Verb endings only, not nouns',
      'Word order alone, with no case change',
    ],
    correct: 1,
  },
  {
    question:
      'In general, when a preposition expresses place or static position (“in the city”), which case does the noun often take?',
    options: ['Accusative', 'Ablative', 'Vocative', 'Nominative'],
    correct: 1,
  },
  {
    question:
      'In general, when a preposition expresses motion or direction toward something (“into the city”), which case does the noun often take?',
    options: ['Ablative', 'Accusative', 'Genitive', 'Dative'],
    correct: 1,
  },
  {
    question: 'In the phrase in urbe (“in the city”), the form urbe is which case?',
    options: ['Accusative', 'Ablative', 'Dative', 'Nominative'],
    correct: 1,
  },
  {
    question: 'In the phrase ad urbem (“to the city”), the form urbem is which case?',
    options: ['Ablative', 'Accusative', 'Genitive', 'Nominative'],
    correct: 1,
  },
  {
    question: 'Which preposition regularly takes the ablative to mean “with” in phrases like cum amīcō?',
    options: ['ad', 'cum', 'per', 'ante'],
    correct: 1,
  },
  {
    question: 'The preposition per (“through”) in per silvam takes which case on silvam?',
    options: ['Ablative', 'Accusative', 'Nominative', 'Genitive'],
    correct: 1,
  },
  {
    question: 'The preposition ex (“out of, from”) in ex silvā takes which case on silvā?',
    options: ['Accusative', 'Ablative', 'Dative', 'Nominative'],
    correct: 1,
  },
  {
    question:
      'Some prepositions (such as in and sub) can take either the ablative or the accusative. What usually determines the choice?',
    options: [
      'The gender of the noun only',
      'Whether the idea is location (ablative) or movement toward/into (accusative)',
      'Whether the noun is singular or plural',
      'Whether the verb is passive',
    ],
    correct: 1,
  },
  {
    question: 'Which pair correctly contrasts “in the city” (place) with “into the city” (motion)?',
    options: ['in urbem / in urbe', 'in urbe / in urbem', 'ad urbe / ad urbem', 'sub urbem / sub urbe'],
    correct: 1,
  },
];
