import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'atrium', english: 'main hall / central room', icon: '🔆' },
  { latin: 'tablinum', english: 'study / office (Roman house)', icon: '📜' },
  { latin: 'cella', english: 'small room / chamber', icon: '🚪' },
  { latin: 'camera', english: 'room / chamber', icon: '🏠' },
];

export default function RoomsGeneralFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="General House Spaces — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/general"
      quizHref="/vocabulary/rooms/general/test"
    />
  );
}
