import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TIME_FREQUENCY_QUIZ } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimeFrequencyOccasionTestPage() {
  return (
    <VocabBankQuizView
      questions={TIME_FREQUENCY_QUIZ}
      quizHeading="Frequency & occasion — Quiz"
      resultsHeading="Frequency & occasion — Test results"
      backToLessonHref="/vocabulary/time/frequency-occasion"
    />
  );
}
