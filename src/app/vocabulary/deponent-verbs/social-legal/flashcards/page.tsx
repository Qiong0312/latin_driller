import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_SOCIAL_CARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentSocialLegalFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Social & Legal Actions — Flashcards"
      cards={DEPONENT_SOCIAL_CARDS}
      backToLessonHref="/vocabulary/deponent-verbs/social-legal"
      quizHref="/vocabulary/deponent-verbs/social-legal/test"
    />
  );
}
