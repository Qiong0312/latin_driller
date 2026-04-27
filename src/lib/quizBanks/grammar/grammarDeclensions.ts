import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const grammarDeclensionsQuiz: QuizQuestion[] = [
  {
    question: 'Which ending would you use for the Genitive Plural of a 1st declension noun like puella?',
    options: ['-ae', '-īs', '-ārum', '-ās'],
    correct: 2,
  },
  {
    question: 'In the 2nd declension masculine (fluvius), which two cases share the exact same ending in the plural?',
    options: ['Nominative and Accusative', 'Dative and Ablative', 'Genitive and Dative', 'Nominative and Genitive'],
    correct: 1,
  },
  {
    question: 'What is unique about the Neuter 2nd declension (oppidum) compared to the Masculine?',
    options: [
      'The Nominative and Accusative forms are identical in both singular and plural.',
      'It has no plural forms.',
      'It uses 1st declension endings for the Genitive.',
      'The plural always ends in -īs.',
    ],
    correct: 0,
  },
  {
    question: 'If you see the word fluviōs, what is its case and number?',
    options: ['Nominative Plural', 'Accusative Singular', 'Accusative Plural', 'Ablative Plural'],
    correct: 2,
  },
  {
    question: 'Which of these is the correct Dative Singular for the 1st declension noun īnsula?',
    options: ['īnsulam', 'īnsulā', 'īnsulīs', 'īnsulae'],
    correct: 3,
  },
  {
    question: 'Translate the change: If amīcus becomes amīcī, what has changed?',
    options: [
      'The gender changed from masculine to feminine.',
      'The number changed from singular to plural.',
      'It changed from a direct object to a subject.',
      'It changed from possession to a direct address.',
    ],
    correct: 1,
  },
  {
    question: 'Identify the case of oppidōrum:',
    options: ['Accusative Plural', 'Genitive Plural', 'Nominative Singular', 'Dative Plural'],
    correct: 1,
  },
  {
    question: 'Which ending is used for the Ablative Singular of a 2nd declension noun (both Masculine and Neuter)?',
    options: ['-a', '-um', '-ō', '-ī'],
    correct: 2,
  },
  {
    question: 'Fill in the blank: Puellae pulchrae _______ (The beautiful girls are).',
    options: ['est', 'sunt'],
    correct: 1,
  },
  {
    question: 'What is the Accusative Singular form of īnsula?',
    options: ['īnsulās', 'īnsulae', 'īnsulā', 'īnsulam'],
    correct: 3,
  },
];
