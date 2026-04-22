import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'panis', english: 'Bread', icon: '🍞' },
  { latin: 'caseus', english: 'Cheese', icon: '🧀' },
  { latin: 'ovum', english: 'Egg', icon: '🥚' },
  { latin: 'cibus', english: 'Food', icon: '🍱' },
  { latin: 'cena', english: 'Dinner / meal', icon: '🍽️' },
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
