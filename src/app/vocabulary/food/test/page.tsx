'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

const questions: QuizQuestion[] = [
  {
    question: 'What is the Latin word for "bread"?',
    options: ['pānis', 'cāseus', 'ōvum', 'cibus'],
    correct: 0,
  },
  {
    question: 'Which food is "cāseus"?',
    options: ['bread', 'cheese', 'egg', 'food'],
    correct: 1,
  },
  {
    question: 'What does "ōvum" mean?',
    options: ['bread', 'cheese', 'egg', 'meal'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "food"?',
    options: ['pānis', 'cibus', 'cēna', 'cō'],
    correct: 1,
  },
  {
    question: 'Which word means "dinner" or "meal"?',
    options: ['pānis', 'cibus', 'cēna', 'ōvum'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "apple"?',
    options: ['pīrum', 'mālum', 'ūva', 'fīcus'],
    correct: 1,
  },
  {
    question: 'Which fruit is "pīrum"?',
    options: ['apple', 'pear', 'grape', 'fig'],
    correct: 1,
  },
  {
    question: 'What does "ūva" mean?',
    options: ['apple', 'pear', 'grape', 'cherry'],
    correct: 2,
  },
  {
    question: 'Which fruit is "fīcus"?',
    options: ['grape', 'cherry', 'fig', 'plum'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "cherry"?',
    options: ['ūva', 'fīcus', 'cērāsum', 'prūnum'],
    correct: 2,
  },
  {
    question: 'Which fruit is "prūnum"?',
    options: ['cherry', 'plum', 'apple', 'pear'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "carrot"?',
    options: ['lactūca', 'cārōta', 'cēpa', 'āllium'],
    correct: 1,
  },
  {
    question: 'Which vegetable is "lactūca"?',
    options: ['carrot', 'lettuce', 'onion', 'garlic'],
    correct: 1,
  },
  {
    question: 'What does "cēpa" mean?',
    options: ['lettuce', 'garlic', 'onion', 'mushroom'],
    correct: 2,
  },
  {
    question: 'Which vegetable is "āllium"?',
    options: ['onion', 'garlic', 'carrot', 'lettuce'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "mushroom"?',
    options: ['cārōta', 'cēpa', 'fungus', 'lactūca'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "meat"?',
    options: ['piscis', 'gallīna', 'cō', 'bōs'],
    correct: 2,
  },
  {
    question: 'Which meat is "pōrcus"?',
    options: ['beef', 'pork', 'chicken', 'fish'],
    correct: 1,
  },
  {
    question: 'What does "bōs" mean?',
    options: ['pig', 'cow', 'chicken', 'meat'],
    correct: 1,
  },
  {
    question: 'Which protein is "gallīna"?',
    options: ['fish', 'chicken', 'beef', 'pork'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "fish"?',
    options: ['cō', 'pōrcus', 'gallīna', 'piscis'],
    correct: 3,
  },
  {
    question: 'What is the Latin word for "water"?',
    options: ['lac', 'vīnum', 'aqua', 'mēl'],
    correct: 2,
  },
  {
    question: 'Which drink is "lac"?',
    options: ['water', 'milk', 'wine', 'honey'],
    correct: 1,
  },
  {
    question: 'What does "vīnum" mean?',
    options: ['milk', 'wine', 'honey', 'salt'],
    correct: 1,
  },
  {
    question: 'Which item is "mēl"?',
    options: ['wine', 'salt', 'honey', 'water'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "salt"?',
    options: ['aqua', 'lac', 'vīnum', 'sāl'],
    correct: 3,
  },
];

export default function FoodTestPage() {
  return (
    <CategoryVocabularyTest
      title="Food — All lessons quiz"
      resultsHeading="Food — Quiz results"
      backToCategoryHref="/vocabulary/food"
      backToCategoryLabel="Back to Cibus (Food)"
      questions={questions}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
