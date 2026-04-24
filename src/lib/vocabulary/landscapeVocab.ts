import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

const empty = '';

/** Flashcard with SVG placeholder (add later in `public/flashcard-icons/`). */
export function withEmptyIcon(
  items: { latin: string; english: string }[],
): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: empty }));
}

export const LANDSCAPE_LAND: { latin: string; english: string }[] = [
  { latin: 'terra', english: 'earth / land' },
  { latin: 'mundus', english: 'world' },
  { latin: 'regio', english: 'region / area' },
  { latin: 'locus', english: 'place' },
  { latin: 'campus', english: 'field / plain' },
  { latin: 'ager', english: 'farmland / field' },
];

export const LANDSCAPE_MOUNTAINS: { latin: string; english: string }[] = [
  { latin: 'mōns', english: 'mountain' },
  { latin: 'collis', english: 'hill' },
  { latin: 'vallis', english: 'valley' },
  { latin: 'saxum', english: 'rock' },
  { latin: 'rūpēs', english: 'cliff' },
];

export const LANDSCAPE_WATER: { latin: string; english: string }[] = [
  { latin: 'aqua', english: 'water' },
  { latin: 'fluvius', english: 'river' },
  { latin: 'rīvus', english: 'stream' },
  { latin: 'lacus', english: 'lake' },
  { latin: 'mare', english: 'sea' },
  { latin: 'ūnda', english: 'wave' },
];

export const LANDSCAPE_PLANTS: { latin: string; english: string }[] = [
  { latin: 'arbor', english: 'tree' },
  { latin: 'silva', english: 'forest / wood' },
  { latin: 'folium', english: 'leaf' },
  { latin: 'flōs', english: 'flower' },
  { latin: 'herba', english: 'grass / herb' },
];

export const LANDSCAPE_SKY: { latin: string; english: string }[] = [
  { latin: 'caelum', english: 'sky' },
  { latin: 'sōl', english: 'sun' },
  { latin: 'lūna', english: 'moon' },
  { latin: 'stella', english: 'star' },
  { latin: 'nūbēs', english: 'cloud' },
  { latin: 'ventus', english: 'wind' },
  { latin: 'pluvia', english: 'rain' },
];

export const LANDSCAPE_ELEMENTS: { latin: string; english: string }[] = [
  { latin: 'ignis', english: 'fire' },
  { latin: 'lūx', english: 'light' },
  { latin: 'umbra', english: 'shadow' },
];

export const LANDSCAPE_ALL_FLASHCARDS: VocabularyFlashcard[] = withEmptyIcon([
  ...LANDSCAPE_LAND,
  ...LANDSCAPE_MOUNTAINS,
  ...LANDSCAPE_WATER,
  ...LANDSCAPE_PLANTS,
  ...LANDSCAPE_SKY,
  ...LANDSCAPE_ELEMENTS,
]);
