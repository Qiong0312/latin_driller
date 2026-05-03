import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_LEARNING_CARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyLearningTeachingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Learning & Teaching — Flashcards"
      cards={SOCIETY_LEARNING_CARDS}
      backToLessonHref="/vocabulary/society-relationships/learning-teaching"
      quizHref="/vocabulary/society-relationships/learning-teaching/test"
    />
  );
}
