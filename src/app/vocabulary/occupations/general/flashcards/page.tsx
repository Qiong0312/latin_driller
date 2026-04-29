import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_GENERAL_CARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsGeneralFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="General occupations — Flashcards"
      cards={OCCUPATIONS_GENERAL_CARDS}
      backToLessonHref="/vocabulary/occupations/general"
      quizHref="/vocabulary/occupations/general/test"
    />
  );
}
