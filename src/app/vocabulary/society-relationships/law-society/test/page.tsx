import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SOCIETY_LAW_QUIZ } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyLawSocietyTestPage() {
  return (
    <VocabBankQuizView
      questions={SOCIETY_LAW_QUIZ}
      quizHeading="Law & Society — Quiz"
      resultsHeading="Law & Society — Test results"
      backToLessonHref="/vocabulary/society-relationships/law-society"
    />
  );
}
