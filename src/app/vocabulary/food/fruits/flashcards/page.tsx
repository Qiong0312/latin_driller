import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'malum', english: 'Apple', icon: '/flashcard-icons/malum.svg' },
  { latin: 'pirum', english: 'Pear', icon: '/flashcard-icons/pirum.svg' },
  { latin: 'uva', english: 'Grape', icon: '/flashcard-icons/uva.svg' },
  { latin: 'ficus', english: 'Fig', icon: '/flashcard-icons/ficus.svg' },
  { latin: 'cerasum', english: 'Cherry', icon: '/flashcard-icons/cerasum.svg' },
  { latin: 'prunum', english: 'Plum', icon: '/flashcard-icons/prunum.svg' },
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
