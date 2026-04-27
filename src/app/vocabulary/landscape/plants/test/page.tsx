import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_PLANTS_QUIZ } from "@/lib/quizBanks/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapePlantsTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_PLANTS_QUIZ}
      quizHeading="Plants & nature — Quiz"
      resultsHeading="Plants & nature — Test results"
      backToLessonHref="/vocabulary/landscape/plants"
    />
  );
}
