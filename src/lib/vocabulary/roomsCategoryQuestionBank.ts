import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

/**
 * Same composition as the six room sub-lesson test banks, concatenated
 * (used for the all-Rooms category quiz).
 */
export const ROOMS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Living & Sleeping Areas',
    outsideCategoryLatin: ['lēo', 'mālum', 'culīna', 'hortus', 'fluvius', 'equus', 'pānis', 'nāsus'],
    entries: [
      { latin: 'cūbiculum', english: 'bedroom' },
      { latin: 'dormitōrium', english: 'sleeping room / dormitory' },
      { latin: 'lēctus', english: 'bed' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Eating & Cooking',
    outsideCategoryLatin: ['lēo', 'cūbiculum', 'hortus', 'canis mārīnus', 'digitus', 'pānis', 'equus', 'nūbēs'],
    entries: [
      { latin: 'culīna', english: 'kitchen' },
      { latin: 'trīclīnium', english: 'dining room (Roman style)' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'General House Spaces',
    outsideCategoryLatin: ['Delphīnus', 'mālum', 'cēpa', 'aquila', 'lac', 'tigris', 'pānis', 'cor'],
    entries: [
      { latin: 'ātrium', english: 'main hall / central room' },
      { latin: 'tāblīnum', english: 'study / office (Roman house)' },
      { latin: 'cella', english: 'small room / chamber' },
      { latin: 'camēra', english: 'room / chamber' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Washing & Bathing',
    outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'ūva', 'cor', 'lupus', 'līber', 'lūna'],
    entries: [
      { latin: 'balneum', english: 'bath / bathroom' },
      { latin: 'lāvātōrium', english: 'washing room' },
    ],
  }),
  ...buildVocabularyQuestionBank({
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
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Outdoor / Extra Spaces',
    outsideCategoryLatin: ['lēo', 'culīna', 'aquila', 'cūbiculum', 'lac', 'digitus', 'pānis', 'lupus'],
    entries: [
      { latin: 'hortus', english: 'garden' },
      { latin: 'peristȳlium', english: 'courtyard with columns' },
    ],
  }),
];
