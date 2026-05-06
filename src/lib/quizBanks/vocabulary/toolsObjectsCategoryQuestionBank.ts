import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  TOOLS_CUTTING_WORK,
  TOOLS_EVERYDAY,
  TOOLS_GENERAL,
  TOOLS_HOUSEHOLD,
  TOOLS_SMALL_USEFUL,
} from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

const GEN_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Tools & objects: general tools',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: TOOLS_GENERAL,
});
const CUT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Tools & objects: cutting & work tools',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: TOOLS_CUTTING_WORK,
});
const HH_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Tools & objects: household objects',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: TOOLS_HOUSEHOLD,
});
const DAY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Tools & objects: everyday objects',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: TOOLS_EVERYDAY,
});
const SMALL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Tools & objects: small useful items',
  outsideCategoryLatin: ['vulpes', 'putāre', 'ambulāre', 'cēna', 'flūmen', 'tonāre', 'fīlia', 'ursus'],
  entries: TOOLS_SMALL_USEFUL,
});

export const TOOLS_GENERAL_QUIZ: QuizQuestion[] = GEN_BUILT;
export const TOOLS_CUTTING_WORK_QUIZ: QuizQuestion[] = CUT_BUILT;
export const TOOLS_HOUSEHOLD_QUIZ: QuizQuestion[] = HH_BUILT;
export const TOOLS_EVERYDAY_QUIZ: QuizQuestion[] = DAY_BUILT;
export const TOOLS_SMALL_USEFUL_QUIZ: QuizQuestion[] = SMALL_BUILT;

export const TOOLS_OBJECTS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...GEN_BUILT,
  ...CUT_BUILT,
  ...HH_BUILT,
  ...DAY_BUILT,
  ...SMALL_BUILT,
];
