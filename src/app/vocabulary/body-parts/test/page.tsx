'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

const questions: QuizQuestion[] = [
  {
    question: 'What is the Latin word for "body"?',
    options: ['corpus', 'caput', 'collum', 'pectus'],
    correct: 0,
  },
  {
    question: 'Which body part is "caput"?',
    options: ['neck', 'head', 'shoulder', 'chest'],
    correct: 1,
  },
  {
    question: 'What does "collum" mean?',
    options: ['head', 'neck', 'shoulder', 'arm'],
    correct: 1,
  },
  {
    question: 'Which body part is "umerus"?',
    options: ['arm', 'shoulder', 'hand', 'finger'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "arm"?',
    options: ['umerus', 'brachium', 'manus', 'digitus'],
    correct: 1,
  },
  {
    question: 'Which body part is "manus"?',
    options: ['arm', 'hand', 'finger', 'chest'],
    correct: 1,
  },
  {
    question: 'What does "digitus" mean?',
    options: ['hand', 'finger', 'chest', 'belly'],
    correct: 1,
  },
  {
    question: 'Which body part is "pectus"?',
    options: ['belly', 'back', 'chest', 'leg'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "belly" or "stomach"?',
    options: ['pectus', 'venter', 'tergum', 'crus'],
    correct: 1,
  },
  {
    question: 'Which body part is "tergum"?',
    options: ['belly', 'back', 'leg', 'foot'],
    correct: 1,
  },
  {
    question: 'What does "crus" mean?',
    options: ['back', 'leg', 'foot', 'body'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "foot"?',
    options: ['crus', 'pes', 'digitus', 'manus'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "face"?',
    options: ['caput', 'facies', 'oculus', 'auris'],
    correct: 1,
  },
  {
    question: 'Which facial feature is "oculus"?',
    options: ['ear', 'eye', 'nose', 'mouth'],
    correct: 1,
  },
  {
    question: 'What does "auris" mean?',
    options: ['eye', 'nose', 'ear', 'mouth'],
    correct: 2,
  },
  {
    question: 'Which facial feature is "nasus"?',
    options: ['mouth', 'nose', 'tooth', 'tongue'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "mouth"?',
    options: ['nasus', 'os', 'dens', 'lingua'],
    correct: 1,
  },
  {
    question: 'Which facial feature is "dens"?',
    options: ['tongue', 'lip', 'tooth', 'forehead'],
    correct: 2,
  },
  {
    question: 'What does "lingua" mean?',
    options: ['lip', 'tongue', 'forehead', 'face'],
    correct: 1,
  },
  {
    question: 'Which facial feature is "labrum"?',
    options: ['tongue', 'forehead', 'lip', 'eye'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "forehead"?',
    options: ['labrum', 'frons', 'facies', 'oculus'],
    correct: 1,
  },
  {
    question: 'What is the Latin word for "heart"?',
    options: ['cerebrum', 'cor', 'sanguis', 'ossa'],
    correct: 1,
  },
  {
    question: 'Which internal organ is "cerebrum"?',
    options: ['heart', 'brain', 'blood', 'bones'],
    correct: 1,
  },
  {
    question: 'What does "sanguis" mean?',
    options: ['brain', 'bones', 'blood', 'heart'],
    correct: 2,
  },
  {
    question: 'What is the Latin word for "bones" (plural)?',
    options: ['cor', 'cerebrum', 'sanguis', 'ossa'],
    correct: 3,
  },
];

export default function BodyPartsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Body parts — All lessons quiz"
      resultsHeading="Body parts — Quiz results"
      backToCategoryHref="/vocabulary/body-parts"
      backToCategoryLabel="Back to Corpus (Body Parts)"
      questions={questions}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
