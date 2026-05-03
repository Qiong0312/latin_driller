import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { ENV_INTERACTION_WEATHER_QUIZ } from '@/lib/quizBanks/vocabulary/environmentInteractionCategoryQuestionBank';

export default function EnvironmentInteractionWeatherTestPage() {
  return (
    <VocabBankQuizView
      questions={ENV_INTERACTION_WEATHER_QUIZ}
      quizHeading="Weather & Natural Phenomena — Quiz"
      resultsHeading="Weather & Natural Phenomena — Test results"
      backToLessonHref="/vocabulary/environment-interaction/weather-phenomena"
    />
  );
}
