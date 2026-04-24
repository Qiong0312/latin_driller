import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'atrium', english: 'main hall / central room', icon: '/flashcard-icons/rooms/atrium.svg' },
  { latin: 'tablinum', english: 'study / office (Roman house)', icon: '/flashcard-icons/rooms/tablinum.svg' },
  { latin: 'cella', english: 'small room / chamber', icon: '/flashcard-icons/rooms/cella.svg' },
  { latin: 'camera', english: 'room / chamber', icon: '/flashcard-icons/rooms/camera.svg' },
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
