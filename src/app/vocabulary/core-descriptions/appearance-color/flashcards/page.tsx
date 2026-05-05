import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_APPEARANCE_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsAppearanceFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Basic Appearance & Color (Aspectus) — Flashcards"
      cards={CORE_DESCRIPTIONS_APPEARANCE_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/appearance-color"
      quizHref="/vocabulary/core-descriptions/appearance-color/test"
    />
  );
}
