import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  ENV_INTERACTION_HOME,
  ENV_INTERACTION_MARKETPLACE,
  ENV_INTERACTION_MILITARY,
  ENV_INTERACTION_NATURE,
  ENV_INTERACTION_WEATHER,
} from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

const HOME_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Environment & interaction: home actions (Āctiōnēs Domūs)',
  outsideCategoryLatin: ['emere', 'pugnāre', 'fluere', 'vidēre', 'canis', 'pānis', 'arbor', 'nox'],
  entries: ENV_INTERACTION_HOME,
});
const MARKET_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Environment & interaction: marketplace & money (Mercātus et Pecūnia)',
  outsideCategoryLatin: ['coquere', 'oppugnāre', 'cadere', 'sedēre', 'taberna', 'forum', 'hērba', 'via'],
  entries: ENV_INTERACTION_MARKETPLACE,
});
const MILITARY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Environment & interaction: military & government (Mīlitia et Imperium)',
  outsideCategoryLatin: ['mundāre', 'vendere', 'volāre', 'loquī', 'māns', 'oculus', 'cēna', 'ager'],
  entries: ENV_INTERACTION_MILITARY,
});
const NATURE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Environment & interaction: nature & movement (Nātūra et Mōtus)',
  outsideCategoryLatin: ['ornāre', 'numerāre', 'pluere', 'timēre', 'equus', 'flūmen', 'sōl', 'terra'],
  entries: ENV_INTERACTION_NATURE,
});
const WEATHER_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Environment & interaction: weather & phenomena (Tempestās et Nātūra)',
  outsideCategoryLatin: ['iacēre', 'cōnstāre', 'ambulāre', 'velle', 'nix', 'nūbēs', 'ventus', 'mare'],
  entries: ENV_INTERACTION_WEATHER,
});

export const ENV_INTERACTION_HOME_QUIZ: QuizQuestion[] = HOME_BUILT;
export const ENV_INTERACTION_MARKETPLACE_QUIZ: QuizQuestion[] = MARKET_BUILT;
export const ENV_INTERACTION_MILITARY_QUIZ: QuizQuestion[] = MILITARY_BUILT;
export const ENV_INTERACTION_NATURE_QUIZ: QuizQuestion[] = NATURE_BUILT;
export const ENV_INTERACTION_WEATHER_QUIZ: QuizQuestion[] = WEATHER_BUILT;

export const ENVIRONMENT_INTERACTION_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...HOME_BUILT,
  ...MARKET_BUILT,
  ...MILITARY_BUILT,
  ...NATURE_BUILT,
  ...WEATHER_BUILT,
];
