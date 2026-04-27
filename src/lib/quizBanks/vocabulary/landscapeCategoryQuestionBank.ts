import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  LANDSCAPE_ELEMENTS,
  LANDSCAPE_LAND,
  LANDSCAPE_MOUNTAINS,
  LANDSCAPE_PLANTS,
  LANDSCAPE_SKY,
  LANDSCAPE_WATER,
} from '@/lib/quizBanks/vocabulary/landscapeVocab';

const LAND_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Land & World',
  outsideCategoryLatin: [
    'canis',
    'mālum',
    'cūbiculum',
    'ōvum',
    'hērba',
    'cēna',
    'cervus',
    'dēns',
  ],
  entries: LANDSCAPE_LAND,
});
const MOUNTAINS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Mountains & Landforms',
  outsideCategoryLatin: [
    'aqua',
    'terra',
    'equus',
    'lēctus',
    'pānis',
    'cāseus',
    'canis',
    'Āvis',
  ],
  entries: LANDSCAPE_MOUNTAINS,
});
const WATER_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Water',
  outsideCategoryLatin: [
    'pōrcus',
    'capra',
    'locus',
    'arbor',
    'sōl',
    'tāblīnum',
    'cibus',
    'cūbiculum',
  ],
  entries: LANDSCAPE_WATER,
});
const PLANTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Plants & Nature',
  outsideCategoryLatin: [
    'lēo',
    'āger',
    'māre',
    'nūbēs',
    'pānis',
    'digitus',
    'ventus',
    'lupus',
  ],
  entries: LANDSCAPE_PLANTS,
});
const SKY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Sky & Weather',
  outsideCategoryLatin: [
    'ursus',
    'sāxum',
    'lacus',
    'fungus',
    'cibus',
    'mūs',
    'rāna',
    'canis',
  ],
  entries: LANDSCAPE_SKY,
});
const ELEMENTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Natural Elements',
  outsideCategoryLatin: [
    'mundus',
    'aquila',
    'terra',
    'piscis',
    'frōns',
    'cēpa',
    'oculus',
    'cibus',
  ],
  entries: LANDSCAPE_ELEMENTS,
});

export const LANDSCAPE_LAND_QUIZ: QuizQuestion[] = LAND_BUILT;
export const LANDSCAPE_MOUNTAINS_QUIZ: QuizQuestion[] = MOUNTAINS_BUILT;
export const LANDSCAPE_WATER_QUIZ: QuizQuestion[] = WATER_BUILT;
export const LANDSCAPE_PLANTS_QUIZ: QuizQuestion[] = PLANTS_BUILT;
export const LANDSCAPE_SKY_QUIZ: QuizQuestion[] = SKY_BUILT;
export const LANDSCAPE_ELEMENTS_QUIZ: QuizQuestion[] = ELEMENTS_BUILT;

/**
 * All landscape sub-lesson question banks, concatenated (all-lessons category quiz).
 */
export const LANDSCAPE_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...LAND_BUILT,
  ...MOUNTAINS_BUILT,
  ...WATER_BUILT,
  ...PLANTS_BUILT,
  ...SKY_BUILT,
  ...ELEMENTS_BUILT,
];
