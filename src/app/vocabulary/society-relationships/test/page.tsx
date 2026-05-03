'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { SOCIETY_RELATIONSHIPS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyRelationshipsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Society & Relationships — All lessons quiz"
      resultsHeading="Society & Relationships — Quiz results"
      backToCategoryHref="/vocabulary/society-relationships"
      backToCategoryLabel="Back to Society & Relationships"
      quizFooterBackLabel="← Back to Society & Relationships"
      questions={SOCIETY_RELATIONSHIPS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
