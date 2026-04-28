import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { FAMILY_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/familyCategoryQuestionBank';

export default function FamilyCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Familia (Family Members) — All lessons quiz"
      resultsHeading="Familia (Family Members) — Quiz results"
      backToCategoryHref="/vocabulary/family"
      backToCategoryLabel="Back to Family Members"
      questions={FAMILY_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
