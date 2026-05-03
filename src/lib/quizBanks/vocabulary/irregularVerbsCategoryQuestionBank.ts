import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  IRREGULAR_VERBS_COMMON,
  IRREGULAR_VERBS_COMPOUND,
  IRREGULAR_VERBS_ESSENTIAL,
} from '@/lib/quizBanks/vocabulary/irregularVerbsVocab';

const ESSENTIAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Irregular verbs: essential irregular verbs',
  outsideCategoryLatin: ['dare', 'abesse', 'ambulāre', 'vidēre', 'canis', 'pāx', 'via', 'nox'],
  entries: IRREGULAR_VERBS_ESSENTIAL,
});
const COMMON_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Irregular verbs: common high-frequency irregulars',
  outsideCategoryLatin: ['esse', 'redīre', 'loquī', 'currere', 'liber', 'māns', 'cibus', 'ager'],
  entries: IRREGULAR_VERBS_COMMON,
});
const COMPOUND_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Irregular verbs: compound irregular verbs',
  outsideCategoryLatin: ['velle', 'inquam', 'facere', 'tenēre', 'urbs', 'forum', 'mare', 'homo'],
  entries: IRREGULAR_VERBS_COMPOUND,
});

export const IRREGULAR_VERBS_ESSENTIAL_QUIZ: QuizQuestion[] = ESSENTIAL_BUILT;
export const IRREGULAR_VERBS_COMMON_QUIZ: QuizQuestion[] = COMMON_BUILT;
export const IRREGULAR_VERBS_COMPOUND_QUIZ: QuizQuestion[] = COMPOUND_BUILT;

export const IRREGULAR_VERBS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...ESSENTIAL_BUILT,
  ...COMMON_BUILT,
  ...COMPOUND_BUILT,
];
