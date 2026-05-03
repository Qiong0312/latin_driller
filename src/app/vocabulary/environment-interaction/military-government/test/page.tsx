import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { ENV_INTERACTION_MILITARY_QUIZ } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionMilitaryTestPage() {
  return (
    <VocabBankQuizView
      questions={ENV_INTERACTION_MILITARY_QUIZ}
      quizHeading="Military & Government — Quiz"
      resultsHeading="Military & Government — Test results"
      backToLessonHref="/vocabulary/environment-interaction/military-government"
    />
  );
}
