import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  EXPANDED_DESCRIPTIONS_AMOUNT,
  EXPANDED_DESCRIPTIONS_CONDITION,
  EXPANDED_DESCRIPTIONS_POSITION,
  EXPANDED_DESCRIPTIONS_SENSORY,
  EXPANDED_DESCRIPTIONS_SHAPE,
  EXPANDED_DESCRIPTIONS_SOCIAL,
  EXPANDED_DESCRIPTIONS_TIME,
} from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

const TIME_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: time & age (Tempus)',
  outsideCategoryLatin: ['magnus', 'bonus', 'vidēre', 'canis', 'ambulāre', 'nox', 'taberna', 'fluere'],
  entries: EXPANDED_DESCRIPTIONS_TIME,
});
const AMOUNT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: amount & degree (Quantitās)',
  outsideCategoryLatin: ['parvus', 'malus', 'legere', 'equus', 'sedēre', 'cibus', 'mare', 'porta'],
  entries: EXPANDED_DESCRIPTIONS_AMOUNT,
});
const SHAPE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: shape & form (Fōrma)',
  outsideCategoryLatin: ['longus', 'clarus', 'audīre', 'ovis', 'stāre', 'aqua', 'sōl', 'via'],
  entries: EXPANDED_DESCRIPTIONS_SHAPE,
});
const POSITION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: position & direction (Locus)',
  outsideCategoryLatin: ['multus', 'altus', 'amāre', 'fēlīs', 'bibere', 'ōvum', 'ventus', 'ager'],
  entries: EXPANDED_DESCRIPTIONS_POSITION,
});
const CONDITION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: condition & quality (Qualitās)',
  outsideCategoryLatin: ['paucus', 'gravis', 'docēre', 'porcus', 'dormīre', 'mālum', 'nix', 'urbs'],
  entries: EXPANDED_DESCRIPTIONS_CONDITION,
});
const SOCIAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: social & character (Ingenium)',
  outsideCategoryLatin: ['novus', 'levis', 'putāre', 'avis', 'currere', 'cēna', 'flūmen', 'collis'],
  entries: EXPANDED_DESCRIPTIONS_SOCIAL,
});
const SENSORY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Expanded descriptions: sensory & appearance (Aspectus)',
  outsideCategoryLatin: ['vetus', 'mollis', 'scīre', 'canis', 'ridēre', 'pānis', 'arbor', 'via'],
  entries: EXPANDED_DESCRIPTIONS_SENSORY,
});

export const EXPANDED_DESCRIPTIONS_TIME_QUIZ: QuizQuestion[] = TIME_BUILT;
export const EXPANDED_DESCRIPTIONS_AMOUNT_QUIZ: QuizQuestion[] = AMOUNT_BUILT;
export const EXPANDED_DESCRIPTIONS_SHAPE_QUIZ: QuizQuestion[] = SHAPE_BUILT;
export const EXPANDED_DESCRIPTIONS_POSITION_QUIZ: QuizQuestion[] = POSITION_BUILT;
export const EXPANDED_DESCRIPTIONS_CONDITION_QUIZ: QuizQuestion[] = CONDITION_BUILT;
export const EXPANDED_DESCRIPTIONS_SOCIAL_QUIZ: QuizQuestion[] = SOCIAL_BUILT;
export const EXPANDED_DESCRIPTIONS_SENSORY_QUIZ: QuizQuestion[] = SENSORY_BUILT;

export const EXPANDED_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...TIME_BUILT,
  ...AMOUNT_BUILT,
  ...SHAPE_BUILT,
  ...POSITION_BUILT,
  ...CONDITION_BUILT,
  ...SOCIAL_BUILT,
  ...SENSORY_BUILT,
];
