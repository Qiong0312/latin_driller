import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import { grammarAdjectivesQuiz } from '@/lib/quizBanks/grammar/grammarAdjectives';
import { grammarCasesQuiz } from '@/lib/quizBanks/grammar/grammarCases';
import { grammarDeclensionsQuiz } from '@/lib/quizBanks/grammar/grammarDeclensions';
import { grammaticalGenderQuiz } from '@/lib/quizBanks/grammar/grammaticalGender';
import { presentTenseActiveQuiz } from '@/lib/quizBanks/grammar/presentTenseActive';
import { relativePronounQuiz } from '@/lib/quizBanks/grammar/relativePronoun';
import { adjectivesAdverbialForceQuiz } from '@/lib/quizBanks/grammar/adjectivesAdverbialForce';
import { imperativeQuiz } from '@/lib/quizBanks/grammar/imperative';
import { neQuestionsQuiz } from '@/lib/quizBanks/grammar/neQuestions';
import { demonstrativePronounsIQuiz } from '@/lib/quizBanks/grammar/demonstrativePronounsI';
import { demonstrativePronounsIIQuiz } from '@/lib/quizBanks/grammar/demonstrativePronounsII';
import { demonstrativePronounsIIIQuiz } from '@/lib/quizBanks/grammar/demonstrativePronounsIII';
import { demonstrativePronounsIVQuiz } from '@/lib/quizBanks/grammar/demonstrativePronounsIV';
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
  FAMILY_EXTENDED_QUIZ,
  FAMILY_IMMEDIATE_QUIZ,
  FAMILY_OTHER_RELATIONS_QUIZ,
} from '@/lib/quizBanks/vocabulary/familyCategoryQuestionBank';
import {
  OCCUPATIONS_ARTS_ENTERTAINMENT_QUIZ,
  OCCUPATIONS_CRAFTS_TRADES_QUIZ,
  OCCUPATIONS_EDUCATION_QUIZ,
  OCCUPATIONS_GENERAL_QUIZ,
  OCCUPATIONS_MILITARY_GOVERNMENT_QUIZ,
} from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';
import {
  ROOMS_EATING_COOKING_QUIZ,
  ROOMS_GENERAL_QUIZ,
  ROOMS_LIVING_SLEEPING_QUIZ,
  ROOMS_OUTDOOR_QUIZ,
  ROOMS_STUDY_WORK_QUIZ,
  ROOMS_WASHING_QUIZ,
} from '@/lib/quizBanks/vocabulary/roomsCategoryQuestionBank';
import {
  CORE_ACTIONS_COMM_QUIZ,
  CORE_ACTIONS_DAILY_QUIZ,
  CORE_ACTIONS_EMOTION_QUIZ,
  CORE_ACTIONS_SENS_QUIZ,
  CORE_ACTIONS_THINK_QUIZ,
} from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';
import {
  ENV_INTERACTION_HOME_QUIZ,
  ENV_INTERACTION_MARKETPLACE_QUIZ,
  ENV_INTERACTION_MILITARY_QUIZ,
  ENV_INTERACTION_NATURE_QUIZ,
  ENV_INTERACTION_WEATHER_QUIZ,
} from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';
import {
  SOCIETY_FAMILY_QUIZ,
  SOCIETY_LAW_QUIZ,
  SOCIETY_LEARNING_QUIZ,
  SOCIETY_RELIGION_QUIZ,
  SOCIETY_TRAVEL_QUIZ,
} from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';
import {
  IRREGULAR_VERBS_COMMON_QUIZ,
  IRREGULAR_VERBS_COMPOUND_QUIZ,
  IRREGULAR_VERBS_ESSENTIAL_QUIZ,
} from '@/lib/quizBanks/vocabulary/irregularVerbsCategoryQuestionBank';
import {
  DEPONENT_COMM_QUIZ,
  DEPONENT_EMOTION_QUIZ,
  DEPONENT_MOVEMENT_QUIZ,
  DEPONENT_SEMI_QUIZ,
  DEPONENT_SOCIAL_QUIZ,
} from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

