import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_SMALL_USEFUL_CARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsSmallUsefulFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Small useful items — Flashcards"
      cards={TOOLS_SMALL_USEFUL_CARDS}
      backToLessonHref="/vocabulary/tools-objects/small-useful-items"
      quizHref="/vocabulary/tools-objects/small-useful-items/test"
    />
  );
}
