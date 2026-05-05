import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_PERSONALITY_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsPersonalityTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_PERSONALITY_QUIZ}
      quizHeading="Simple Personality — Quiz"
      resultsHeading="Simple Personality — Test results"
      backToLessonHref="/vocabulary/core-descriptions/personality"
    />
  );
}
