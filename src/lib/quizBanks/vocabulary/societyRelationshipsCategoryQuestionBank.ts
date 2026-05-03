import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  SOCIETY_FAMILY,
  SOCIETY_LAW,
  SOCIETY_LEARNING,
  SOCIETY_RELIGION,
  SOCIETY_TRAVEL,
} from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

const FAMILY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Society & relationships: family & relationships (Familia et Relātiōnēs)',
  outsideCategoryLatin: ['discere', 'venīre', 'ōrāre', 'iūdicāre', 'canis', 'via', 'pāx', 'urbs'],
  entries: SOCIETY_FAMILY,
});
const LEARNING_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Society & relationships: learning & teaching (Disciplina et Doctrīna)',
  outsideCategoryLatin: ['adiuvāre', 'proficīscī', 'sacrificāre', 'damnāre', 'liber', 'tabula', 'magister', 'nox'],
  entries: SOCIETY_LEARNING,
});
const TRAVEL_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Society & relationships: travel & exploration (Iter et Explōrātiō)',
  outsideCategoryLatin: ['amāre', 'legere', 'laudāre', 'parēre', 'mare', 'portus', 'iter', 'terra'],
  entries: SOCIETY_TRAVEL,
});
const RELIGION_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Society & relationships: religion & ritual (Relīgiō et Sacra)',
  outsideCategoryLatin: ['sequī', 'scrībere', 'intrāre', 'accūsāre', 'templum', 'deus', 'vōx', 'sacer'],
  entries: SOCIETY_RELIGION,
});
const LAW_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Society & relationships: law & society (Lēx et Societās)',
  outsideCategoryLatin: ['nūbere', 'meminisse', 'errāre', 'crēdere', 'lēx', 'index', 'forum', 'populus'],
  entries: SOCIETY_LAW,
});

export const SOCIETY_FAMILY_QUIZ: QuizQuestion[] = FAMILY_BUILT;
export const SOCIETY_LEARNING_QUIZ: QuizQuestion[] = LEARNING_BUILT;
export const SOCIETY_TRAVEL_QUIZ: QuizQuestion[] = TRAVEL_BUILT;
export const SOCIETY_RELIGION_QUIZ: QuizQuestion[] = RELIGION_BUILT;
export const SOCIETY_LAW_QUIZ: QuizQuestion[] = LAW_BUILT;

export const SOCIETY_RELATIONSHIPS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...FAMILY_BUILT,
  ...LEARNING_BUILT,
  ...TRAVEL_BUILT,
  ...RELIGION_BUILT,
  ...LAW_BUILT,
];
