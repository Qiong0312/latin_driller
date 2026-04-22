import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cubiculum', english: 'bedroom', icon: '🏠' },
  { latin: 'dormitorium', english: 'sleeping room / dormitory', icon: '🛌' },
  { latin: 'lectus', english: 'bed', icon: '🛏️' },
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
