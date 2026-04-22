import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Canis', english: 'Dog', icon: '/flashcard-icons/canis.png' },
  { latin: 'Feles', english: 'Cat', icon: '🐈' },
  { latin: 'Equus', english: 'Horse', icon: '🐎' },
  { latin: 'Vacca', english: 'Cow', icon: '🐄' },
  { latin: 'Porcus', english: 'Pig', icon: '🐷' },
  { latin: 'Ovis', english: 'Sheep', icon: '🐑' },
  { latin: 'Capra', english: 'Goat', icon: '🐐' },
  { latin: 'Asinus', english: 'Donkey', icon: '🫏' },
];

export default function CommonAnimalsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Common Animals — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/animals/common"
      quizHref="/vocabulary/animals/common/test"
    />
  );
}
