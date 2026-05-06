import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CLOTHING_ACCESSORIES_QUIZ } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingAccessoriesTestPage() {
  return (
    <VocabBankQuizView
      questions={CLOTHING_ACCESSORIES_QUIZ}
      quizHeading="Accessories — Quiz"
      resultsHeading="Accessories — Test results"
      backToLessonHref="/vocabulary/clothing/accessories"
    />
  );
}
