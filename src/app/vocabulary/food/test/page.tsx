'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

const questions: QuizQuestion[] = [
  {
    question: 'What is the Latin word for "bread"?',
    options: ['panis', 'caseus', 'ovum', 'cibus'],
    correct: 0,
  },
  {
    question: 'Which food is "caseus"?',
    options: ['bread', 'cheese', 'egg', 'food'],
    correct: 1,
  },
  {
    question: 'What does "ovum" mean?',
    options: ['bread', 'cheese', 'egg', 'meal'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "food"?',
    options: ['panis', 'cibus', 'cena', 'caro'],
    correct: 1,
  },
  {
    question: 'Which word means "dinner" or "meal"?',
    options: ['panis', 'cibus', 'cena', 'ovum'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "apple"?',
    options: ['pirum', 'malum', 'uva', 'ficus'],
    correct: 1,
  },
  {
    question: 'Which fruit is "pirum"?',
    options: ['apple', 'pear', 'grape', 'fig'],
    correct: 1,
  },
  {
    question: 'What does "uva" mean?',
    options: ['apple', 'pear', 'grape', 'cherry'],
    correct: 2,
  },
  {
    question: 'Which fruit is "ficus"?',
    options: ['grape', 'cherry', 'fig', 'plum'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "cherry"?',
    options: ['uva', 'ficus', 'cerasum', 'prunum'],
    correct: 2,
  },
  {
    question: 'Which fruit is "prunum"?',
    options: ['cherry', 'plum', 'apple', 'pear'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "carrot"?',
    options: ['lactuca', 'carota', 'cepa', 'allium'],
    correct: 1,
  },
  {
    question: 'Which vegetable is "lactuca"?',
    options: ['carrot', 'lettuce', 'onion', 'garlic'],
    correct: 1,
  },
  {
    question: 'What does "cepa" mean?',
    options: ['lettuce', 'garlic', 'onion', 'mushroom'],
    correct: 2,
  },
  {
    question: 'Which vegetable is "allium"?',
    options: ['onion', 'garlic', 'carrot', 'lettuce'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "mushroom"?',
    options: ['carota', 'cepa', 'fungus', 'lactuca'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "meat"?',
    options: ['piscis', 'gallina', 'caro', 'bos'],
    correct: 2,
  },
  {
    question: 'Which meat is "porcus"?',
    options: ['beef', 'pork', 'chicken', 'fish'],
    correct: 1,
  },
  {
    question: 'What does "bos" mean?',
    options: ['pig', 'cow', 'chicken', 'meat'],
    correct: 1,
  },
  {
    question: 'Which protein is "gallina"?',
    options: ['fish', 'chicken', 'beef', 'pork'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "fish"?',
    options: ['caro', 'porcus', 'gallina', 'piscis'],
    correct: 3,
  },
  {
    question: 'What is the Latin word for "water"?',
    options: ['lac', 'vinum', 'aqua', 'mel'],
    correct: 2,
  },
  {
    question: 'Which drink is "lac"?',
    options: ['water', 'milk', 'wine', 'honey'],
    correct: 1,
  },
  {
    question: 'What does "vinum" mean?',
    options: ['milk', 'wine', 'honey', 'salt'],
    correct: 1,
  },
  {
    question: 'Which item is "mel"?',
    options: ['wine', 'salt', 'honey', 'water'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "salt"?',
    options: ['aqua', 'lac', 'vinum', 'sal'],
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
