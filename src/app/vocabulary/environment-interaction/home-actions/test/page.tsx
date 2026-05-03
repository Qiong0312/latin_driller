import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { ENV_INTERACTION_HOME_QUIZ } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionHomeActionsTestPage() {
  return (
    <VocabBankQuizView
      questions={ENV_INTERACTION_HOME_QUIZ}
      quizHeading="Home Actions — Quiz"
      resultsHeading="Home Actions — Test results"
      backToLessonHref="/vocabulary/environment-interaction/home-actions"
    />
  );
}
