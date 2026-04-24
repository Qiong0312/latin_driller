import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Canis', english: 'Dog', icon: '/flashcard-icons/canis.svg' },
  { latin: 'Feles', english: 'Cat', icon: '/flashcard-icons/feles.svg' },
  { latin: 'Equus', english: 'Horse', icon: '/flashcard-icons/equus.svg' },
  { latin: 'Vacca', english: 'Cow', icon: '/flashcard-icons/vacca.svg' },
  { latin: 'Porcus', english: 'Pig', icon: '/flashcard-icons/porcus.svg' },
  { latin: 'Ovis', english: 'Sheep', icon: '/flashcard-icons/ovis.svg' },
  { latin: 'Capra', english: 'Goat', icon: '/flashcard-icons/capra.svg' },
  { latin: 'Asinus', english: 'Donkey', icon: '/flashcard-icons/asinus.svg' },
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
