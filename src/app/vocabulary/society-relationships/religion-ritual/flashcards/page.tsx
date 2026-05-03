import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_RELIGION_CARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyReligionRitualFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Religion & Ritual — Flashcards"
      cards={SOCIETY_RELIGION_CARDS}
      backToLessonHref="/vocabulary/society-relationships/religion-ritual"
      quizHref="/vocabulary/society-relationships/religion-ritual/test"
    />
  );
}
