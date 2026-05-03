import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_COMM_CARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentCommunicationSpeechFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Communication & Speech — Flashcards"
      cards={DEPONENT_COMM_CARDS}
      backToLessonHref="/vocabulary/deponent-verbs/communication-speech"
      quizHref="/vocabulary/deponent-verbs/communication-speech/test"
    />
  );
}
