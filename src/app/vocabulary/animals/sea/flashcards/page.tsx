import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Piscis', english: 'Fish', icon: '🐟' },
  { latin: 'Delphinus', english: 'Dolphin', icon: '🐬' },
  { latin: 'Cetus', english: 'Whale', icon: '🐋' },
  { latin: 'Canis Marinus', english: 'Shark', icon: '🦈' },
];

export default function SeaAnimalsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Sea Animals — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/sea"
      quizHref="/vocabulary/animals/sea/test"
    />
  );
}
