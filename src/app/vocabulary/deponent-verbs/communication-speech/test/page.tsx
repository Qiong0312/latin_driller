import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { DEPONENT_COMM_QUIZ } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentCommunicationSpeechTestPage() {
  return (
    <VocabBankQuizView
      questions={DEPONENT_COMM_QUIZ}
      quizHeading="Communication & Speech — Quiz"
      resultsHeading="Communication & Speech — Test results"
      backToLessonHref="/vocabulary/deponent-verbs/communication-speech"
    />
  );
}
