import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { DEPONENT_EMOTION_QUIZ } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentEmotionThoughtTestPage() {
  return (
    <VocabBankQuizView
      questions={DEPONENT_EMOTION_QUIZ}
      quizHeading="Emotion & Thought — Quiz"
      resultsHeading="Emotion & Thought — Test results"
      backToLessonHref="/vocabulary/deponent-verbs/emotion-thought"
    />
  );
}
