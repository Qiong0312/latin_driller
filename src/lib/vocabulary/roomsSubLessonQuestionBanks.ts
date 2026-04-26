import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const ROOMS_LIVING_SLEEPING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Living & Sleeping Areas',
  outsideCategoryLatin: ['lēo', 'mālum', 'culīna', 'hortus', 'fluvius', 'equus', 'pānis', 'nāsus'],
  entries: [
    { latin: 'cūbiculum', english: 'bedroom' },
    { latin: 'dormitōrium', english: 'sleeping room / dormitory' },
    { latin: 'lēctus', english: 'bed' },
  ],
});

export const ROOMS_EATING_COOKING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Eating & Cooking',
  outsideCategoryLatin: ['lēo', 'cūbiculum', 'hortus', 'canis mārīnus', 'digitus', 'pānis', 'equus', 'nūbēs'],
  entries: [
    { latin: 'culīna', english: 'kitchen' },
    { latin: 'trīclīnium', english: 'dining room (Roman style)' },
  ],
});

export const ROOMS_GENERAL_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'General House Spaces',
  outsideCategoryLatin: ['Delphīnus', 'mālum', 'cēpa', 'aquila', 'lac', 'tigris', 'pānis', 'cor'],
  entries: [
    { latin: 'ātrium', english: 'main hall / central room' },
    { latin: 'tāblīnum', english: 'study / office (Roman house)' },
    { latin: 'cella', english: 'small room / chamber' },
    { latin: 'camēra', english: 'room / chamber' },
  ],
});

export const ROOMS_WASHING_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Washing & Bathing',
  outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'ūva', 'cor', 'lupus', 'līber', 'lūna'],
  entries: [
    { latin: 'balneum', english: 'bath / bathroom' },
    { latin: 'lāvātōrium', english: 'washing room' },
  ],
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
  entries: [
    { latin: 'bibliothēca', english: 'library' },
    { latin: 'officīna', english: 'workshop / workroom' },
  ],
});

export const ROOMS_OUTDOOR_QUIZ: QuizQuestion[] = buildVocabularyQuestionBank({
  categoryLabel: 'Outdoor / Extra Spaces',
  outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'cūbiculum', 'lac', 'digitus', 'pānis', 'lupus'],
  entries: [
    { latin: 'hortus', english: 'garden' },
    { latin: 'peristȳlium', english: 'courtyard with columns' },
  ],
});
