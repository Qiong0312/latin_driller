import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { FAMILY_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/familyVocab';

export default function FamilyCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Familia (Family Members) — Flashcards"
      cards={FAMILY_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/family"
      quizHref="/vocabulary/family/test"
    />
  );
}
