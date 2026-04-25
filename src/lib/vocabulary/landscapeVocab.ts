import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

const empty = '';

/** Flashcard with SVG placeholder (add later as `public/flashcard-icons/land-landscape/<lemma>.svg`). */
export function withEmptyIcon(
  items: { latin: string; english: string }[],
): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: empty }));
}

export const LANDSCAPE_LAND: { latin: string; english: string }[] = [
  { latin: 'terra', english: 'earth / land' },
  { latin: 'mundus', english: 'world' },
  { latin: 'rēgĭō', english: 'region / area' },
  { latin: 'locus', english: 'place' },
  { latin: 'cāmpus', english: 'field / plain' },
  { latin: 'āger', english: 'farmland / field' },
];

export const LANDSCAPE_MOUNTAINS: { latin: string; english: string }[] = [
  { latin: 'mōns', english: 'mountain' },
  { latin: 'collis', english: 'hill' },
  { latin: 'vallis', english: 'valley' },
  { latin: 'sāxum', english: 'rock' },
  { latin: 'rūpēs', english: 'cliff' },
];

export const LANDSCAPE_WATER: { latin: string; english: string }[] = [
  { latin: 'aqua', english: 'water' },
  { latin: 'fluvius', english: 'river' },
  { latin: 'rīvus', english: 'stream' },
  { latin: 'lacus', english: 'lake' },
  { latin: 'māre', english: 'sea' },
  { latin: 'ūnda', english: 'wave' },
];

export const LANDSCAPE_PLANTS: { latin: string; english: string }[] = [
  { latin: 'arbor', english: 'tree' },
  { latin: 'sīlva', english: 'forest / wood' },
  { latin: 'folium', english: 'leaf' },
  { latin: 'flōs', english: 'flower' },
  { latin: 'hērba', english: 'grass / herb' },
];

export const LANDSCAPE_SKY: { latin: string; english: string }[] = [
  { latin: 'caelum', english: 'sky' },
  { latin: 'sōl', english: 'sun' },
  { latin: 'lūna', english: 'moon' },
  { latin: 'stēlla', english: 'star' },
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
