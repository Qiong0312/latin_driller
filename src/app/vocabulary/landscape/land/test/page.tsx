import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_LAND_QUIZ } from "@/lib/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeLandTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_LAND_QUIZ}
      quizHeading="Land & world — Quiz"
      resultsHeading="Land & world — Test results"
      backToLessonHref="/vocabulary/landscape/land"
    />
  );
}
