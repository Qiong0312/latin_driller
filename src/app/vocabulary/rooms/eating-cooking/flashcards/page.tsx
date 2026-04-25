import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'culīna', english: 'kitchen', icon: '/flashcard-icons/rooms/culina.svg' },
  { latin: 'trīclīnium', english: 'dining room (Roman style)', icon: '/flashcard-icons/rooms/triclinium.svg' },
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
