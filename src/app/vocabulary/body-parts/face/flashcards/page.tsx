import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'facies', english: 'Face', icon: '/flashcard-icons/facies.svg' },
  { latin: 'frons', english: 'Forehead', icon: '/flashcard-icons/frons.svg' },
  { latin: 'oculus', english: 'Eye', icon: '/flashcard-icons/oculus.svg' },
  { latin: 'cilium', english: 'Eyelash', icon: '/flashcard-icons/cilium.svg' },
  { latin: 'nasus', english: 'Nose', icon: '/flashcard-icons/nasus.svg' },
  { latin: 'aures', english: 'Ears', icon: '/flashcard-icons/aures.svg' },
  { latin: 'maxilla', english: 'Jaw', icon: '/flashcard-icons/maxilla.svg' },
  { latin: 'dents', english: 'Tooth / teeth', icon: '/flashcard-icons/dents.svg' },
  { latin: 'lingua', english: 'Tongue', icon: '/flashcard-icons/lingua.svg' },
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
