import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Avis', english: 'Bird', icon: '/flashcard-icons/avis.png' },
  { latin: 'Aquila', english: 'Eagle', icon: '/flashcard-icons/aquila.png' },
  { latin: 'Columba', english: 'Dove / pigeon', icon: '/flashcard-icons/columba.png' },
  { latin: 'Corvus', english: 'Crow', icon: '/flashcard-icons/corvus.png' },
  { latin: 'Passer', english: 'Sparrow', icon: '/flashcard-icons/passer.png' },
  { latin: 'Gallina', english: 'Hen', icon: '/flashcard-icons/gallina.png' },
  { latin: 'Gallus', english: 'Rooster', icon: '/flashcard-icons/gallus.png' },
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
