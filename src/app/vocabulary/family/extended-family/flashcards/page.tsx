import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { FAMILY_EXTENDED_CARDS } from '@/lib/quizBanks/vocabulary/familyVocab';

export default function FamilyExtendedFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Extended Family - Flashcards"
      cards={FAMILY_EXTENDED_CARDS}
      backToLessonHref="/vocabulary/family/extended-family"
      quizHref="/vocabulary/family/extended-family/test"
    />
  );
}
