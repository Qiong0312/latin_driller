import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'corpus', english: 'Body', icon: '/flashcard-icons/corpus.svg' },
  { latin: 'caput', english: 'Head', icon: '/flashcard-icons/caput.svg' },
  { latin: 'collum', english: 'Neck', icon: '/flashcard-icons/collum.svg' },
  { latin: 'umerus', english: 'Shoulder', icon: '/flashcard-icons/umerus.svg' },
  { latin: 'brachium', english: 'Arm', icon: '/flashcard-icons/brachium.svg' },
  { latin: 'manus', english: 'Hand', icon: '/flashcard-icons/manus.svg' },
  { latin: 'digitus', english: 'Finger', icon: '/flashcard-icons/digitus.svg' },
  { latin: 'pectus', english: 'Chest', icon: '/flashcard-icons/pectus.svg' },
  { latin: 'venter', english: 'Belly / stomach', icon: '/flashcard-icons/venter.svg' },
  { latin: 'tergum', english: 'Back', icon: '/flashcard-icons/tergum.svg' },
  { latin: 'crus', english: 'Leg', icon: '/flashcard-icons/crus.svg' },
  { latin: 'pes', english: 'Foot', icon: '/flashcard-icons/pes.svg' },
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
