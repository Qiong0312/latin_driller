import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { IRREGULAR_VERBS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/irregularVerbsVocab';

export default function IrregularVerbsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Irregular Verbs — All vocabulary flashcards"
      cards={IRREGULAR_VERBS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/irregular-verbs"
      quizHref="/vocabulary/irregular-verbs/test"
    />
  );
}
