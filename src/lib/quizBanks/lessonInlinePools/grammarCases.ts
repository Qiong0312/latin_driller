import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const grammarCasesQuiz: QuizQuestion[] = [
  {
    question: 'Which Latin case is used to indicate the subject of a sentence, or the person/thing performing the action?',
    options: ['Accusative', 'Nominative', 'Ablative', 'Genitive'],
    correct: 1
  },
  {
    question: 'If you wanted to say "of the teacher" to show possession, which case would you use?',
    options: ['Dative', 'Vocative', 'Genitive', 'Accusative'],
    correct: 2
  },
  {
    question: 'In the sentence "Marcus Brūtī librum habet," what is the function of the word "librum"?',
    options: ['The subject performing the action', 'The person being addressed', 'The direct object receiving the action', 'The owner of the book'],
    correct: 2
  },
  {
    question: 'Which case should be used when you are speaking directly to someone, such as calling out "O Marcus!"?',
    options: ['Vocative', 'Nominative', 'Ablative', 'Dative'],
    correct: 0
  },
  {
    question: 'The Dative case is most commonly used for which of the following?',
    options: ['The means by which an action is done', 'The indirect object (to/for someone)', 'Showing possession', 'The direct object'],
    correct: 1
  },
  {
    question: 'If a word indicates the "means" or "manner" of an action (e.g., "by means of a sword"), which case is it likely in?',
    options: ['Genitive', 'Accusative', 'Ablative', 'Nominative'],
    correct: 2
  },
  {
    question: 'In the example "Marcus Brūtī librum habet," why is "Brūtī" in the genitive case?',
    options: ['Because Brutus is the subject', 'Because the book belongs to Brutus', 'Because Brutus is receiving the book', 'Because Marcus is talking to Brutus'],
    correct: 1
  },
  {
    question: 'Which of these functions is NOT associated with the Ablative case?',
    options: ['Manner', 'Separation', 'Direct Object', 'Means'],
    correct: 2
  },
  {
    question: 'How does Latin distinguish the function of a noun in a sentence compared to English?',
    options: ['Primarily through word order', 'By changing the word\'s endings', 'By using only prepositions', 'Latin does not distinguish function'],
    correct: 1
  },
  {
    question: 'What would the sentence "Marcus Brūtī librum habet" mean if "Marcus" was changed to the Accusative case and "librum" was changed to the Nominative case?',
    options: ['The book has Marcus', 'Brutus has Marcus\'s book', 'Marcus still has the book', 'The sentence becomes gibberish'],
    correct: 0
  }
];
