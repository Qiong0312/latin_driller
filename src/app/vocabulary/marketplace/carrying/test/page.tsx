import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { MARKETPLACE_CARRYING_QUIZ } from "@/lib/quizBanks/vocabulary/marketplaceCategoryQuestionBank";

export default function MarketplaceCarryingTestPage() {
  return (
    <VocabBankQuizView
      questions={MARKETPLACE_CARRYING_QUIZ}
      quizHeading="Carrying & personal items — Quiz"
      resultsHeading="Carrying & personal items — Test results"
      backToLessonHref="/vocabulary/marketplace/carrying"
    />
  );
}
