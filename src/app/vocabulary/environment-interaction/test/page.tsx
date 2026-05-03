'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { ENVIRONMENT_INTERACTION_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Environment & Interaction — All lessons quiz"
      resultsHeading="Environment & Interaction — Quiz results"
      backToCategoryHref="/vocabulary/environment-interaction"
      backToCategoryLabel="Back to Environment & Interaction"
      quizFooterBackLabel="← Back to Environment & Interaction"
      questions={ENVIRONMENT_INTERACTION_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
