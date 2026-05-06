import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SCHOOL_LANGUAGE_CONTENT_CARDS } from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

export default function SchoolLanguageContentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Language & content — Flashcards"
      cards={SCHOOL_LANGUAGE_CONTENT_CARDS}
      backToLessonHref="/vocabulary/school-learning/language-content"
      quizHref="/vocabulary/school-learning/language-content/test"
    />
  );
}
