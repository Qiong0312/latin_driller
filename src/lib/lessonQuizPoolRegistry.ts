import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import { grammarAdjectivesQuiz } from '@/lib/quizBanks/grammar/grammarAdjectives';
import { grammarCasesQuiz } from '@/lib/quizBanks/grammar/grammarCases';
import { grammarDeclensionsQuiz } from '@/lib/quizBanks/grammar/grammarDeclensions';
import { grammaticalGenderQuiz } from '@/lib/quizBanks/grammar/grammaticalGender';
import { presentTenseActiveQuiz } from '@/lib/quizBanks/grammar/presentTenseActive';
import {
  ANIMALS_BIRDS_QUIZ,
  ANIMALS_COMMON_QUIZ,
  ANIMALS_SEA_QUIZ,
  ANIMALS_SMALL_QUIZ,
  ANIMALS_WILD_QUIZ,
} from '@/lib/quizBanks/vocabulary/animalsCategoryQuestionBank';
import {
  BODY_PARTS_BASIC_QUIZ,
  BODY_PARTS_FACE_QUIZ,
  BODY_PARTS_INTERNAL_QUIZ,
} from '@/lib/quizBanks/vocabulary/bodyPartsCategoryQuestionBank';
import {
  FOOD_BASIC_QUIZ,
  FOOD_DRINKS_QUIZ,
  FOOD_FRUITS_QUIZ,
  FOOD_MEAT_QUIZ,
  FOOD_VEGETABLES_QUIZ,
} from '@/lib/quizBanks/vocabulary/foodCategoryQuestionBank';
import {
  LANDSCAPE_ELEMENTS_QUIZ,
  LANDSCAPE_LAND_QUIZ,
  LANDSCAPE_MOUNTAINS_QUIZ,
  LANDSCAPE_PLANTS_QUIZ,
  LANDSCAPE_SKY_QUIZ,
  LANDSCAPE_WATER_QUIZ,
} from '@/lib/quizBanks/vocabulary/landscapeCategoryQuestionBank';
import {
  MARKETPLACE_CARRYING_QUIZ,
  MARKETPLACE_EQUIPMENT_QUIZ,
  MARKETPLACE_MONEY_TRADE_QUIZ,
  MARKETPLACE_PLACES_PEOPLE_QUIZ,
} from '@/lib/quizBanks/vocabulary/marketplaceCategoryQuestionBank';
import {
  ROOMS_EATING_COOKING_QUIZ,
  ROOMS_GENERAL_QUIZ,
  ROOMS_LIVING_SLEEPING_QUIZ,
  ROOMS_OUTDOOR_QUIZ,
  ROOMS_STUDY_WORK_QUIZ,
  ROOMS_WASHING_QUIZ,
} from '@/lib/quizBanks/vocabulary/roomsCategoryQuestionBank';

const LESSON_TO_POOL: Record<string, QuizQuestion[]> = {
  '/grammar/grammatical-gender': grammaticalGenderQuiz,
  '/grammar/cases': grammarCasesQuiz,
  '/grammar/declensions': grammarDeclensionsQuiz,
  '/grammar/present-tense-active': presentTenseActiveQuiz,
  '/grammar/adjectives': grammarAdjectivesQuiz,
  '/vocabulary/animals/common': ANIMALS_COMMON_QUIZ,
  '/vocabulary/animals/wild': ANIMALS_WILD_QUIZ,
  '/vocabulary/animals/birds': ANIMALS_BIRDS_QUIZ,
  '/vocabulary/animals/sea': ANIMALS_SEA_QUIZ,
  '/vocabulary/animals/small': ANIMALS_SMALL_QUIZ,
  '/vocabulary/food/basic': FOOD_BASIC_QUIZ,
  '/vocabulary/food/fruits': FOOD_FRUITS_QUIZ,
  '/vocabulary/food/vegetables': FOOD_VEGETABLES_QUIZ,
  '/vocabulary/food/meat': FOOD_MEAT_QUIZ,
  '/vocabulary/food/drinks': FOOD_DRINKS_QUIZ,
  '/vocabulary/body-parts/basic': BODY_PARTS_BASIC_QUIZ,
  '/vocabulary/body-parts/face': BODY_PARTS_FACE_QUIZ,
  '/vocabulary/body-parts/internal': BODY_PARTS_INTERNAL_QUIZ,
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
  '/vocabulary/marketplace/places-people': MARKETPLACE_PLACES_PEOPLE_QUIZ,
  '/vocabulary/marketplace/money-trade': MARKETPLACE_MONEY_TRADE_QUIZ,
  '/vocabulary/marketplace/carrying': MARKETPLACE_CARRYING_QUIZ,
  '/vocabulary/marketplace/equipment': MARKETPLACE_EQUIPMENT_QUIZ,
};

export function getQuizPoolForLesson(lessonPath: string): QuizQuestion[] | null {
  const pool = LESSON_TO_POOL[lessonPath];
  if (!pool || pool.length === 0) {
    return null;
  }
  return pool;
}
