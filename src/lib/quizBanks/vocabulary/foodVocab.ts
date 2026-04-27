import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import type { VocabEntry } from '@/lib/buildVocabularyQuestionBank';

export const FOOD_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  { latin: 'pānis', english: 'Bread', icon: '/flashcard-icons/food/panis.svg' },
  { latin: 'cāseus', english: 'Cheese', icon: '/flashcard-icons/food/caseus.svg' },
  { latin: 'ōvum', english: 'Egg', icon: '/flashcard-icons/food/ovum.svg' },
  { latin: 'cibus', english: 'Food', icon: '/flashcard-icons/food/cibus.svg' },
  { latin: 'cēna', english: 'Dinner / meal', icon: '/flashcard-icons/food/cena.svg' },
  { latin: 'mālum', english: 'Apple', icon: '/flashcard-icons/food/malum.svg' },
  { latin: 'pīrum', english: 'Pear', icon: '/flashcard-icons/food/pirum.svg' },
  { latin: 'ūva', english: 'Grape', icon: '/flashcard-icons/food/uva.svg' },
  { latin: 'fīcus', english: 'Fig', icon: '/flashcard-icons/food/ficus.svg' },
  { latin: 'cērāsum', english: 'Cherry', icon: '/flashcard-icons/food/cerasum.svg' },
  { latin: 'prūnum', english: 'Plum', icon: '/flashcard-icons/food/prunum.svg' },
  { latin: 'cārōta', english: 'Carrot', icon: '/flashcard-icons/food/carota.svg' },
  { latin: 'lactūca', english: 'Lettuce', icon: '/flashcard-icons/food/lactuca.svg' },
  { latin: 'cēpa', english: 'Onion', icon: '/flashcard-icons/food/cepa.svg' },
  { latin: 'āllium', english: 'Garlic', icon: '/flashcard-icons/food/allium.svg' },
  { latin: 'fungus', english: 'Mushroom', icon: '/flashcard-icons/food/fungus.svg' },
  { latin: 'cō', english: 'Meat', icon: '/flashcard-icons/food/caro.svg' },
  { latin: 'pōrcus', english: 'Pork / pig', icon: '/flashcard-icons/food/porcus-pork.svg' },
  { latin: 'bōs', english: 'Cow / beef', icon: '/flashcard-icons/food/bos.svg' },
  { latin: 'gallīna', english: 'Chicken', icon: '/flashcard-icons/food/gallina-chicken.svg' },
  { latin: 'piscis', english: 'Fish', icon: '/flashcard-icons/food/piscis-fish.svg' },
  { latin: 'aqua', english: 'Water', icon: '/flashcard-icons/food/aqua.svg' },
  { latin: 'lac', english: 'Milk', icon: '/flashcard-icons/food/lac.svg' },
  { latin: 'vīnum', english: 'Wine', icon: '/flashcard-icons/food/vinum.svg' },
  { latin: 'mēl', english: 'Honey', icon: '/flashcard-icons/food/mel.svg' },
  { latin: 'sāl', english: 'Salt', icon: '/flashcard-icons/food/sal.svg' },
];

function entries(cards: VocabularyFlashcard[]): VocabEntry[] {
  return cards.map(({ latin, english }) => ({ latin, english }));
}

export const FOOD_BASIC_ENTRIES = entries(FOOD_ALL_FLASHCARDS.slice(0, 5));
export const FOOD_FRUITS_ENTRIES = entries(FOOD_ALL_FLASHCARDS.slice(5, 11));
export const FOOD_VEGETABLES_ENTRIES = entries(FOOD_ALL_FLASHCARDS.slice(11, 17));
export const FOOD_MEAT_ENTRIES = entries(FOOD_ALL_FLASHCARDS.slice(17, 22));
export const FOOD_DRINKS_ENTRIES = entries(FOOD_ALL_FLASHCARDS.slice(22, 26));
