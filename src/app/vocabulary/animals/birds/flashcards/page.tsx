import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Avis', english: 'Bird', icon: '🐦' },
  { latin: 'Aquila', english: 'Eagle', icon: '🦅' },
  { latin: 'Columba', english: 'Dove / pigeon', icon: '🕊️' },
  { latin: 'Corvus', english: 'Crow', icon: '🐦‍⬛' },
  { latin: 'Passer', english: 'Sparrow', icon: '🐦' },
  { latin: 'Gallina', english: 'Hen', icon: '🐔' },
  { latin: 'Gallus', english: 'Rooster', icon: '🐓' },
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
