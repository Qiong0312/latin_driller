import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'caro', english: 'Meat', icon: '/flashcard-icons/caro.svg' },
  { latin: 'porcus', english: 'Pork / pig', icon: '/flashcard-icons/porcus-pork.svg' },
  { latin: 'bos', english: 'Cow / beef', icon: '/flashcard-icons/bos.svg' },
  { latin: 'gallina', english: 'Chicken', icon: '/flashcard-icons/gallina-chicken.svg' },
  { latin: 'piscis', english: 'Fish', icon: '/flashcard-icons/piscis-fish.svg' },
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
