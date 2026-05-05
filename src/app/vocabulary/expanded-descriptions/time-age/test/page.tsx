import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_TIME_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsTimeAgeTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_TIME_QUIZ}
      quizHeading="Time & Age — Quiz"
      resultsHeading="Time & Age — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/time-age"
    />
  );
}
