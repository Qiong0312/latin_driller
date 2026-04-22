import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'aqua', english: 'Water', icon: '💧' },
  { latin: 'lac', english: 'Milk', icon: '🥛' },
  { latin: 'vinum', english: 'Wine', icon: '🍷' },
  { latin: 'mel', english: 'Honey', icon: '🍯' },
  { latin: 'sal', english: 'Salt', icon: '🧂' },
];

export default function DrinksFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Drinks & Others — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/drinks"
      quizHref="/vocabulary/food/drinks/test"
    />
  );
}
