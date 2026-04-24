import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Piscis', english: 'Fish', icon: '/flashcard-icons/piscis.svg' },
  { latin: 'Delphinus', english: 'Dolphin', icon: '/flashcard-icons/delphinus.svg' },
  { latin: 'Cetus', english: 'Whale', icon: '/flashcard-icons/cetus.svg' },
  { latin: 'Canis Marinus', english: 'Shark', icon: '/flashcard-icons/canis-marinus.svg' },
];

export default function SeaAnimalsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Sea Animals — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/sea"
      quizHref="/vocabulary/animals/sea/test"
    />
  );
}
