import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_SOCIAL_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsSocialCharacterTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_SOCIAL_QUIZ}
      quizHeading="Social & Character — Quiz"
      resultsHeading="Social & Character — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/social-character"
    />
  );
}