const LESSON_TO_POOL: Record<string, QuizQuestion[]> = {
  '/grammar/grammatical-gender': grammaticalGenderQuiz,
  '/grammar/cases': grammarCasesQuiz,
  '/grammar/declensions': grammarDeclensionsQuiz,
  '/grammar/present-tense-active': presentTenseActiveQuiz,
  '/grammar/adjectives': grammarAdjectivesQuiz,
  '/grammar/relative-pronoun': relativePronounQuiz,
  '/grammar/adjectives-adverbial-force': adjectivesAdverbialForceQuiz,
  '/grammar/imperative': imperativeQuiz,
  '/grammar/ne-questions': neQuestionsQuiz,
  '/grammar/demonstrative-pronouns-i': demonstrativePronounsIQuiz,
  '/grammar/demonstrative-pronouns-ii': demonstrativePronounsIIQuiz,
  '/grammar/demonstrative-pronouns-iii': demonstrativePronounsIIIQuiz,
  '/grammar/demonstrative-pronouns-iv': demonstrativePronounsIVQuiz,
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
  '/vocabulary/family/immediate-family': FAMILY_IMMEDIATE_QUIZ,
  '/vocabulary/family/extended-family': FAMILY_EXTENDED_QUIZ,
  '/vocabulary/family/other-relations': FAMILY_OTHER_RELATIONS_QUIZ,
  '/vocabulary/occupations/general': OCCUPATIONS_GENERAL_QUIZ,
  '/vocabulary/occupations/military-government': OCCUPATIONS_MILITARY_GOVERNMENT_QUIZ,
  '/vocabulary/occupations/education': OCCUPATIONS_EDUCATION_QUIZ,
  '/vocabulary/occupations/crafts-trades': OCCUPATIONS_CRAFTS_TRADES_QUIZ,
  '/vocabulary/occupations/arts-entertainment': OCCUPATIONS_ARTS_ENTERTAINMENT_QUIZ,
  '/vocabulary/core-actions/daily-actions': CORE_ACTIONS_DAILY_QUIZ,
  '/vocabulary/core-actions/senses-perception': CORE_ACTIONS_SENS_QUIZ,
  '/vocabulary/core-actions/communication': CORE_ACTIONS_COMM_QUIZ,
  '/vocabulary/core-actions/thinking-knowing': CORE_ACTIONS_THINK_QUIZ,
  '/vocabulary/core-actions/emotion-desire': CORE_ACTIONS_EMOTION_QUIZ,
  '/vocabulary/environment-interaction/home-actions': ENV_INTERACTION_HOME_QUIZ,
  '/vocabulary/environment-interaction/marketplace-money': ENV_INTERACTION_MARKETPLACE_QUIZ,
  '/vocabulary/environment-interaction/military-government': ENV_INTERACTION_MILITARY_QUIZ,
  '/vocabulary/environment-interaction/nature-movement': ENV_INTERACTION_NATURE_QUIZ,
  '/vocabulary/environment-interaction/weather-phenomena': ENV_INTERACTION_WEATHER_QUIZ,
  '/vocabulary/society-relationships/family-relationships': SOCIETY_FAMILY_QUIZ,
  '/vocabulary/society-relationships/learning-teaching': SOCIETY_LEARNING_QUIZ,
  '/vocabulary/society-relationships/travel-exploration': SOCIETY_TRAVEL_QUIZ,
  '/vocabulary/society-relationships/religion-ritual': SOCIETY_RELIGION_QUIZ,
  '/vocabulary/society-relationships/law-society': SOCIETY_LAW_QUIZ,
  '/vocabulary/irregular-verbs/essential': IRREGULAR_VERBS_ESSENTIAL_QUIZ,
  '/vocabulary/irregular-verbs/common-irregulars': IRREGULAR_VERBS_COMMON_QUIZ,
  '/vocabulary/irregular-verbs/compound': IRREGULAR_VERBS_COMPOUND_QUIZ,
  '/vocabulary/deponent-verbs/communication-speech': DEPONENT_COMM_QUIZ,
  '/vocabulary/deponent-verbs/movement-action': DEPONENT_MOVEMENT_QUIZ,
  '/vocabulary/deponent-verbs/emotion-thought': DEPONENT_EMOTION_QUIZ,
  '/vocabulary/deponent-verbs/social-legal': DEPONENT_SOCIAL_QUIZ,
  '/vocabulary/deponent-verbs/semi-deponent': DEPONENT_SEMI_QUIZ,
};

export function getQuizPoolForLesson(lessonPath: string): QuizQuestion[] | null {
  const pool = LESSON_TO_POOL[lessonPath];
  if (!pool || pool.length === 0) {
    return null;
  }
  return pool;
}
