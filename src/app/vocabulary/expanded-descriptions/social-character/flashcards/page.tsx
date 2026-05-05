import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_SOCIAL_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsSocialCharacterFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Social & Character (Ingenium) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_SOCIAL_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/social-character"
      quizHref="/vocabulary/expanded-descriptions/social-character/test"
    />
  );
}
