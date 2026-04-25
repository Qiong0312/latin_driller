import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'corpus', english: 'Body', icon: '/flashcard-icons/body-parts/corpus.svg' },
  { latin: 'cāput', english: 'Head', icon: '/flashcard-icons/body-parts/caput.svg' },
  { latin: 'collum', english: 'Neck', icon: '/flashcard-icons/body-parts/collum.svg' },
  { latin: 'umerus', english: 'Shoulder', icon: '/flashcard-icons/body-parts/umerus.svg' },
  { latin: 'brāchium', english: 'Arm', icon: '/flashcard-icons/body-parts/brachium.svg' },
  { latin: 'mānus', english: 'Hand', icon: '/flashcard-icons/body-parts/manus.svg' },
  { latin: 'digitus', english: 'Finger', icon: '/flashcard-icons/body-parts/digitus.svg' },
  { latin: 'pectus', english: 'Chest', icon: '/flashcard-icons/body-parts/pectus.svg' },
  { latin: 'venter', english: 'Belly / stomach', icon: '/flashcard-icons/body-parts/venter.svg' },
  { latin: 'tergum', english: 'Back', icon: '/flashcard-icons/body-parts/tergum.svg' },
  { latin: 'crūs', english: 'Leg', icon: '/flashcard-icons/body-parts/crus.svg' },
  { latin: 'pēs', english: 'Foot', icon: '/flashcard-icons/body-parts/pes.svg' },
];

export default function BasicBodyPartsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Basic Body Parts — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/body-parts/basic"
      quizHref="/vocabulary/body-parts/basic/test"
    />
  );
}
