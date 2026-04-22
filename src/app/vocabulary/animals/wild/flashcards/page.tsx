import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Leo', english: 'Lion', icon: '/flashcard-icons/leo.png' },
  { latin: 'Tigris', english: 'Tiger', icon: '/flashcard-icons/tigris.png' },
  { latin: 'Ursus', english: 'Bear', icon: '/flashcard-icons/ursus.png' },
  { latin: 'Lupus', english: 'Wolf', icon: '/flashcard-icons/lupus.png' },
  { latin: 'Vulpes', english: 'Fox', icon: '/flashcard-icons/vulpes.png' },
  { latin: 'Cervus', english: 'Deer', icon: '/flashcard-icons/cervus.png' },
  { latin: 'Elephantus', english: 'Elephant', icon: '/flashcard-icons/elephantus.png' },
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
