import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_EVERYDAY_CARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsEverydayFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Everyday objects — Flashcards"
      cards={TOOLS_EVERYDAY_CARDS}
      backToLessonHref="/vocabulary/tools-objects/everyday-objects"
      quizHref="/vocabulary/tools-objects/everyday-objects/test"
    />
  );
}
