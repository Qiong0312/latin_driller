import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_WATER_QUIZ } from "@/lib/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeWaterTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_WATER_QUIZ}
      quizHeading="Water — Quiz"
      resultsHeading="Water — Test results"
      backToLessonHref="/vocabulary/landscape/water"
    />
  );
}
