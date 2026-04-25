import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cārōta', english: 'Carrot', icon: '/flashcard-icons/food/carota.svg' },
  { latin: 'lactūca', english: 'Lettuce', icon: '/flashcard-icons/food/lactuca.svg' },
  { latin: 'cēpa', english: 'Onion', icon: '/flashcard-icons/food/cepa.svg' },
  { latin: 'āllium', english: 'Garlic', icon: '/flashcard-icons/food/allium.svg' },
  { latin: 'fungus', english: 'Mushroom', icon: '/flashcard-icons/food/fungus.svg' },
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
