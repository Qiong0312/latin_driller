import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

/** No icon until SVGs exist under e.g. `public/flashcard-icons/marketplace/`. */
function toFlashcardsWithoutIcon(
  items: { latin: string; english: string }[],
): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

/** In forō — places, roles, and people */
export const MARKETPLACE_PLACES_PEOPLE: { latin: string; english: string }[] = [
  { latin: 'forum', english: 'marketplace / public square' },
  { latin: 'mercātus', english: 'market' },
  { latin: 'taberna', english: 'shop / stall' },
  { latin: 'mercātor', english: 'merchant / trader' },
  { latin: 'venditor', english: 'seller' },
  { latin: 'ēmptor', english: 'buyer' },
  { latin: 'cliēns', english: 'customer / client' },
];

/** Money & trade */
export const MARKETPLACE_MONEY_TRADE: { latin: string; english: string }[] = [
  { latin: 'pecūnia', english: 'money' },
  { latin: 'nummus', english: 'coin' },
  { latin: 'pretium', english: 'price' },
  { latin: 'merx', english: 'goods / wares (gen. mercis)' },
  { latin: 'lībra', english: 'pound / balance' },
  { latin: 'pondus', english: 'weight' },
];

/** Carrying and personal items */
export const MARKETPLACE_CARRYING: { latin: string; english: string }[] = [
  { latin: 'crumēna', english: 'purse / money bag' },
  { latin: 'saccus', english: 'sack / bag' },
  { latin: 'marsuppium', english: 'purse / pouch' },
  { latin: 'loculus', english: 'small box / cash box' },
];

/** Equipment and setting */
export const MARKETPLACE_EQUIPMENT: { latin: string; english: string }[] = [
  { latin: 'mēnsa', english: 'table / stall table' },
  { latin: 'dolium', english: 'jar / large container' },
  { latin: 'amphora', english: 'storage jar (for liquids)' },
  { latin: 'cōpiae', english: 'supplies / abundance (plural)' },
];

export const MARKETPLACE_PLACES_PEOPLE_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(
  MARKETPLACE_PLACES_PEOPLE,
);
export const MARKETPLACE_MONEY_TRADE_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(
  MARKETPLACE_MONEY_TRADE,
);
export const MARKETPLACE_CARRYING_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(
  MARKETPLACE_CARRYING,
);
export const MARKETPLACE_EQUIPMENT_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(
  MARKETPLACE_EQUIPMENT,
);

export const MARKETPLACE_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...MARKETPLACE_PLACES_PEOPLE_CARDS,
  ...MARKETPLACE_MONEY_TRADE_CARDS,
  ...MARKETPLACE_CARRYING_CARDS,
  ...MARKETPLACE_EQUIPMENT_CARDS,
];
