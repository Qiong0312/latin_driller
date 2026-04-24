import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'facies', english: 'Face', icon: '/flashcard-icons/body-parts/facies.svg' },
  { latin: 'frons', english: 'Forehead', icon: '/flashcard-icons/body-parts/frons.svg' },
  { latin: 'oculus', english: 'Eye', icon: '/flashcard-icons/body-parts/oculus.svg' },
  { latin: 'cilium', english: 'Eyelash', icon: '/flashcard-icons/body-parts/cilium.svg' },
  { latin: 'nasus', english: 'Nose', icon: '/flashcard-icons/body-parts/nasus.svg' },
  { latin: 'aures', english: 'Ears', icon: '/flashcard-icons/body-parts/aures.svg' },
  { latin: 'maxilla', english: 'Jaw', icon: '/flashcard-icons/body-parts/maxilla.svg' },
  { latin: 'dents', english: 'Tooth / teeth', icon: '/flashcard-icons/body-parts/dents.svg' },
  { latin: 'lingua', english: 'Tongue', icon: '/flashcard-icons/body-parts/lingua.svg' },
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
