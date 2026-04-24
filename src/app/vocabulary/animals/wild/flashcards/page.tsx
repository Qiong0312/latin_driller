import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Leo', english: 'Lion', icon: '/flashcard-icons/leo.svg' },
  { latin: 'Tigris', english: 'Tiger', icon: '/flashcard-icons/tigris.svg' },
  { latin: 'Ursus', english: 'Bear', icon: '/flashcard-icons/ursus.svg' },
  { latin: 'Lupus', english: 'Wolf', icon: '/flashcard-icons/lupus.svg' },
  { latin: 'Vulpes', english: 'Fox', icon: '/flashcard-icons/vulpes.svg' },
  { latin: 'Cervus', english: 'Deer', icon: '/flashcard-icons/cervus.svg' },
  { latin: 'Elephantus', english: 'Elephant', icon: '/flashcard-icons/elephantus.svg' },
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
