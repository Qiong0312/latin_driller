import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'panis', english: 'Bread', icon: '/flashcard-icons/panis.svg' },
  { latin: 'caseus', english: 'Cheese', icon: '/flashcard-icons/caseus.svg' },
  { latin: 'ovum', english: 'Egg', icon: '/flashcard-icons/ovum.svg' },
  { latin: 'cibus', english: 'Food', icon: '/flashcard-icons/cibus.svg' },
  { latin: 'cena', english: 'Dinner / meal', icon: '/flashcard-icons/cena.svg' },
];

export default function BasicFoodsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Basic Foods — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/basic"
      quizHref="/vocabulary/food/basic/test"
    />
  );
}
