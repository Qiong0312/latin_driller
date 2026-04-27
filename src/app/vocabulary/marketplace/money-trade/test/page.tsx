import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { MARKETPLACE_MONEY_TRADE_QUIZ } from "@/lib/quizBanks/vocabulary/marketplaceCategoryQuestionBank";

export default function MarketplaceMoneyTradeTestPage() {
  return (
    <VocabBankQuizView
      questions={MARKETPLACE_MONEY_TRADE_QUIZ}
      quizHeading="Money & trade — Quiz"
      resultsHeading="Money & trade — Test results"
      backToLessonHref="/vocabulary/marketplace/money-trade"
    />
  );
}
