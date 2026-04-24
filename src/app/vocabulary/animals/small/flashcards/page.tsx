import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Mus', english: 'Mouse', icon: '/flashcard-icons/mus.svg' },
  { latin: 'Rana', english: 'Frog', icon: '/flashcard-icons/rana.svg' },
  { latin: 'Serpens', english: 'Snake', icon: '/flashcard-icons/serpens.svg' },
  { latin: 'Apis', english: 'Bee', icon: '/flashcard-icons/apis.svg' },
  { latin: 'Formica', english: 'Ant', icon: '/flashcard-icons/formica.svg' },
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
