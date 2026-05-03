import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { ENV_INTERACTION_NATURE_QUIZ } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionNatureTestPage() {
  return (
    <VocabBankQuizView
      questions={ENV_INTERACTION_NATURE_QUIZ}
      quizHeading="Nature & Movement — Quiz"
      resultsHeading="Nature & Movement — Test results"
      backToLessonHref="/vocabulary/environment-interaction/nature-movement"
    />
  );
}
