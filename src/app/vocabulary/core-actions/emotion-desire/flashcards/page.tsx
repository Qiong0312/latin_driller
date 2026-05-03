import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_EMOTION_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsEmotionFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Emotion & Desire — Flashcards"
      cards={CORE_ACTIONS_EMOTION_CARDS}
      backToLessonHref="/vocabulary/core-actions/emotion-desire"
      quizHref="/vocabulary/core-actions/emotion-desire/test"
    />
  );
}
