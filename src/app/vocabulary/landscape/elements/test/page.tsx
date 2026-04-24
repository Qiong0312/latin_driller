import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_ELEMENTS_QUIZ } from "@/lib/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeElementsTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_ELEMENTS_QUIZ}
      quizHeading="Natural elements — Quiz"
      resultsHeading="Natural elements — Test results"
      backToLessonHref="/vocabulary/landscape/elements"
    />
  );
}
