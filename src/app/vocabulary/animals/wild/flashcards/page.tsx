import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Leo', english: 'Lion', icon: '/flashcard-icons/animals/leo.svg' },
  { latin: 'Tigris', english: 'Tiger', icon: '/flashcard-icons/animals/tigris.svg' },
  { latin: 'Ursus', english: 'Bear', icon: '/flashcard-icons/animals/ursus.svg' },
  { latin: 'Lupus', english: 'Wolf', icon: '/flashcard-icons/animals/lupus.svg' },
  { latin: 'Vulpes', english: 'Fox', icon: '/flashcard-icons/animals/vulpes.svg' },
  { latin: 'Cervus', english: 'Deer', icon: '/flashcard-icons/animals/cervus.svg' },
  { latin: 'Elephantus', english: 'Elephant', icon: '/flashcard-icons/animals/elephantus.svg' },
];

export default function WildAnimalsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Wild Animals — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/wild"
      quizHref="/vocabulary/animals/wild/test"
    />
  );
}
