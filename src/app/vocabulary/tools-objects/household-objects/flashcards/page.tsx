import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TOOLS_HOUSEHOLD_CARDS } from '@/lib/quizBanks/vocabulary/toolsObjectsVocab';

export default function ToolsHouseholdFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Household objects — Flashcards"
      cards={TOOLS_HOUSEHOLD_CARDS}
      backToLessonHref="/vocabulary/tools-objects/household-objects"
      quizHref="/vocabulary/tools-objects/household-objects/test"
    />
  );
}
