import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_MOUNTAINS_QUIZ } from "@/lib/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeMountainsTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_MOUNTAINS_QUIZ}
      quizHeading="Mountains & landforms — Quiz"
      resultsHeading="Mountains & landforms — Test results"
      backToLessonHref="/vocabulary/landscape/mountains"
    />
  );
}
