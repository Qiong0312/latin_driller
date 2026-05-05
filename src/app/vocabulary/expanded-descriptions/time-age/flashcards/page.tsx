import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_TIME_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsTimeAgeFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Time & Age (Tempus) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_TIME_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/time-age"
      quizHref="/vocabulary/expanded-descriptions/time-age/test"
    />
  );
}
