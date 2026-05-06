import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CLOTHING_FOOTWEAR_QUIZ } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingFootwearTestPage() {
  return (
    <VocabBankQuizView
      questions={CLOTHING_FOOTWEAR_QUIZ}
      quizHeading="Footwear — Quiz"
      resultsHeading="Footwear — Test results"
      backToLessonHref="/vocabulary/clothing/footwear"
    />
  );
}
