import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  OCCUPATIONS_ARTS_ENTERTAINMENT,
  OCCUPATIONS_CRAFTS_TRADES,
  OCCUPATIONS_EDUCATION,
  OCCUPATIONS_GENERAL,
  OCCUPATIONS_MILITARY_GOVERNMENT,
} from '@/lib/quizBanks/vocabulary/occupationsVocab';

const GENERAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Occupations: general',
  outsideCategoryLatin: ['canis', 'equus', 'pānis', 'arbor', 'fluvius', 'cubiculum', 'lupus', 'hērba'],
  entries: OCCUPATIONS_GENERAL,
});
const MILITARY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Occupations: military & government',
  outsideCategoryLatin: ['agricola', 'servus', 'magister', 'pistor', 'lūna', 'terra', 'fīlius', 'mālum'],
  entries: OCCUPATIONS_MILITARY_GOVERNMENT,
});
const EDUCATION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Occupations: education & knowledge',
  outsideCategoryLatin: ['mercātor', 'mīles', 'faber', 'cantor', 'oculus', 'venter', 'cēna', 'nix'],
  entries: OCCUPATIONS_EDUCATION,
});
const CRAFTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Occupations: crafts & trades',
  outsideCategoryLatin: ['nauta', 'discipulus', 'poēta', 'rēx', 'āvis', 'mare', 'pons', 'ager'],
  entries: OCCUPATIONS_CRAFTS_TRADES,
});
const ARTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Occupations: arts & entertainment',
  outsideCategoryLatin: ['dominus', 'custōs', 'scrība', 'coquus', 'apis', 'vulpes', 'hortus', 'via'],
  entries: OCCUPATIONS_ARTS_ENTERTAINMENT,
});

export const OCCUPATIONS_GENERAL_QUIZ: QuizQuestion[] = GENERAL_BUILT;
export const OCCUPATIONS_MILITARY_GOVERNMENT_QUIZ: QuizQuestion[] = MILITARY_BUILT;
export const OCCUPATIONS_EDUCATION_QUIZ: QuizQuestion[] = EDUCATION_BUILT;
export const OCCUPATIONS_CRAFTS_TRADES_QUIZ: QuizQuestion[] = CRAFTS_BUILT;
export const OCCUPATIONS_ARTS_ENTERTAINMENT_QUIZ: QuizQuestion[] = ARTS_BUILT;

export const OCCUPATIONS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...GENERAL_BUILT,
  ...MILITARY_BUILT,
  ...EDUCATION_BUILT,
  ...CRAFTS_BUILT,
  ...ARTS_BUILT,
];
