import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'bibliotheca', english: 'library', icon: '/flashcard-icons/bibliotheca.svg' },
  { latin: 'officina', english: 'workshop / workroom', icon: '/flashcard-icons/officina.svg' },
];

export default function RoomsStudyWorkFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Study & Work — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/study-work"
      quizHref="/vocabulary/rooms/study-work/test"
    />
  );
}
