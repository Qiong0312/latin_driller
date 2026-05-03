import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { ENV_INTERACTION_MARKETPLACE_QUIZ } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionMarketplaceTestPage() {
  return (
    <VocabBankQuizView
      questions={ENV_INTERACTION_MARKETPLACE_QUIZ}
      quizHeading="Marketplace & Money — Quiz"
      resultsHeading="Marketplace & Money — Test results"
      backToLessonHref="/vocabulary/environment-interaction/marketplace-money"
    />
  );
}
