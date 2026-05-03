import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SOCIETY_RELIGION_QUIZ } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyReligionRitualTestPage() {
  return (
    <VocabBankQuizView
      questions={SOCIETY_RELIGION_QUIZ}
      quizHeading="Religion & Ritual — Quiz"
      resultsHeading="Religion & Ritual — Test results"
      backToLessonHref="/vocabulary/society-relationships/religion-ritual"
    />
  );
}
