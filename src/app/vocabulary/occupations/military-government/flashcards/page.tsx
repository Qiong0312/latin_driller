import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_MILITARY_GOVERNMENT_CARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsMilitaryGovernmentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Military & government — Flashcards"
      cards={OCCUPATIONS_MILITARY_GOVERNMENT_CARDS}
      backToLessonHref="/vocabulary/occupations/military-government"
      quizHref="/vocabulary/occupations/military-government/test"
    />
  );
}
