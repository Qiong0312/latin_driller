import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_QUALITY_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsQualityFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Quality & Value (Qualitās) — Flashcards"
      cards={CORE_DESCRIPTIONS_QUALITY_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/quality-value"
      quizHref="/vocabulary/core-descriptions/quality-value/test"
    />
  );
}
