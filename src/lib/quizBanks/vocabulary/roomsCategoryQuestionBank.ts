import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  ROOMS_EATING_COOKING_ENTRIES,
  ROOMS_GENERAL_ENTRIES,
  ROOMS_LIVING_SLEEPING_ENTRIES,
  ROOMS_OUTDOOR_ENTRIES,
  ROOMS_STUDY_WORK_ENTRIES,
  ROOMS_WASHING_ENTRIES,
} from '@/lib/quizBanks/vocabulary/roomsVocab';

export const ROOMS_LIVING_SLEEPING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Living & Sleeping Areas',
  outsideCategoryLatin: ['lēo', 'mālum', 'culīna', 'hortus', 'fluvius', 'equus', 'pānis', 'nāsus'],
  entries: ROOMS_LIVING_SLEEPING_ENTRIES,
});

export const ROOMS_EATING_COOKING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Eating & Cooking',
  outsideCategoryLatin: ['lēo', 'cūbiculum', 'hortus', 'canis mārīnus', 'digitus', 'pānis', 'equus', 'nūbēs'],
  entries: ROOMS_EATING_COOKING_ENTRIES,
});

export const ROOMS_GENERAL_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'General House Spaces',
  outsideCategoryLatin: ['Delphīnus', 'mālum', 'cēpa', 'aquila', 'lac', 'tigris', 'pānis', 'cor'],
  entries: ROOMS_GENERAL_ENTRIES,
});

export const ROOMS_WASHING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Washing & Bathing',
  outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'ūva', 'cor', 'lupus', 'līber', 'lūna'],
  entries: ROOMS_WASHING_ENTRIES,
});

export const ROOMS_STUDY_WORK_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Study & Work',
  outsideCategoryLatin: [
    'canis mārīnus',
    'cēpa',
    'aquila',
    'cūbiculum',
    'lac',
    'tigris',
    'cārōta',
    'fluvius',
  ],
  entries: ROOMS_STUDY_WORK_ENTRIES,
});

export const ROOMS_OUTDOOR_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Outdoor / Extra Spaces',
  outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'cūbiculum', 'lac', 'digitus', 'pānis', 'lupus'],
  entries: ROOMS_OUTDOOR_ENTRIES,
});

export const ROOMS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...ROOMS_LIVING_SLEEPING_QUIZ,
  ...ROOMS_EATING_COOKING_QUIZ,
  ...ROOMS_GENERAL_QUIZ,
  ...ROOMS_WASHING_QUIZ,
  ...ROOMS_STUDY_WORK_QUIZ,
  ...ROOMS_OUTDOOR_QUIZ,
];
