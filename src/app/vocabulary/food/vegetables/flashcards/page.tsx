import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'carota', english: 'Carrot', icon: '/flashcard-icons/carota.svg' },
  { latin: 'lactuca', english: 'Lettuce', icon: '/flashcard-icons/lactuca.svg' },
  { latin: 'cepa', english: 'Onion', icon: '/flashcard-icons/cepa.svg' },
  { latin: 'allium', english: 'Garlic', icon: '/flashcard-icons/allium.svg' },
  { latin: 'fungus', english: 'Mushroom', icon: '/flashcard-icons/fungus.svg' },
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
