import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Avis', english: 'Bird', icon: '/flashcard-icons/avis.svg' },
  { latin: 'Aquila', english: 'Eagle', icon: '/flashcard-icons/aquila.svg' },
  { latin: 'Columba', english: 'Dove / pigeon', icon: '/flashcard-icons/columba.svg' },
  { latin: 'Corvus', english: 'Crow', icon: '/flashcard-icons/corvus.svg' },
  { latin: 'Passer', english: 'Sparrow', icon: '/flashcard-icons/passer.svg' },
  { latin: 'Gallina', english: 'Hen', icon: '/flashcard-icons/gallina.svg' },
  { latin: 'Gallus', english: 'Rooster', icon: '/flashcard-icons/gallus.svg' },
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
