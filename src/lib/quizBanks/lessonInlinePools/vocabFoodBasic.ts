import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const vocabFoodBasicQuiz: QuizQuestion[] = [
  {
    question: 'What is the Latin word for "bread"?',
    options: ['pānis', 'cāseus', 'ōvum', 'cibus'],
    correct: 0
  },
  {
    question: 'Which food is "cāseus"?',
    options: ['bread', 'cheese', 'egg', 'food'],
    correct: 1
  },
  {
    question: 'What does "ōvum" mean?',
    options: ['bread', 'cheese', 'egg', 'meal'],
    correct: 2
  },
  {
    question: 'What is the Latin word for "food"?',
    options: ['pānis', 'cibus', 'cēna', 'cāseus'],
    correct: 1
  },
  {
    question: 'Which word means "dinner" or "meal"?',
    options: ['pānis', 'cibus', 'cēna', 'ōvum'],
    correct: 2
  }
];
