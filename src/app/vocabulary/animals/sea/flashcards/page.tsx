import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Piscis', english: 'Fish', icon: '/flashcard-icons/animals/piscis.svg' },
  { latin: 'Delphinus', english: 'Dolphin', icon: '/flashcard-icons/animals/delphinus.svg' },
  { latin: 'Cetus', english: 'Whale', icon: '/flashcard-icons/animals/cetus.svg' },
  { latin: 'Canis Marinus', english: 'Shark', icon: '/flashcard-icons/animals/canis-marinus.svg' },
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
