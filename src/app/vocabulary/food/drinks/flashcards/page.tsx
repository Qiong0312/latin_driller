import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'aqua', english: 'Water', icon: '/flashcard-icons/food/aqua.svg' },
  { latin: 'lac', english: 'Milk', icon: '/flashcard-icons/food/lac.svg' },
  { latin: 'vīnum', english: 'Wine', icon: '/flashcard-icons/food/vinum.svg' },
  { latin: 'mēl', english: 'Honey', icon: '/flashcard-icons/food/mel.svg' },
  { latin: 'sāl', english: 'Salt', icon: '/flashcard-icons/food/sal.svg' },
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
