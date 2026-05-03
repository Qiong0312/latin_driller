import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_EMOTION_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsEmotionTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_EMOTION_QUIZ}
      quizHeading="Emotion & Desire — Quiz"
      resultsHeading="Emotion & Desire — Test results"
      backToLessonHref="/vocabulary/core-actions/emotion-desire"
    />
  );
}
