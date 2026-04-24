import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'culina', english: 'kitchen', icon: '/flashcard-icons/culina.svg' },
  { latin: 'triclinium', english: 'dining room (Roman style)', icon: '/flashcard-icons/triclinium.svg' },
];

export default function RoomsEatingCookingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Eating & Cooking — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/eating-cooking"
      quizHref="/vocabulary/rooms/eating-cooking/test"
    />
  );
}
