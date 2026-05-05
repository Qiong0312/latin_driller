import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_PERSONALITY_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsPersonalityFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Simple Personality (Ingenium) — Flashcards"
      cards={CORE_DESCRIPTIONS_PERSONALITY_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/personality"
      quizHref="/vocabulary/core-descriptions/personality/test"
    />
  );
}
