import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  CORE_ACTIONS_COMM,
  CORE_ACTIONS_DAILY,
  CORE_ACTIONS_EMOTION,
  CORE_ACTIONS_IRREGULAR,
  CORE_ACTIONS_SENS,
  CORE_ACTIONS_THINK,
} from '@/lib/quizBanks/vocabulary/coreActionsVocab';

const DAILY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: daily actions (Āctiōnēs cotīdiānae)',
  outsideCategoryLatin: ['vidēre', 'audīre', 'esse', 'loquī', 'canis', 'pānis', 'arbor', 'fluvius'],
  entries: CORE_ACTIONS_DAILY,
});
const SENS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: senses & perception (Sēnsūs)',
  outsideCategoryLatin: ['ambulāre', 'dīcere', 'velle', 'facere', 'equus', 'mālum', 'terra', 'nox'],
  entries: CORE_ACTIONS_SENS,
});
const COMM_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: communication (Cōnloquium)',
  outsideCategoryLatin: ['currere', 'vidēre', 'posse', 'timēre', 'taberna', 'cibus', 'via', 'hērba'],
  entries: CORE_ACTIONS_COMM,
});
const THINK_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: thinking & knowing',
  outsideCategoryLatin: ['sedēre', 'vocāre', 'esse', 'venīre', 'oculus', 'māns', 'cēna', 'nix'],
  entries: CORE_ACTIONS_THINK,
});
const EMOTION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: emotion & desire',
  outsideCategoryLatin: ['stāre', 'rogāre', 'īre', 'ferre', 'cor', 'pater', 'sōl', 'pluvia'],
  entries: CORE_ACTIONS_EMOTION,
});
const IRREG_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Core actions: core irregular verbs',
  outsideCategoryLatin: ['dormīre', 'spectāre', 'amāre', 'discere', 'canis', 'frūctus', 'mare', 'ager'],
  entries: CORE_ACTIONS_IRREGULAR,
});

export const CORE_ACTIONS_DAILY_QUIZ: QuizQuestion[] = DAILY_BUILT;
export const CORE_ACTIONS_SENS_QUIZ: QuizQuestion[] = SENS_BUILT;
export const CORE_ACTIONS_COMM_QUIZ: QuizQuestion[] = COMM_BUILT;
export const CORE_ACTIONS_THINK_QUIZ: QuizQuestion[] = THINK_BUILT;
export const CORE_ACTIONS_EMOTION_QUIZ: QuizQuestion[] = EMOTION_BUILT;
export const CORE_ACTIONS_IRREGULAR_QUIZ: QuizQuestion[] = IRREG_BUILT;

export const CORE_ACTIONS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...DAILY_BUILT,
  ...SENS_BUILT,
  ...COMM_BUILT,
  ...THINK_BUILT,
  ...EMOTION_BUILT,
  ...IRREG_BUILT,
];
