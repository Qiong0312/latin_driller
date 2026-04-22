import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'facies', english: 'Face', icon: '🙂' },
  { latin: 'frons', english: 'Forehead', icon: '🔝' },
  { latin: 'oculus', english: 'Eye', icon: '👁️' },
  { latin: 'cilium', english: 'Eyelash', icon: '✨' },
  { latin: 'nasus', english: 'Nose', icon: '👃' },
  { latin: 'aures', english: 'Ears', icon: '👂' },
  { latin: 'maxilla', english: 'Jaw', icon: '🦴' },
  { latin: 'dents', english: 'Tooth / teeth', icon: '🦷' },
  { latin: 'lingua', english: 'Tongue', icon: '👅' },
];

export default function FacePartsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Face Parts — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/body-parts/face"
      quizHref="/vocabulary/body-parts/face/test"
    />
  );
}
