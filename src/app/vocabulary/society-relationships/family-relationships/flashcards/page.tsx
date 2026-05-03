import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_FAMILY_CARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyFamilyRelationshipsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Family & Relationships — Flashcards"
      cards={SOCIETY_FAMILY_CARDS}
      backToLessonHref="/vocabulary/society-relationships/family-relationships"
      quizHref="/vocabulary/society-relationships/family-relationships/test"
    />
  );
}
