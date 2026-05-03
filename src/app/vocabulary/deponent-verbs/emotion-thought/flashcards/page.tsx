import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_EMOTION_CARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentEmotionThoughtFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Emotion & Thought — Flashcards"
      cards={DEPONENT_EMOTION_CARDS}
      backToLessonHref="/vocabulary/deponent-verbs/emotion-thought"
      quizHref="/vocabulary/deponent-verbs/emotion-thought/test"
    />
  );
}
