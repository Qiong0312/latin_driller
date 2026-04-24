import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cubiculum', english: 'bedroom', icon: '/flashcard-icons/cubiculum.svg' },
  { latin: 'dormitorium', english: 'sleeping room / dormitory', icon: '/flashcard-icons/dormitorium.svg' },
  { latin: 'lectus', english: 'bed', icon: '/flashcard-icons/lectus.svg' },
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
