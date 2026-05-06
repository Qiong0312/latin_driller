import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_OBJECTS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsObjectsCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Tools & Objects (Instrumenta) — Flashcards"
      cards={TOOLS_OBJECTS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/tools-objects"
      quizHref="/vocabulary/tools-objects/test"
    />
  );
}
