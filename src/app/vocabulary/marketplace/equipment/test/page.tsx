import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { MARKETPLACE_EQUIPMENT_QUIZ } from "@/lib/quizBanks/vocabulary/marketplaceCategoryQuestionBank";

export default function MarketplaceEquipmentTestPage() {
  return (
    <VocabBankQuizView
      questions={MARKETPLACE_EQUIPMENT_QUIZ}
      quizHeading="Equipment & setting — Quiz"
      resultsHeading="Equipment & setting — Test results"
      backToLessonHref="/vocabulary/marketplace/equipment"
    />
  );
}
