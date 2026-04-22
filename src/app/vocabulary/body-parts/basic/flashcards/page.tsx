import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'corpus', english: 'Body', icon: '🧍' },
  { latin: 'caput', english: 'Head', icon: '👤' },
  { latin: 'collum', english: 'Neck', icon: '🧣' },
  { latin: 'umerus', english: 'Shoulder', icon: '👔' },
  { latin: 'brachium', english: 'Arm', icon: '💪' },
  { latin: 'manus', english: 'Hand', icon: '🖐️' },
  { latin: 'digitus', english: 'Finger', icon: '👆' },
  { latin: 'pectus', english: 'Chest', icon: '👕' },
  { latin: 'venter', english: 'Belly / stomach', icon: '⭕' },
  { latin: 'tergum', english: 'Back', icon: '🎒' },
  { latin: 'crus', english: 'Leg', icon: '🦵' },
  { latin: 'pes', english: 'Foot', icon: '🦶' },
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
