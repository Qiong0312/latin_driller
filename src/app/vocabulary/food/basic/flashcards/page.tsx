import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'pānis', english: 'Bread', icon: '/flashcard-icons/food/panis.svg' },
  { latin: 'cāseus', english: 'Cheese', icon: '/flashcard-icons/food/caseus.svg' },
  { latin: 'ōvum', english: 'Egg', icon: '/flashcard-icons/food/ovum.svg' },
  { latin: 'cibus', english: 'Food', icon: '/flashcard-icons/food/cibus.svg' },
  { latin: 'cēna', english: 'Dinner / meal', icon: '/flashcard-icons/food/cena.svg' },
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
