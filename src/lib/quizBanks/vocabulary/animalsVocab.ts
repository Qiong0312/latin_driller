import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import type { VocabEntry } from '@/lib/buildVocabularyQuestionBank';

/** Single source for Animalia: flashcard decks and generated quizzes. */
export const ANIMALS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  { latin: 'Canis', english: 'Dog', icon: '/flashcard-icons/animals/canis.svg' },
  { latin: 'Fēlīs', english: 'Cat', icon: '/flashcard-icons/animals/feles.svg' },
  { latin: 'Equus', english: 'Horse', icon: '/flashcard-icons/animals/equus.svg' },
  { latin: 'Vacca', english: 'Cow', icon: '/flashcard-icons/animals/vacca.svg' },
  { latin: 'Porcus', english: 'Pig', icon: '/flashcard-icons/animals/porcus.svg' },
  { latin: 'Ovis', english: 'Sheep', icon: '/flashcard-icons/animals/ovis.svg' },
  { latin: 'Capra', english: 'Goat', icon: '/flashcard-icons/animals/capra.svg' },
  { latin: 'Asīnus', english: 'Donkey', icon: '/flashcard-icons/animals/asinus.svg' },
  { latin: 'Lēo', english: 'Lion', icon: '/flashcard-icons/animals/leo.svg' },
  { latin: 'Tigris', english: 'Tiger', icon: '/flashcard-icons/animals/tigris.svg' },
  { latin: 'Ursus', english: 'Bear', icon: '/flashcard-icons/animals/ursus.svg' },
  { latin: 'Lupus', english: 'Wolf', icon: '/flashcard-icons/animals/lupus.svg' },
  { latin: 'Vulpes', english: 'Fox', icon: '/flashcard-icons/animals/vulpes.svg' },
  { latin: 'Cervus', english: 'Deer', icon: '/flashcard-icons/animals/cervus.svg' },
  { latin: 'Ēlēphāntus', english: 'Elephant', icon: '/flashcard-icons/animals/elephantus.svg' },
  { latin: 'Āvis', english: 'Bird', icon: '/flashcard-icons/animals/avis.svg' },
  { latin: 'Aquila', english: 'Eagle', icon: '/flashcard-icons/animals/aquila.svg' },
  { latin: 'Columba', english: 'Dove / pigeon', icon: '/flashcard-icons/animals/columba.svg' },
  { latin: 'Corvus', english: 'Crow', icon: '/flashcard-icons/animals/corvus.svg' },
  { latin: 'Passer', english: 'Sparrow', icon: '/flashcard-icons/animals/passer.svg' },
  { latin: 'Gallina', english: 'Hen', icon: '/flashcard-icons/animals/gallina.svg' },
  { latin: 'Gallus', english: 'Rooster', icon: '/flashcard-icons/animals/gallus.svg' },
  { latin: 'Piscis', english: 'Fish', icon: '/flashcard-icons/animals/piscis.svg' },
  { latin: 'Delphīnus', english: 'Dolphin', icon: '/flashcard-icons/animals/delphinus.svg' },
  { latin: 'Cētus', english: 'Whale', icon: '/flashcard-icons/animals/cetus.svg' },
  { latin: 'Canis mārīnus', english: 'Shark', icon: '/flashcard-icons/animals/canis-marinus.svg' },
  { latin: 'Mūs', english: 'Mouse', icon: '/flashcard-icons/animals/mus.svg' },
  { latin: 'Rāna', english: 'Frog', icon: '/flashcard-icons/animals/rana.svg' },
  { latin: 'Serpēns', english: 'Snake', icon: '/flashcard-icons/animals/serpens.svg' },
  { latin: 'Apis', english: 'Bee', icon: '/flashcard-icons/animals/apis.svg' },
  { latin: 'Formīca', english: 'Ant', icon: '/flashcard-icons/animals/formica.svg' },
];

function entries(cards: VocabularyFlashcard[]): VocabEntry[] {
  return cards.map(({ latin, english }) => ({ latin, english }));
}

export const ANIMALS_COMMON_ENTRIES = entries(ANIMALS_ALL_FLASHCARDS.slice(0, 8));
export const ANIMALS_WILD_ENTRIES = entries(ANIMALS_ALL_FLASHCARDS.slice(8, 15));
export const ANIMALS_BIRDS_ENTRIES = entries(ANIMALS_ALL_FLASHCARDS.slice(15, 21));
export const ANIMALS_SEA_ENTRIES = entries(ANIMALS_ALL_FLASHCARDS.slice(21, 25));
export const ANIMALS_SMALL_ENTRIES = entries(ANIMALS_ALL_FLASHCARDS.slice(25, 31));
