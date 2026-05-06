import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CLOTHING_MATERIALS_PARTS_QUIZ } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingMaterialsPartsTestPage() {
  return (
    <VocabBankQuizView
      questions={CLOTHING_MATERIALS_PARTS_QUIZ}
      quizHeading="Materials & parts — Quiz"
      resultsHeading="Materials & parts — Test results"
      backToLessonHref="/vocabulary/clothing/materials-parts"
    />
  );
}
