import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'malum', english: 'Apple', icon: '🍎' },
  { latin: 'pirum', english: 'Pear', icon: '🍐' },
  { latin: 'uva', english: 'Grape', icon: '🍇' },
  { latin: 'ficus', english: 'Fig', icon: '🌳' },
  { latin: 'cerasum', english: 'Cherry', icon: '🍒' },
  { latin: 'prunum', english: 'Plum', icon: '🟣' },
];

export default function FruitsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Fruits — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/food/fruits"
      quizHref="/vocabulary/food/fruits/test"
    />
  );
}
