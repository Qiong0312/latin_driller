import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { IRREGULAR_VERBS_ESSENTIAL_CARDS } from '@/lib/quizBanks/vocabulary/irregularVerbsVocab';

export default function IrregularVerbsEssentialFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Essential Irregular Verbs — Flashcards"
      cards={IRREGULAR_VERBS_ESSENTIAL_CARDS}
      backToLessonHref="/vocabulary/irregular-verbs/essential"
      quizHref="/vocabulary/irregular-verbs/essential/test"
    />
  );
}
