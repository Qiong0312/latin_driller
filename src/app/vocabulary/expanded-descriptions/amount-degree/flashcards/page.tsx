import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_AMOUNT_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsAmountDegreeFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Amount & Degree (Quantitās) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_AMOUNT_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/amount-degree"
      quizHref="/vocabulary/expanded-descriptions/amount-degree/test"
    />
  );
}
