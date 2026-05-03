import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

function latinToSlug(latin: string): string {
  return latin
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toMarketplaceFlashcards(
  items: { latin: string; english: string }[],
): VocabularyFlashcard[] {
  return items.map((e) => {
    const slug = latinToSlug(e.latin);
    const icon = `/flashcard-icons/marketplace/${slug}.svg`;
    return { ...e, icon };
  });
}

/** In forō — places, roles, and people */
export const MARKETPLACE_PLACES_PEOPLE = normalizeLatinEnglishRows([
  { latin: 'forum', english: 'marketplace / public square' },
  { latin: 'mercātus', english: 'market' },
  { latin: 'taberna', english: 'shop / stall' },
  { latin: 'mercātor', english: 'merchant / trader' },
  { latin: 'venditor', english: 'seller' },
  { latin: 'ēmptor', english: 'buyer' },
  { latin: 'cliēns', english: 'customer / client' },
]);

/** Money & trade */
export const MARKETPLACE_MONEY_TRADE = normalizeLatinEnglishRows([
  { latin: 'pecūnia', english: 'money' },
  { latin: 'nummus', english: 'coin' },
  { latin: 'pretium', english: 'price' },
  { latin: 'merx', english: 'goods / wares (gen. mercis)' },
  { latin: 'lībra', english: 'pound / balance' },
  { latin: 'pondus', english: 'weight' },
]);

/** Carrying and personal items */
export const MARKETPLACE_CARRYING = normalizeLatinEnglishRows([
  { latin: 'crumēna', english: 'purse / money bag' },
  { latin: 'saccus', english: 'sack / bag' },
  { latin: 'marsuppium', english: 'purse / pouch' },
  { latin: 'loculus', english: 'small box / cash box' },
]);

/** Equipment and setting */
export const MARKETPLACE_EQUIPMENT = normalizeLatinEnglishRows([
  { latin: 'mēnsa', english: 'table / stall table' },
  { latin: 'dolium', english: 'jar / large container' },
  { latin: 'amphora', english: 'storage jar (for liquids)' },
  { latin: 'cōpiae', english: 'supplies / abundance (plural)' },
]);

export const MARKETPLACE_PLACES_PEOPLE_CARDS: VocabularyFlashcard[] = toMarketplaceFlashcards(
  MARKETPLACE_PLACES_PEOPLE,
);
export const MARKETPLACE_MONEY_TRADE_CARDS: VocabularyFlashcard[] = toMarketplaceFlashcards(
  MARKETPLACE_MONEY_TRADE,
);
export const MARKETPLACE_CARRYING_CARDS: VocabularyFlashcard[] = toMarketplaceFlashcards(
  MARKETPLACE_CARRYING,
);
export const MARKETPLACE_EQUIPMENT_CARDS: VocabularyFlashcard[] = toMarketplaceFlashcards(
  MARKETPLACE_EQUIPMENT,
);

export const MARKETPLACE_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...MARKETPLACE_PLACES_PEOPLE_CARDS,
  ...MARKETPLACE_MONEY_TRADE_CARDS,
  ...MARKETPLACE_CARRYING_CARDS,
  ...MARKETPLACE_EQUIPMENT_CARDS,
];
