import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  CORE_DESCRIPTIONS_APPEARANCE,
  CORE_DESCRIPTIONS_CONDITION,
  CORE_DESCRIPTIONS_PERSONALITY,
  CORE_DESCRIPTIONS_PHYSICAL,
  CORE_DESCRIPTIONS_QUALITY,
  CORE_DESCRIPTIONS_SIZE,
} from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

const SIZE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: size & quantity (Magnitūdō)',
  outsideCategoryLatin: ['vidēre', 'canis', 'currere', 'pānis', 'nox', 'taberna', 'fluere', 'mater'],
  entries: CORE_DESCRIPTIONS_SIZE,
});
const QUALITY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: quality & value (Qualitās)',
  outsideCategoryLatin: ['legere', 'equus', 'sedēre', 'cibus', 'mare', 'porta', 'cadere', 'pater'],
  entries: CORE_DESCRIPTIONS_QUALITY,
});
const PHYSICAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: physical properties (Corpus / Forma)',
  outsideCategoryLatin: ['audīre', 'ovis', 'stāre', 'aqua', 'sōl', 'via', 'pluere', 'soror'],
  entries: CORE_DESCRIPTIONS_PHYSICAL,
});
const CONDITION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: condition & state (Status)',
  outsideCategoryLatin: ['amāre', 'fēlīs', 'bibere', 'ōvum', 'ventus', 'ager', 'tonāre', 'fīlius'],
  entries: CORE_DESCRIPTIONS_CONDITION,
});
const APPEARANCE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: appearance & color (Aspectus)',
  outsideCategoryLatin: ['docēre', 'porcus', 'dormīre', 'mālum', 'nix', 'urbs', 'fulgēre', 'fīlia'],
  entries: CORE_DESCRIPTIONS_APPEARANCE,
});
const PERSONALITY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core descriptions: personality (Ingenium)',
  outsideCategoryLatin: ['putāre', 'avis', 'currere', 'cēna', 'flūmen', 'collis', 'ningere', 'frāter'],
  entries: CORE_DESCRIPTIONS_PERSONALITY,
});

export const CORE_DESCRIPTIONS_SIZE_QUIZ: QuizQuestion[] = SIZE_BUILT;
export const CORE_DESCRIPTIONS_QUALITY_QUIZ: QuizQuestion[] = QUALITY_BUILT;
export const CORE_DESCRIPTIONS_PHYSICAL_QUIZ: QuizQuestion[] = PHYSICAL_BUILT;
export const CORE_DESCRIPTIONS_CONDITION_QUIZ: QuizQuestion[] = CONDITION_BUILT;
export const CORE_DESCRIPTIONS_APPEARANCE_QUIZ: QuizQuestion[] = APPEARANCE_BUILT;
export const CORE_DESCRIPTIONS_PERSONALITY_QUIZ: QuizQuestion[] = PERSONALITY_BUILT;

export const CORE_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...SIZE_BUILT,
  ...QUALITY_BUILT,
  ...PHYSICAL_BUILT,
  ...CONDITION_BUILT,
  ...APPEARANCE_BUILT,
  ...PERSONALITY_BUILT,
];
