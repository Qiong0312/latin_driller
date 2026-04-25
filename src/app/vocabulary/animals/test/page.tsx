'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

const questions: QuizQuestion[] = [
  {
    question: 'What is the Latin word for "dog"?',
    options: ['Canis', 'Fēlīs', 'Equus', 'Vacca'],
    correct: 0,
  },
  {
    question: 'Which animal is "Lēo"?',
    options: ['Tiger', 'Lion', 'Bear', 'Wolf'],
    correct: 1,
  },
  {
    question: 'What does "Aquila" mean?',
    options: ['Dove', 'Eagle', 'Crow', 'Sparrow'],
    correct: 1,
  },
  {
    question: 'Which of these is a sea animal?',
    options: ['Ursus', 'Delphīnus', 'Cervus', 'Vulpes'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "cat"?',
    options: ['Canis', 'Fēlīs', 'Equus', 'Porcus'],
    correct: 1,
  },
  {
    question: 'Which animal is "Tigris"?',
    options: ['Lion', 'Tiger', 'Bear', 'Fox'],
    correct: 1,
  },
  {
    question: 'What does "Piscis" mean?',
    options: ['Whale', 'Fish', 'Dolphin', 'Shark'],
    correct: 1,
  },
  {
    question: 'Which of these is a bird?',
    options: ['Mūs', 'Rāna', 'Gallina', 'Serpēns'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "horse"?',
    options: ['Vacca', 'Ovis', 'Equus', 'Capra'],
    correct: 2,
  },
  {
    question: 'Which animal is "Ēlēphāntus"?',
    options: ['Deer', 'Elephant', 'Wolf', 'Fox'],
    correct: 1,
  },
  {
    question: 'What does "Apis" mean?',
    options: ['Ant', 'Bee', 'Mouse', 'Frog'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "pig"?',
    options: ['Ovis', 'Capra', 'Porcus', 'Asīnus'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "cow"?',
    options: ['Equus', 'Vacca', 'Asīnus', 'Capra'],
    correct: 1,
  },
  {
    question: 'Which animal is "Corvus"?',
    options: ['Dove', 'Eagle', 'Crow', 'Sparrow'],
    correct: 2,
  },
  {
    question: 'What does "Formīca" mean?',
    options: ['Bee', 'Ant', 'Mouse', 'Snake'],
    correct: 1,
  },
  {
    question: 'Which of these is a small creature?',
    options: ['Ēlēphāntus', 'Cētus', 'Mūs', 'Aquila'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "sheep"?',
    options: ['Porcus', 'Ovis', 'Capra', 'Asīnus'],
    correct: 1,
  },
  {
    question: 'Which animal is "Cervus"?',
    options: ['Bear', 'Wolf', 'Deer', 'Fox'],
    correct: 2,
  },
  {
    question: 'What does "Gallus" mean?',
    options: ['Hen', 'Rooster', 'Dove', 'Crow'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "goat"?',
    options: ['Ovis', 'Capra', 'Porcus', 'Asīnus'],
    correct: 1,
  },
  {
    question: 'Which animal is "Ursus"?',
    options: ['Wolf', 'Bear', 'Fox', 'Deer'],
    correct: 1,
  },
  {
    question: 'What does "Lupus" mean?',
    options: ['Bear', 'Wolf', 'Fox', 'Deer'],
    correct: 1,
  },
  {
    question: 'Which animal is "Vulpes"?',
    options: ['Wolf', 'Bear', 'Fox', 'Deer'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "bird"?',
    options: ['Aquila', 'Āvis', 'Corvus', 'Passer'],
    correct: 1,
  },
  {
    question: 'Which animal is "Columba"?',
    options: ['Eagle', 'Crow', 'Pigeon', 'Sparrow'],
    correct: 2,
  },
  {
    question: 'What does "Passer" mean?',
    options: ['Dove', 'Crow', 'Sparrow', 'Hen'],
    correct: 2,
  },
  {
    question: 'Which of these is a whale?',
    options: ['Piscis', 'Delphīnus', 'Cētus', 'Canis mārīnus'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "shark"?',
    options: ['Piscis', 'Delphīnus', 'Cētus', 'Canis mārīnus'],
    correct: 3,
  },
  {
    question: 'Which animal is "Rāna"?',
    options: ['Mūs', 'Frog', 'Serpēns', 'Bee'],
    correct: 1,
  },
  {
    question: 'What does "Serpēns" mean?',
    options: ['Mūs', 'Rāna', 'Snake', 'Formīca'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "donkey"?',
    options: ['Equus', 'Vacca', 'Asīnus', 'Capra'],
    correct: 2,
  },
];

export default function AnimalsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Animals — All lessons quiz"
      resultsHeading="Animals — Quiz results"
      backToCategoryHref="/vocabulary/animals"
      backToCategoryLabel="Back to Animalia (Animals)"
      questions={questions}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
