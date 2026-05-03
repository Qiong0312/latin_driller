import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { IRREGULAR_VERBS_COMMON_CARDS } from '@/lib/quizBanks/vocabulary/irregularVerbsVocab';

export default function IrregularVerbsCommonFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Common High-Frequency Irregulars — Flashcards"
      cards={IRREGULAR_VERBS_COMMON_CARDS}
      backToLessonHref="/vocabulary/irregular-verbs/common-irregulars"
      quizHref="/vocabulary/irregular-verbs/common-irregulars/test"
    />
  );
}
