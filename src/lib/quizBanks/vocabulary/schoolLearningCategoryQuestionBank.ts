import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  SCHOOL_ENVIRONMENT,
  SCHOOL_LANGUAGE_CONTENT,
  SCHOOL_LEARNING_CONCEPTS,
  SCHOOL_STUDY_MATERIALS,
} from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

const STUDY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'School & learning: study materials (Librī et Instrumenta)',
  outsideCategoryLatin: ['canis', 'vidēre', 'amāre', 'equus', 'pānis', 'arbor', 'currere', 'māter'],
  entries: SCHOOL_STUDY_MATERIALS,
});
const LANGUAGE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'School & learning: language & content (Lingua et Scriptum)',
  outsideCategoryLatin: ['fēlīs', 'legere', 'sedēre', 'ovis', 'cibus', 'mare', 'stāre', 'pater'],
  entries: SCHOOL_LANGUAGE_CONTENT,
});
const CONCEPTS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'School & learning: learning concepts (Disciplina)',
  outsideCategoryLatin: ['porcus', 'audīre', 'bibere', 'avis', 'ōvum', 'ventus', 'dormīre', 'soror'],
  entries: SCHOOL_LEARNING_CONCEPTS,
});
const ENV_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'School & learning: school environment',
  outsideCategoryLatin: ['lupus', 'docēre', 'currere', 'apis', 'mālum', 'nix', 'ridēre', 'frāter'],
  entries: SCHOOL_ENVIRONMENT,
});

export const SCHOOL_STUDY_MATERIALS_QUIZ: QuizQuestion[] = STUDY_BUILT;
export const SCHOOL_LANGUAGE_CONTENT_QUIZ: QuizQuestion[] = LANGUAGE_BUILT;
export const SCHOOL_LEARNING_CONCEPTS_QUIZ: QuizQuestion[] = CONCEPTS_BUILT;
export const SCHOOL_ENVIRONMENT_QUIZ: QuizQuestion[] = ENV_BUILT;

export const SCHOOL_LEARNING_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...STUDY_BUILT,
  ...LANGUAGE_BUILT,
  ...CONCEPTS_BUILT,
  ...ENV_BUILT,
];
