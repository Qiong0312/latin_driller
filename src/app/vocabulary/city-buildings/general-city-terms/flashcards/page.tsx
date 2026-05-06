import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_GENERAL_TERMS_CARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityGeneralTermsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="General city terms — Flashcards"
      cards={CITY_GENERAL_TERMS_CARDS}
      backToLessonHref="/vocabulary/city-buildings/general-city-terms"
      quizHref="/vocabulary/city-buildings/general-city-terms/test"
    />
  );
}
