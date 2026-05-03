import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  DEPONENT_COMM,
  DEPONENT_EMOTION,
  DEPONENT_MOVEMENT,
  DEPONENT_SEMI,
  DEPONENT_SOCIAL,
} from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

const COMM_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Deponent verbs: communication & speech',
  outsideCategoryLatin: ['sequī', 'mīrārī', 'ūti', 'audēre', 'dīcere', 'canis', 'via', 'pāx'],
  entries: DEPONENT_COMM,
});
const MOVEMENT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Deponent verbs: movement & action',
  outsideCategoryLatin: ['loquī', 'verērī', 'fruī', 'gaudēre', 'currere', 'urbs', 'porta', 'iter'],
  entries: DEPONENT_MOVEMENT,
});
const EMOTION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Deponent verbs: emotion & thought',
  outsideCategoryLatin: ['proficīscī', 'testificārī', 'vēscī', 'solēre', 'timēre', 'cor', 'spēs', 'animus'],
  entries: DEPONENT_EMOTION,
});
const SOCIAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Deponent verbs: social & legal actions',
  outsideCategoryLatin: ['mentīrī', 'ingredī', 'hortārī', 'fīdere', 'lēx', 'forum', 'index', 'populus'],
  entries: DEPONENT_SOCIAL,
});
const SEMI_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Deponent verbs: semi-deponent verbs (advanced)',
  outsideCategoryLatin: ['loquī', 'morārī', 'cōnārī', 'esse', 'velle', 'homo', 'rēs', 'nox'],
  entries: DEPONENT_SEMI,
});

export const DEPONENT_COMM_QUIZ: QuizQuestion[] = COMM_BUILT;
export const DEPONENT_MOVEMENT_QUIZ: QuizQuestion[] = MOVEMENT_BUILT;
export const DEPONENT_EMOTION_QUIZ: QuizQuestion[] = EMOTION_BUILT;
export const DEPONENT_SOCIAL_QUIZ: QuizQuestion[] = SOCIAL_BUILT;
export const DEPONENT_SEMI_QUIZ: QuizQuestion[] = SEMI_BUILT;

export const DEPONENT_VERBS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...COMM_BUILT,
  ...MOVEMENT_BUILT,
  ...EMOTION_BUILT,
  ...SOCIAL_BUILT,
  ...SEMI_BUILT,
];
