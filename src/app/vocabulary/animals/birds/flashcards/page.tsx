import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Āvis', english: 'Bird', icon: '/flashcard-icons/animals/avis.svg' },
  { latin: 'Aquila', english: 'Eagle', icon: '/flashcard-icons/animals/aquila.svg' },
  { latin: 'Columba', english: 'Dove / pigeon', icon: '/flashcard-icons/animals/columba.svg' },
  { latin: 'Corvus', english: 'Crow', icon: '/flashcard-icons/animals/corvus.svg' },
  { latin: 'Passer', english: 'Sparrow', icon: '/flashcard-icons/animals/passer.svg' },
  { latin: 'Gallina', english: 'Hen', icon: '/flashcard-icons/animals/gallina.svg' },
  { latin: 'Gallus', english: 'Rooster', icon: '/flashcard-icons/animals/gallus.svg' },
];

export default function BirdsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Birds — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/birds"
      quizHref="/vocabulary/animals/birds/test"
    />
  );
}
