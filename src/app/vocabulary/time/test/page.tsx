import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { TIME_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimeCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Time nouns (Tempus) — All lessons quiz"
      resultsHeading="Time nouns (Tempus) — Quiz results"
      backToCategoryHref="/vocabulary/time"
      backToCategoryLabel="Back to Time"
      questions={TIME_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
