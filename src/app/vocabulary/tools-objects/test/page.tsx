import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { TOOLS_OBJECTS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsObjectsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Tools & Objects (Instrumenta) — All lessons quiz"
      resultsHeading="Tools & Objects — Quiz results"
      backToCategoryHref="/vocabulary/tools-objects"
      backToCategoryLabel="Back to Tools & Objects"
      questions={TOOLS_OBJECTS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
