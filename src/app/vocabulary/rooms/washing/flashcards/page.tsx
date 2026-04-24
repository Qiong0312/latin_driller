import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'balneum', english: 'bath / bathroom', icon: '/flashcard-icons/balneum.svg' },
  { latin: 'lavatorium', english: 'washing room', icon: '/flashcard-icons/lavatorium.svg' },
];

export default function RoomsWashingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Washing & Bathing — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/washing"
      quizHref="/vocabulary/rooms/washing/test"
    />
  );
}
