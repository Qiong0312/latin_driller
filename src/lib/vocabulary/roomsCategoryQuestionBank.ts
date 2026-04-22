import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

/**
 * Same composition as the six room sub-lesson test banks, concatenated
 * (used for the all-Rooms category quiz).
 */
export const ROOMS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Living & Sleeping Areas',
    outsideCategoryLatin: ['leo', 'malum', 'culina', 'hortus', 'fluvius', 'equus', 'panis', 'nasus'],
    entries: [
      { latin: 'cubiculum', english: 'bedroom' },
      { latin: 'dormitorium', english: 'sleeping room / dormitory' },
      { latin: 'lectus', english: 'bed' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Eating & Cooking',
    outsideCategoryLatin: ['leo', 'cubiculum', 'hortus', 'canis marinus', 'digitus', 'panis', 'equus', 'nubes'],
    entries: [
      { latin: 'culina', english: 'kitchen' },
      { latin: 'triclinium', english: 'dining room (Roman style)' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'General House Spaces',
    outsideCategoryLatin: ['delphinus', 'malum', 'cepa', 'aquila', 'lac', 'tigris', 'panis', 'cor'],
    entries: [
      { latin: 'atrium', english: 'main hall / central room' },
      { latin: 'tablinum', english: 'study / office (Roman house)' },
      { latin: 'cella', english: 'small room / chamber' },
      { latin: 'camera', english: 'room / chamber' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Washing & Bathing',
    outsideCategoryLatin: ['leo', 'culina', 'aquila', 'uva', 'cor', 'lupus', 'liber', 'luna'],
    entries: [
      { latin: 'balneum', english: 'bath / bathroom' },
      { latin: 'lavatorium', english: 'washing room' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Study & Work',
    outsideCategoryLatin: ['canis marinus', 'cepa', 'aquila', 'cubiculum', 'lac', 'tigris', 'carota', 'fluvius'],
    entries: [
      { latin: 'bibliotheca', english: 'library' },
      { latin: 'officina', english: 'workshop / workroom' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'Outdoor / Extra Spaces',
    outsideCategoryLatin: ['leo', 'culina', 'aquila', 'cubiculum', 'lac', 'digitus', 'panis', 'lupus'],
    entries: [
      { latin: 'hortus', english: 'garden' },
      { latin: 'peristylium', english: 'courtyard with columns' },
    ],
  }),
];
