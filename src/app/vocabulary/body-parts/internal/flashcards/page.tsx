import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'cor', english: 'Heart', icon: '🫀' },
  { latin: 'pulmo', english: 'Lung', icon: '🫁' },
  { latin: 'hepar', english: 'Liver', icon: '🥩' },
  { latin: 'ren', english: 'Kidney', icon: '🫘' },
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
