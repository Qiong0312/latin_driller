import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'hortus', english: 'garden', icon: '🌳' },
  { latin: 'peristylium', english: 'courtyard with columns', icon: '🏛️' },
];

export default function RoomsOutdoorFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Outdoor / Extra Spaces — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/outdoor"
      quizHref="/vocabulary/rooms/outdoor/test"
    />
  );
}
