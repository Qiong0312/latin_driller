import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const cards = [
  { latin: 'faciēs', english: 'Face', icon: '/flashcard-icons/body-parts/facies.svg' },
  { latin: 'frōns', english: 'Forehead', icon: '/flashcard-icons/body-parts/frons.svg' },
  { latin: 'oculus', english: 'Eye', icon: '/flashcard-icons/body-parts/oculus.svg' },
  { latin: 'cīlium', english: 'Eyelash', icon: '/flashcard-icons/body-parts/cilium.svg' },
  { latin: 'nāsus', english: 'Nose', icon: '/flashcard-icons/body-parts/nasus.svg' },
  { latin: 'aurēs', english: 'Ears', icon: '/flashcard-icons/body-parts/aures.svg' },
  { latin: 'maxilla', english: 'Jaw', icon: '/flashcard-icons/body-parts/maxilla.svg' },
  { latin: 'dēntēs', english: 'Tooth / teeth', icon: '/flashcard-icons/body-parts/dents.svg' },
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
