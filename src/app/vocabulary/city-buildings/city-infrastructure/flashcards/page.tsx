import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_INFRASTRUCTURE_CARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityInfrastructureFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="City infrastructure — Flashcards"
      cards={CITY_INFRASTRUCTURE_CARDS}
      backToLessonHref="/vocabulary/city-buildings/city-infrastructure"
      quizHref="/vocabulary/city-buildings/city-infrastructure/test"
    />
  );
}
