import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Mūs', english: 'Mouse', icon: '/flashcard-icons/animals/mus.svg' },
  { latin: 'Rāna', english: 'Frog', icon: '/flashcard-icons/animals/rana.svg' },
  { latin: 'Serpēns', english: 'Snake', icon: '/flashcard-icons/animals/serpens.svg' },
  { latin: 'Apis', english: 'Bee', icon: '/flashcard-icons/animals/apis.svg' },
  { latin: 'Formīca', english: 'Ant', icon: '/flashcard-icons/animals/formica.svg' },
];

export default function SmallCreaturesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Small Creatures — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/small"
      quizHref="/vocabulary/animals/small/test"
    />
  );
}
