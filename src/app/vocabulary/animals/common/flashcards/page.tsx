import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'Canis', english: 'Dog', icon: '/flashcard-icons/canis.png' },
  { latin: 'Feles', english: 'Cat', icon: '/flashcard-icons/feles.png' },
  { latin: 'Equus', english: 'Horse', icon: '/flashcard-icons/equus.png' },
  { latin: 'Vacca', english: 'Cow', icon: '/flashcard-icons/vacca.png' },
  { latin: 'Porcus', english: 'Pig', icon: '/flashcard-icons/porcus.png' },
  { latin: 'Ovis', english: 'Sheep', icon: '/flashcard-icons/ovis.png' },
  { latin: 'Capra', english: 'Goat', icon: '/flashcard-icons/capra.png' },
  { latin: 'Asinus', english: 'Donkey', icon: '/flashcard-icons/asinus.png' },
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
