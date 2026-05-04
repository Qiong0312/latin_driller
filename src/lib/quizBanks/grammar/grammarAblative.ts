import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const grammarAblativeQuiz: QuizQuestion[] = [
  {
    question:
      'In Latin, which case is especially used for means, manner, place, separation, and with many prepositions such as in, cum, and sub?',
    options: ['Accusative', 'Ablative', 'Nominative', 'Genitive'],
    correct: 1,
  },
  {
    question: 'In the sentence gladiō pugnō (“I fight with a sword”), why is gladiō in the ablative?',
    options: [
      'It is the direct object of the verb',
      'It names the instrument or means by which the action is done',
      'It is the subject of the sentence',
      'It shows possession (“of the sword”)',
    ],
    correct: 1,
  },
  {
    question: 'In aquā lavō (“I wash with water”), the form aquā is ablative because it indicates…',
    options: ['The person addressed', 'The means used for the action', 'The place only', 'The subject'],
    correct: 1,
  },
  {
    question: 'In the phrase in urbe (“in the city”), what case is urbe?',
    options: ['Accusative', 'Ablative', 'Dative', 'Nominative'],
    correct: 1,
  },
  {
    question: 'In sub monte (“under the mountain”), monte is in which case?',
    options: ['Ablative', 'Nominative', 'Vocative', 'Accusative'],
    correct: 0,
  },
  {
    question: 'In sine dubiō (“without doubt”), dubiō is the ablative form used after which type of word?',
    options: ['A verb of saying', 'The preposition sine', 'The conjunction et', 'An adjective only'],
    correct: 1,
  },
  {
    question: 'In cum amīcō (“with a friend”), amīcō is ablative because…',
    options: ['It is the object of a verb of motion', 'It accompanies the preposition cum', 'It is always nominative with cum', 'It shows indirect speech'],
    correct: 1,
  },
  {
    question:
      'Compared with English, Latin often omits a separate word for “with” or “by” in expressions of means (e.g. a sword) because…',
    options: [
      'Word order alone always shows means',
      'The ablative ending on the noun can show the relationship by itself',
      'Means is always expressed with the accusative',
      'Latin never uses prepositions with means',
    ],
    correct: 1,
  },
  {
    question: 'Which of the following is least typical of the ablative case?',
    options: ['Instrument or means', 'Manner of an action', 'Direct object of a transitive verb', 'Accompaniment with cum'],
    correct: 2,
  },
  {
    question:
      'The ablative case is used both with prepositions (e.g. in, sub, sine, cum) and without them, especially when expressing…',
    options: ['Only the subject', 'Means or instrument without an extra word for “with”', 'Only indirect objects', 'Only possession'],
    correct: 1,
  },
];
