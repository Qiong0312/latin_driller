import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { FAMILY_IMMEDIATE_CARDS } from '@/lib/quizBanks/vocabulary/familyVocab';

export default function FamilyImmediateFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Immediate Family - Flashcards"
      cards={FAMILY_IMMEDIATE_CARDS}
      backToLessonHref="/vocabulary/family/immediate-family"
      quizHref="/vocabulary/family/immediate-family/test"
    />
  );
}
