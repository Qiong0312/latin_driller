import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { IRREGULAR_VERBS_COMPOUND_CARDS } from '@/lib/quizBanks/vocabulary/irregularVerbsVocab';

export default function IrregularVerbsCompoundFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Compound Irregular Verbs — Flashcards"
      cards={IRREGULAR_VERBS_COMPOUND_CARDS}
      backToLessonHref="/vocabulary/irregular-verbs/compound"
      quizHref="/vocabulary/irregular-verbs/compound/test"
    />
  );
}
