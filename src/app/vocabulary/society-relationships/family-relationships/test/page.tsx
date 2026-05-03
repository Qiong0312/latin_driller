import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SOCIETY_FAMILY_QUIZ } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyFamilyRelationshipsTestPage() {
  return (
    <VocabBankQuizView
      questions={SOCIETY_FAMILY_QUIZ}
      quizHeading="Family & Relationships — Quiz"
      resultsHeading="Family & Relationships — Test results"
      backToLessonHref="/vocabulary/society-relationships/family-relationships"
    />
  );
}
