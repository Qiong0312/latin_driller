import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Leo', english: 'Lion', icon: '🦁' },
  { latin: 'Tigris', english: 'Tiger', icon: '🐯' },
  { latin: 'Ursus', english: 'Bear', icon: '🐻' },
  { latin: 'Lupus', english: 'Wolf', icon: '🐺' },
  { latin: 'Vulpes', english: 'Fox', icon: '🦊' },
  { latin: 'Cervus', english: 'Deer', icon: '🦌' },
  { latin: 'Elephantus', english: 'Elephant', icon: '🐘' },
];

export default function WildAnimalsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Wild Animals — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/wild"
      quizHref="/vocabulary/animals/wild/test"
    />
  );
}
