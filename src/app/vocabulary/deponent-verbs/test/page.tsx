'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { DEPONENT_VERBS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentVerbsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Deponent Verbs — All lessons quiz"
      resultsHeading="Deponent Verbs — Quiz results"
      backToCategoryHref="/vocabulary/deponent-verbs"
      backToCategoryLabel="Back to Deponent Verbs"
      quizFooterBackLabel="← Back to Deponent Verbs"
      questions={DEPONENT_VERBS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
