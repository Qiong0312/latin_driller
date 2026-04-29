import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { OCCUPATIONS_EDUCATION_QUIZ } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsEducationTestPage() {
  return (
    <VocabBankQuizView
      questions={OCCUPATIONS_EDUCATION_QUIZ}
      quizHeading="Education & knowledge — Quiz"
      resultsHeading="Education & knowledge — Test results"
      backToLessonHref="/vocabulary/occupations/education"
    />
  );
}
