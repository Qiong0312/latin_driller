import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cubiculum', english: 'bedroom', icon: '/flashcard-icons/rooms/cubiculum.svg' },
  { latin: 'dormitorium', english: 'sleeping room / dormitory', icon: '/flashcard-icons/rooms/dormitorium.svg' },
  { latin: 'lectus', english: 'bed', icon: '/flashcard-icons/rooms/lectus.svg' },
];

export default function RoomsLivingSleepingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Living & Sleeping — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/rooms/living-sleeping"
      quizHref="/vocabulary/rooms/living-sleeping/test"
    />
  );
}
