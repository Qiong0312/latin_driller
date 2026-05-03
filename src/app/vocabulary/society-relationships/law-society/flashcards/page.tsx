import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_LAW_CARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyLawSocietyFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Law & Society — Flashcards"
      cards={SOCIETY_LAW_CARDS}
      backToLessonHref="/vocabulary/society-relationships/law-society"
      quizHref="/vocabulary/society-relationships/law-society/test"
    />
  );
}
