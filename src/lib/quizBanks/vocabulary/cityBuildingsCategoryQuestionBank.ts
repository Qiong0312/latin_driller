import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  CITY_BUILDING_PARTS,
  CITY_BUILDINGS_STRUCTURES,
  CITY_GENERAL_TERMS,
  CITY_INFRASTRUCTURE,
  CITY_PUBLIC_PLACES,
} from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

const GENERAL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'City & buildings: general city terms',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: CITY_GENERAL_TERMS,
});
const BUILDINGS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'City & buildings: buildings & structures',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: CITY_BUILDINGS_STRUCTURES,
});
const PARTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'City & buildings: parts of buildings',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: CITY_BUILDING_PARTS,
});
const PUBLIC_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'City & buildings: public places',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: CITY_PUBLIC_PLACES,
});
const INFRA_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'City & buildings: city infrastructure',
  outsideCategoryLatin: ['vulpes', 'putāre', 'ambulāre', 'cēna', 'flūmen', 'tonāre', 'fīlia', 'ursus'],
  entries: CITY_INFRASTRUCTURE,
});

export const CITY_GENERAL_TERMS_QUIZ: QuizQuestion[] = GENERAL_BUILT;
export const CITY_BUILDINGS_STRUCTURES_QUIZ: QuizQuestion[] = BUILDINGS_BUILT;
export const CITY_BUILDING_PARTS_QUIZ: QuizQuestion[] = PARTS_BUILT;
export const CITY_PUBLIC_PLACES_QUIZ: QuizQuestion[] = PUBLIC_BUILT;
export const CITY_INFRASTRUCTURE_QUIZ: QuizQuestion[] = INFRA_BUILT;

export const CITY_BUILDINGS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...GENERAL_BUILT,
  ...BUILDINGS_BUILT,
  ...PARTS_BUILT,
  ...PUBLIC_BUILT,
  ...INFRA_BUILT,
];
