import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'caro', english: 'Meat', icon: '/flashcard-icons/food/caro.svg' },
  { latin: 'porcus', english: 'Pork / pig', icon: '/flashcard-icons/food/porcus-pork.svg' },
  { latin: 'bos', english: 'Cow / beef', icon: '/flashcard-icons/food/bos.svg' },
  { latin: 'gallina', english: 'Chicken', icon: '/flashcard-icons/food/gallina-chicken.svg' },
  { latin: 'piscis', english: 'Fish', icon: '/flashcard-icons/food/piscis-fish.svg' },
];

export default function MeatFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Meat & Protein — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/meat"
      quizHref="/vocabulary/food/meat/test"
    />
  );
}
