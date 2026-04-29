import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_CRAFTS_TRADES_CARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsCraftsTradesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Crafts & trades — Flashcards"
      cards={OCCUPATIONS_CRAFTS_TRADES_CARDS}
      backToLessonHref="/vocabulary/occupations/crafts-trades"
      quizHref="/vocabulary/occupations/crafts-trades/test"
    />
  );
}
