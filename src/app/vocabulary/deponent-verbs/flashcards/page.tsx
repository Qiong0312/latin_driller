import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_VERBS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentVerbsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Deponent Verbs — All vocabulary flashcards"
      cards={DEPONENT_VERBS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/deponent-verbs"
      quizHref="/vocabulary/deponent-verbs/test"
    />
  );
}
