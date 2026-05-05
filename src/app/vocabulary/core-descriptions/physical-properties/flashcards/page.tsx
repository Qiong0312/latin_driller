import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_PHYSICAL_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsPhysicalFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Physical Properties (Corpus / Forma) — Flashcards"
      cards={CORE_DESCRIPTIONS_PHYSICAL_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/physical-properties"
      quizHref="/vocabulary/core-descriptions/physical-properties/test"
    />
  );
}
