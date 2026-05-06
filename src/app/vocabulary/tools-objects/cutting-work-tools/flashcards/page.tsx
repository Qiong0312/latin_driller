import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_CUTTING_WORK_CARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsCuttingWorkFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Cutting & work tools — Flashcards"
      cards={TOOLS_CUTTING_WORK_CARDS}
      backToLessonHref="/vocabulary/tools-objects/cutting-work-tools"
      quizHref="/vocabulary/tools-objects/cutting-work-tools/test"
    />
  );
}
