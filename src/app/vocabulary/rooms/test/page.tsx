'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { ROOMS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/roomsCategoryQuestionBank';

export default function RoomsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Rooms — All lessons quiz"
      resultsHeading="Rooms — Quiz results"
      backToCategoryHref="/vocabulary/rooms"
      backToCategoryLabel="Back to rooms vocabulary"
      questions={ROOMS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
