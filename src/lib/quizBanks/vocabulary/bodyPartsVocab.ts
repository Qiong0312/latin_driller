import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import type { VocabEntry } from '@/lib/buildVocabularyQuestionBank';

export const BODY_PARTS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  { latin: 'corpus', english: 'Body', icon: '/flashcard-icons/body-parts/corpus.svg' },
  { latin: 'cāput', english: 'Head', icon: '/flashcard-icons/body-parts/caput.svg' },
  { latin: 'collum', english: 'Neck', icon: '/flashcard-icons/body-parts/collum.svg' },
  { latin: 'umerus', english: 'Shoulder', icon: '/flashcard-icons/body-parts/umerus.svg' },
  { latin: 'brāchium', english: 'Arm', icon: '/flashcard-icons/body-parts/brachium.svg' },
  { latin: 'mānus', english: 'Hand', icon: '/flashcard-icons/body-parts/manus.svg' },
  { latin: 'digitus', english: 'Finger', icon: '/flashcard-icons/body-parts/digitus.svg' },
  { latin: 'pectus', english: 'Chest', icon: '/flashcard-icons/body-parts/pectus.svg' },
  { latin: 'venter', english: 'Belly / stomach', icon: '/flashcard-icons/body-parts/venter.svg' },
  { latin: 'tergum', english: 'Back', icon: '/flashcard-icons/body-parts/tergum.svg' },
  { latin: 'crūs', english: 'Leg', icon: '/flashcard-icons/body-parts/crus.svg' },
  { latin: 'pēs', english: 'Foot', icon: '/flashcard-icons/body-parts/pes.svg' },
  { latin: 'faciēs', english: 'Face', icon: '/flashcard-icons/body-parts/facies.svg' },
  { latin: 'frōns', english: 'Forehead', icon: '/flashcard-icons/body-parts/frons.svg' },
  { latin: 'oculus', english: 'Eye', icon: '/flashcard-icons/body-parts/oculus.svg' },
  { latin: 'cīlium', english: 'Eyelash', icon: '/flashcard-icons/body-parts/cilium.svg' },
  { latin: 'nāsus', english: 'Nose', icon: '/flashcard-icons/body-parts/nasus.svg' },
  { latin: 'aurēs', english: 'Ears', icon: '/flashcard-icons/body-parts/aures.svg' },
  { latin: 'maxilla', english: 'Jaw', icon: '/flashcard-icons/body-parts/maxilla.svg' },
  { latin: 'dēntēs', english: 'Tooth / teeth', icon: '/flashcard-icons/body-parts/dents.svg' },
  { latin: 'lingua', english: 'Tongue', icon: '/flashcard-icons/body-parts/lingua.svg' },
  { latin: 'cor', english: 'Heart', icon: '/flashcard-icons/body-parts/cor.svg' },
  { latin: 'pulmō', english: 'Lung', icon: '/flashcard-icons/body-parts/pulmo.svg' },
  { latin: 'hēpar', english: 'Liver', icon: '/flashcard-icons/body-parts/hepar.svg' },
  { latin: 'rēn', english: 'Kidney', icon: '/flashcard-icons/body-parts/ren.svg' },
];

function entries(cards: VocabularyFlashcard[]): VocabEntry[] {
  return cards.map(({ latin, english }) => ({ latin, english }));
}

export const BODY_PARTS_BASIC_ENTRIES = entries(BODY_PARTS_ALL_FLASHCARDS.slice(0, 13));
export const BODY_PARTS_FACE_ENTRIES = entries(BODY_PARTS_ALL_FLASHCARDS.slice(13, 21));
export const BODY_PARTS_INTERNAL_ENTRIES = entries(BODY_PARTS_ALL_FLASHCARDS.slice(21, 26));
