import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Mus', english: 'Mouse', icon: '🐭' },
  { latin: 'Rana', english: 'Frog', icon: '🐸' },
  { latin: 'Serpens', english: 'Snake', icon: '🐍' },
  { latin: 'Apis', english: 'Bee', icon: '🐝' },
  { latin: 'Formica', english: 'Ant', icon: '🐜' },
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
