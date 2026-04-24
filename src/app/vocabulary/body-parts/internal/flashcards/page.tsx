import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cor', english: 'Heart', icon: '/flashcard-icons/cor.svg' },
  { latin: 'pulmo', english: 'Lung', icon: '/flashcard-icons/pulmo.svg' },
  { latin: 'hepar', english: 'Liver', icon: '/flashcard-icons/hepar.svg' },
  { latin: 'ren', english: 'Kidney', icon: '/flashcard-icons/ren.svg' },
];

export default function InternalOrgansFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Internal Organs — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/body-parts/internal"
      quizHref="/vocabulary/body-parts/internal/test"
    />
  );
}
