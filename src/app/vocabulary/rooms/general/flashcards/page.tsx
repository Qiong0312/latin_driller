import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'atrium', english: 'main hall / central room', icon: '/flashcard-icons/atrium.svg' },
  { latin: 'tablinum', english: 'study / office (Roman house)', icon: '/flashcard-icons/tablinum.svg' },
  { latin: 'cella', english: 'small room / chamber', icon: '/flashcard-icons/cella.svg' },
  { latin: 'camera', english: 'room / chamber', icon: '/flashcard-icons/camera.svg' },
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
