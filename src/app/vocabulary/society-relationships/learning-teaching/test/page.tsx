import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SOCIETY_LEARNING_QUIZ } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyLearningTeachingTestPage() {
  return (
    <VocabBankQuizView
      questions={SOCIETY_LEARNING_QUIZ}
      quizHeading="Learning & Teaching — Quiz"
      resultsHeading="Learning & Teaching — Test results"
      backToLessonHref="/vocabulary/society-relationships/learning-teaching"
    />
  );
}
