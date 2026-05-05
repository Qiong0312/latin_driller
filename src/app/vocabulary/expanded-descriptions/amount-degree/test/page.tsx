import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_AMOUNT_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsAmountDegreeTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_AMOUNT_QUIZ}
      quizHeading="Amount & Degree — Quiz"
      resultsHeading="Amount & Degree — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/amount-degree"
    />
  );
}
