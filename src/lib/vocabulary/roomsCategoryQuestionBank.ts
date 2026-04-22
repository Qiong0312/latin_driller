import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

/**
 * Same composition as the six room sub-lesson test banks, concatenated
 * (used for the all-Rooms category quiz).
 */
export const ROOMS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the Living and Sleeping Areas lesson',
    outsideCategoryEnglish: ['lion', 'apple', 'kitchen', 'garden', 'river', 'horse', 'bread', 'nose'],
    entries: [
      { latin: 'cubiculum', english: 'bedroom' },
      { latin: 'dormitorium', english: 'sleeping room / dormitory' },
      { latin: 'lectus', english: 'bed' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the Eating and Cooking lesson',
    outsideCategoryEnglish: ['lion', 'bedroom', 'garden', 'shark', 'finger', 'bread', 'horse', 'cloud'],
    entries: [
      { latin: 'culina', english: 'kitchen' },
      { latin: 'triclinium', english: 'dining room (Roman style)' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the General House Spaces lesson',
    outsideCategoryEnglish: ['dolphin', 'apple', 'onion', 'eagle', 'milk', 'tiger', 'bread', 'heart'],
    entries: [
      { latin: 'atrium', english: 'main hall / central room' },
      { latin: 'tablinum', english: 'study / office (Roman house)' },
      { latin: 'cella', english: 'small room / chamber' },
      { latin: 'camera', english: 'room / chamber' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the Washing and Bathing lesson',
    outsideCategoryEnglish: ['lion', 'kitchen', 'eagle', 'grape', 'heart', 'wolf', 'book', 'moon'],
    entries: [
      { latin: 'balneum', english: 'bath / bathroom' },
      { latin: 'lavatorium', english: 'washing room' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the Study and Work lesson',
    outsideCategoryEnglish: ['shark', 'onion', 'eagle', 'bedroom', 'milk', 'tiger', 'carrot', 'river'],
    entries: [
      { latin: 'bibliotheca', english: 'library' },
      { latin: 'officina', english: 'workshop / workroom' },
    ],
  }),
  ...buildVocabularyQuestionBank({
    categoryLabel: 'the Outdoor and Extra Spaces lesson',
    outsideCategoryEnglish: ['lion', 'kitchen', 'eagle', 'bedroom', 'milk', 'finger', 'bread', 'wolf'],
    entries: [
      { latin: 'hortus', english: 'garden' },
      { latin: 'peristylium', english: 'courtyard with columns' },
    ],
  }),
];
