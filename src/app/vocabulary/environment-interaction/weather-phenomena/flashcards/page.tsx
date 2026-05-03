import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENV_INTERACTION_WEATHER_CARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionWeatherFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Weather & Natural Phenomena — Flashcards"
      cards={ENV_INTERACTION_WEATHER_CARDS}
      backToLessonHref="/vocabulary/environment-interaction/weather-phenomena"
      quizHref="/vocabulary/environment-interaction/weather-phenomena/test"
    />
  );
}
