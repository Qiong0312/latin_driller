import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  TRAVEL_CONDITIONS,
  TRAVEL_DIRECTIONS_DISTANCE,
  TRAVEL_ENTRY_PASSAGE,
  TRAVEL_JOURNEY_MOVEMENT,
  TRAVEL_PLACES_LOCATIONS,
  TRAVEL_TRANSPORT_MEANS,
} from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

const JOURNEY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: journey & movement',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: TRAVEL_JOURNEY_MOVEMENT,
});
const PLACES_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: places & locations',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: TRAVEL_PLACES_LOCATIONS,
});
const ENTRY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: entry & passage',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: TRAVEL_ENTRY_PASSAGE,
});
const DIRECTIONS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: directions & distance',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: TRAVEL_DIRECTIONS_DISTANCE,
});
const CONDITIONS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: travel conditions',
  outsideCategoryLatin: ['vulpes', 'putāre', 'ambulāre', 'cēna', 'flūmen', 'tonāre', 'fīlia', 'ursus'],
  entries: TRAVEL_CONDITIONS,
});
const TRANSPORT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Travel & roads: transport & travel means',
  outsideCategoryLatin: ['lepus', 'capere', 'mittere', 'tigris', 'mel', 'lacus', 'clāmāre', 'nātus'],
  entries: TRAVEL_TRANSPORT_MEANS,
});

export const TRAVEL_JOURNEY_MOVEMENT_QUIZ: QuizQuestion[] = JOURNEY_BUILT;
export const TRAVEL_PLACES_LOCATIONS_QUIZ: QuizQuestion[] = PLACES_BUILT;
export const TRAVEL_ENTRY_PASSAGE_QUIZ: QuizQuestion[] = ENTRY_BUILT;
export const TRAVEL_DIRECTIONS_DISTANCE_QUIZ: QuizQuestion[] = DIRECTIONS_BUILT;
export const TRAVEL_CONDITIONS_QUIZ: QuizQuestion[] = CONDITIONS_BUILT;
export const TRAVEL_TRANSPORT_MEANS_QUIZ: QuizQuestion[] = TRANSPORT_BUILT;

export const TRAVEL_ROADS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...JOURNEY_BUILT,
  ...PLACES_BUILT,
  ...ENTRY_BUILT,
  ...DIRECTIONS_BUILT,
  ...CONDITIONS_BUILT,
  ...TRANSPORT_BUILT,
];
