import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { DEPONENT_SOCIAL_QUIZ } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentSocialLegalTestPage() {
  return (
    <VocabBankQuizView
      questions={DEPONENT_SOCIAL_QUIZ}
      quizHeading="Social & Legal Actions — Quiz"
      resultsHeading="Social & Legal Actions — Test results"
      backToLessonHref="/vocabulary/deponent-verbs/social-legal"
    />
  );
}
