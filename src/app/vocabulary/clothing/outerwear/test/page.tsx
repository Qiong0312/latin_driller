import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CLOTHING_OUTERWEAR_QUIZ } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingOuterwearTestPage() {
  return (
    <VocabBankQuizView
      questions={CLOTHING_OUTERWEAR_QUIZ}
      quizHeading="Outerwear — Quiz"
      resultsHeading="Outerwear — Test results"
      backToLessonHref="/vocabulary/clothing/outerwear"
    />
  );
}
