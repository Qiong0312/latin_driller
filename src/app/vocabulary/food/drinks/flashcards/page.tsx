import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'aqua', english: 'Water', icon: '/flashcard-icons/aqua.svg' },
  { latin: 'lac', english: 'Milk', icon: '/flashcard-icons/lac.svg' },
  { latin: 'vinum', english: 'Wine', icon: '/flashcard-icons/vinum.svg' },
  { latin: 'mel', english: 'Honey', icon: '/flashcard-icons/mel.svg' },
  { latin: 'sal', english: 'Salt', icon: '/flashcard-icons/sal.svg' },
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
