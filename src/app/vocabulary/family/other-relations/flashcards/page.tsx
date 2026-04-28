import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { FAMILY_OTHER_RELATIONS_CARDS } from '@/lib/quizBanks/vocabulary/familyVocab';

export default function FamilyOtherRelationsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Other Relations - Flashcards"
      cards={FAMILY_OTHER_RELATIONS_CARDS}
      backToLessonHref="/vocabulary/family/other-relations"
      quizHref="/vocabulary/family/other-relations/test"
    />
  );
}
