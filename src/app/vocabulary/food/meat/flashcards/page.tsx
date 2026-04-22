import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'caro', english: 'Meat', icon: '🥩' },
  { latin: 'porcus', english: 'Pork / pig', icon: '/flashcard-icons/porcus.png' },
  { latin: 'bos', english: 'Cow / beef', icon: '🐄' },
  { latin: 'gallina', english: 'Chicken', icon: '🐔' },
  { latin: 'piscis', english: 'Fish', icon: '🐟' },
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
