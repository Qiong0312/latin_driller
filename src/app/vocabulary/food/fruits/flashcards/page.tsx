import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'mālum', english: 'Apple', icon: '/flashcard-icons/food/malum.svg' },
  { latin: 'pīrum', english: 'Pear', icon: '/flashcard-icons/food/pirum.svg' },
  { latin: 'ūva', english: 'Grape', icon: '/flashcard-icons/food/uva.svg' },
  { latin: 'fīcus', english: 'Fig', icon: '/flashcard-icons/food/ficus.svg' },
  { latin: 'cērāsum', english: 'Cherry', icon: '/flashcard-icons/food/cerasum.svg' },
  { latin: 'prūnum', english: 'Plum', icon: '/flashcard-icons/food/prunum.svg' },
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
