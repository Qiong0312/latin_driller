import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CLOTHING_BASIC_QUIZ } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingBasicTestPage() {
  return (
    <VocabBankQuizView
      questions={CLOTHING_BASIC_QUIZ}
      quizHeading="Basic clothing — Quiz"
      resultsHeading="Basic clothing — Test results"
      backToLessonHref="/vocabulary/clothing/basic-clothing"
    />
  );
}
