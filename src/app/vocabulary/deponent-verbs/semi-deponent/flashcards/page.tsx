import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_SEMI_CARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentSemiDeponentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Semi-Deponent Verbs (Advanced) — Flashcards"
      cards={DEPONENT_SEMI_CARDS}
      backToLessonHref="/vocabulary/deponent-verbs/semi-deponent"
      quizHref="/vocabulary/deponent-verbs/semi-deponent/test"
    />
  );
}
