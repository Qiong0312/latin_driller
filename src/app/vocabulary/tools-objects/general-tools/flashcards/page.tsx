import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_GENERAL_CARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsGeneralFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="General tools — Flashcards"
      cards={TOOLS_GENERAL_CARDS}
      backToLessonHref="/vocabulary/tools-objects/general-tools"
      quizHref="/vocabulary/tools-objects/general-tools/test"
    />
  );
}
