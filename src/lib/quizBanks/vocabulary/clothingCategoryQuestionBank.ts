import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  CLOTHING_ACCESSORIES,
  CLOTHING_BASIC,
  CLOTHING_FOOTWEAR,
  CLOTHING_MATERIALS_PARTS,
  CLOTHING_OUTERWEAR,
} from '@/lib/quizBanks/vocabulary/clothingVocab';

const BASIC_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Clothing: basic clothing',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: CLOTHING_BASIC,
});
const OUTER_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Clothing: outerwear',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: CLOTHING_OUTERWEAR,
});
const FOOT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Clothing: footwear',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: CLOTHING_FOOTWEAR,
});
const ACC_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Clothing: accessories',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: CLOTHING_ACCESSORIES,
});
const MAT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Clothing: materials & parts',
  outsideCategoryLatin: ['vulpes', 'putāre', 'ambulāre', 'cēna', 'flūmen', 'tonāre', 'fīlia', 'ursus'],
  entries: CLOTHING_MATERIALS_PARTS,
});

export const CLOTHING_BASIC_QUIZ: QuizQuestion[] = BASIC_BUILT;
export const CLOTHING_OUTERWEAR_QUIZ: QuizQuestion[] = OUTER_BUILT;
export const CLOTHING_FOOTWEAR_QUIZ: QuizQuestion[] = FOOT_BUILT;
export const CLOTHING_ACCESSORIES_QUIZ: QuizQuestion[] = ACC_BUILT;
export const CLOTHING_MATERIALS_PARTS_QUIZ: QuizQuestion[] = MAT_BUILT;

export const CLOTHING_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...BASIC_BUILT,
  ...OUTER_BUILT,
  ...FOOT_BUILT,
  ...ACC_BUILT,
  ...MAT_BUILT,
];
