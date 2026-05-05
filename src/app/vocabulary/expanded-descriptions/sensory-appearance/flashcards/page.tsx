import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_SENSORY_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsSensoryAppearanceFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Sensory & Appearance (Aspectus) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_SENSORY_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/sensory-appearance"
      quizHref="/vocabulary/expanded-descriptions/sensory-appearance/test"
    />
  );
}
