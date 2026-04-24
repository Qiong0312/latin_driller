import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'malum', english: 'Apple', icon: '/flashcard-icons/food/malum.svg' },
  { latin: 'pirum', english: 'Pear', icon: '/flashcard-icons/food/pirum.svg' },
  { latin: 'uva', english: 'Grape', icon: '/flashcard-icons/food/uva.svg' },
  { latin: 'ficus', english: 'Fig', icon: '/flashcard-icons/food/ficus.svg' },
  { latin: 'cerasum', english: 'Cherry', icon: '/flashcard-icons/food/cerasum.svg' },
  { latin: 'prunum', english: 'Plum', icon: '/flashcard-icons/food/prunum.svg' },
];

export default function FruitsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Fruits — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/fruits"
      quizHref="/vocabulary/food/fruits/test"
    />
  );
}
