import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  FOOD_BASIC_ENTRIES,
  FOOD_DRINKS_ENTRIES,
  FOOD_FRUITS_ENTRIES,
  FOOD_MEAT_ENTRIES,
  FOOD_VEGETABLES_ENTRIES,
} from '@/lib/quizBanks/vocabulary/foodVocab';

const BASIC = buildVocabularyQuestionBank({
  categoryLabel: 'Basic food',
  outsideCategoryLatin: ['Canis', 'mālum', 'fluvius', 'mercātus', 'cūbiculum', 'pānis', 'lūna', 'cāput'],
  entries: FOOD_BASIC_ENTRIES,
});
const FRUITS = buildVocabularyQuestionBank({
  categoryLabel: 'Fruits',
  outsideCategoryLatin: ['Fēlīs', 'cēna', 'terra', 'cārōta', 'equus', 'cibus', 'dormitōrium', 'nūbēs'],
  entries: FOOD_FRUITS_ENTRIES,
});
const VEG = buildVocabularyQuestionBank({
  categoryLabel: 'Vegetables',
  outsideCategoryLatin: ['pānis', 'Lēo', 'ūva', 'culīna', 'hortus', 'cēna', 'tigris', 'oculus'],
  entries: FOOD_VEGETABLES_ENTRIES,
});
const MEAT = buildVocabularyQuestionBank({
  categoryLabel: 'Meat & protein',
  outsideCategoryLatin: ['mālum', 'aqua', 'cēpa', 'ursus', 'cibus', 'bibliothēca', 'venter', 'lupus'],
  entries: FOOD_MEAT_ENTRIES,
});
const DRINKS = buildVocabularyQuestionBank({
  categoryLabel: 'Drinks & seasonings',
  outsideCategoryLatin: ['cāseus', 'porcus', 'fīcus', 'cervus', 'cō', 'gallīna', 'lēo', 'merx'],
  entries: FOOD_DRINKS_ENTRIES,
});

export const FOOD_BASIC_QUIZ: QuizQuestion[] = BASIC;
export const FOOD_FRUITS_QUIZ: QuizQuestion[] = FRUITS;
export const FOOD_VEGETABLES_QUIZ: QuizQuestion[] = VEG;
export const FOOD_MEAT_QUIZ: QuizQuestion[] = MEAT;
export const FOOD_DRINKS_QUIZ: QuizQuestion[] = DRINKS;

export const FOOD_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...BASIC,
  ...FRUITS,
  ...VEG,
  ...MEAT,
  ...DRINKS,
];
