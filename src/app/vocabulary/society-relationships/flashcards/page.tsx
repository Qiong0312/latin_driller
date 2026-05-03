import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_RELATIONSHIPS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyRelationshipsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Society & Relationships — All vocabulary flashcards"
      cards={SOCIETY_RELATIONSHIPS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/society-relationships"
      quizHref="/vocabulary/society-relationships/test"
    />
  );
}
