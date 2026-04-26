import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import { grammaticalGenderQuiz } from '@/lib/quizBanks/lessonInlinePools/grammaticalGender';
import { grammarCasesQuiz } from '@/lib/quizBanks/lessonInlinePools/grammarCases';
import { grammarDeclensionsQuiz } from '@/lib/quizBanks/lessonInlinePools/grammarDeclensions';
import { presentTenseActiveQuiz } from '@/lib/quizBanks/lessonInlinePools/presentTenseActive';
import { grammarAdjectivesQuiz } from '@/lib/quizBanks/lessonInlinePools/grammarAdjectives';
import { vocabAnimalsCommonQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabAnimalsCommon';
import { vocabAnimalsWildQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabAnimalsWild';
import { vocabAnimalsBirdsQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabAnimalsBirds';
import { vocabAnimalsSeaQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabAnimalsSea';
import { vocabAnimalsSmallQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabAnimalsSmall';
import { vocabFoodBasicQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabFoodBasic';
import { vocabFoodFruitsQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabFoodFruits';
import { vocabFoodVegetablesQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabFoodVegetables';
import { vocabFoodMeatQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabFoodMeat';
import { vocabFoodDrinksQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabFoodDrinks';
import { vocabBodyBasicQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabBodyBasic';
import { vocabBodyFaceQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabBodyFace';
import { vocabBodyInternalQuiz } from '@/lib/quizBanks/lessonInlinePools/vocabBodyInternal';
import {
  LANDSCAPE_ELEMENTS_QUIZ,
  LANDSCAPE_LAND_QUIZ,
  LANDSCAPE_MOUNTAINS_QUIZ,
  LANDSCAPE_PLANTS_QUIZ,
  LANDSCAPE_SKY_QUIZ,
  LANDSCAPE_WATER_QUIZ,
} from '@/lib/vocabulary/landscapeCategoryQuestionBank';
import {
  ROOMS_EATING_COOKING_QUIZ,
  ROOMS_GENERAL_QUIZ,
  ROOMS_LIVING_SLEEPING_QUIZ,
  ROOMS_OUTDOOR_QUIZ,
  ROOMS_STUDY_WORK_QUIZ,
  ROOMS_WASHING_QUIZ,
} from '@/lib/vocabulary/roomsSubLessonQuestionBanks';

const LESSON_TO_POOL: Record<string, QuizQuestion[]> = {
  '/grammar/grammatical-gender': grammaticalGenderQuiz,
  '/grammar/cases': grammarCasesQuiz,
  '/grammar/declensions': grammarDeclensionsQuiz,
  '/grammar/present-tense-active': presentTenseActiveQuiz,
  '/grammar/adjectives': grammarAdjectivesQuiz,
  '/vocabulary/animals/common': vocabAnimalsCommonQuiz,
  '/vocabulary/animals/wild': vocabAnimalsWildQuiz,
  '/vocabulary/animals/birds': vocabAnimalsBirdsQuiz,
  '/vocabulary/animals/sea': vocabAnimalsSeaQuiz,
  '/vocabulary/animals/small': vocabAnimalsSmallQuiz,
  '/vocabulary/food/basic': vocabFoodBasicQuiz,
  '/vocabulary/food/fruits': vocabFoodFruitsQuiz,
  '/vocabulary/food/vegetables': vocabFoodVegetablesQuiz,
  '/vocabulary/food/meat': vocabFoodMeatQuiz,
  '/vocabulary/food/drinks': vocabFoodDrinksQuiz,
  '/vocabulary/body-parts/basic': vocabBodyBasicQuiz,
  '/vocabulary/body-parts/face': vocabBodyFaceQuiz,
  '/vocabulary/body-parts/internal': vocabBodyInternalQuiz,
  '/vocabulary/rooms/living-sleeping': ROOMS_LIVING_SLEEPING_QUIZ,
  '/vocabulary/rooms/eating-cooking': ROOMS_EATING_COOKING_QUIZ,
  '/vocabulary/rooms/general': ROOMS_GENERAL_QUIZ,
  '/vocabulary/rooms/washing': ROOMS_WASHING_QUIZ,
  '/vocabulary/rooms/study-work': ROOMS_STUDY_WORK_QUIZ,
  '/vocabulary/rooms/outdoor': ROOMS_OUTDOOR_QUIZ,
  '/vocabulary/landscape/land': LANDSCAPE_LAND_QUIZ,
  '/vocabulary/landscape/mountains': LANDSCAPE_MOUNTAINS_QUIZ,
  '/vocabulary/landscape/water': LANDSCAPE_WATER_QUIZ,
  '/vocabulary/landscape/plants': LANDSCAPE_PLANTS_QUIZ,
  '/vocabulary/landscape/sky-weather': LANDSCAPE_SKY_QUIZ,
  '/vocabulary/landscape/elements': LANDSCAPE_ELEMENTS_QUIZ,
};

export function getQuizPoolForLesson(lessonPath: string): QuizQuestion[] | null {
  const pool = LESSON_TO_POOL[lessonPath];
  if (!pool || pool.length === 0) {
    return null;
  }
  return pool;
}
