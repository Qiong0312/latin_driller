import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { OCCUPATIONS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Officia (Occupations) — All lessons quiz"
      resultsHeading="Officia (Occupations) — Quiz results"
      backToCategoryHref="/vocabulary/occupations"
      backToCategoryLabel="Back to Occupations"
      questions={OCCUPATIONS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
