import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cor', english: 'Heart', icon: '/flashcard-icons/body-parts/cor.svg' },
  { latin: 'pulmo', english: 'Lung', icon: '/flashcard-icons/body-parts/pulmo.svg' },
  { latin: 'hepar', english: 'Liver', icon: '/flashcard-icons/body-parts/hepar.svg' },
  { latin: 'ren', english: 'Kidney', icon: '/flashcard-icons/body-parts/ren.svg' },
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
