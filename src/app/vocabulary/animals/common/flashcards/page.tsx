import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Canis', english: 'Dog', icon: '/flashcard-icons/animals/canis.svg' },
  { latin: 'Fēlīs', english: 'Cat', icon: '/flashcard-icons/animals/feles.svg' },
  { latin: 'Equus', english: 'Horse', icon: '/flashcard-icons/animals/equus.svg' },
  { latin: 'Vacca', english: 'Cow', icon: '/flashcard-icons/animals/vacca.svg' },
  { latin: 'Porcus', english: 'Pig', icon: '/flashcard-icons/animals/porcus.svg' },
  { latin: 'Ovis', english: 'Sheep', icon: '/flashcard-icons/animals/ovis.svg' },
  { latin: 'Capra', english: 'Goat', icon: '/flashcard-icons/animals/capra.svg' },
  { latin: 'Asīnus', english: 'Donkey', icon: '/flashcard-icons/animals/asinus.svg' },
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
