import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'hortus', english: 'garden', icon: '/flashcard-icons/rooms/hortus.svg' },
  { latin: 'peristȳlium', english: 'courtyard with columns', icon: '/flashcard-icons/rooms/peristylium.svg' },
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
