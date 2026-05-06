import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  TIME_BASIC_UNITS,
  TIME_FREQUENCY,
  TIME_LARGER_UNITS,
  TIME_MOMENTS_PERIODS,
  TIME_PARTS_OF_DAY,
} from '@/lib/quizBanks/vocabulary/timeVocab';

const BASIC_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Time nouns: basic units (Tempora Fundamentālia)',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: TIME_BASIC_UNITS,
});
const LARGER_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Time nouns: larger units (Tempora Maiōra)',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: TIME_LARGER_UNITS,
});
const PARTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Time nouns: parts of the day (Partēs Diēī)',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: TIME_PARTS_OF_DAY,
});
const MOMENTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Time nouns: moments & periods',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: TIME_MOMENTS_PERIODS,
});
const FREQ_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Time nouns: frequency & occasion',
  outsideCategoryLatin: ['vulpes', 'putāre', 'ambulāre', 'apis', 'cēna', 'flūmen', 'tonāre', 'fīlia'],
  entries: TIME_FREQUENCY,
});

export const TIME_BASIC_UNITS_QUIZ: QuizQuestion[] = BASIC_BUILT;
export const TIME_LARGER_UNITS_QUIZ: QuizQuestion[] = LARGER_BUILT;
export const TIME_PARTS_OF_DAY_QUIZ: QuizQuestion[] = PARTS_BUILT;
export const TIME_MOMENTS_PERIODS_QUIZ: QuizQuestion[] = MOMENTS_BUILT;
export const TIME_FREQUENCY_QUIZ: QuizQuestion[] = FREQ_BUILT;

export const TIME_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...BASIC_BUILT,
  ...LARGER_BUILT,
  ...PARTS_BUILT,
  ...MOMENTS_BUILT,
  ...FREQ_BUILT,
];
