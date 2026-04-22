import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'carota', english: 'Carrot', icon: '🥕' },
  { latin: 'lactuca', english: 'Lettuce', icon: '🥬' },
  { latin: 'cepa', english: 'Onion', icon: '🧅' },
  { latin: 'allium', english: 'Garlic', icon: '🧄' },
  { latin: 'fungus', english: 'Mushroom', icon: '🍄' },
];

export default function VegetablesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Vegetables — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/vegetables"
      quizHref="/vocabulary/food/vegetables/test"
    />
  );
}
