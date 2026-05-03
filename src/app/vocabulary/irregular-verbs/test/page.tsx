'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { IRREGULAR_VERBS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/irregularVerbsCategoryQuestionBank';

export default function IrregularVerbsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Irregular Verbs — All lessons quiz"
      resultsHeading="Irregular Verbs — Quiz results"
      backToCategoryHref="/vocabulary/irregular-verbs"
      backToCategoryLabel="Back to Irregular Verbs"
      quizFooterBackLabel="← Back to Irregular Verbs"
      questions={IRREGULAR_VERBS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
