import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

function toFlashcards(items: readonly { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

function dedupeFlashcardsByLatin(cards: readonly VocabularyFlashcard[]): VocabularyFlashcard[] {
  const seen = new Set<string>();
  const out: VocabularyFlashcard[] = [];
  for (const c of cards) {
    if (seen.has(c.latin)) {
      continue;
    }
    seen.add(c.latin);
    out.push(c);
  }
  return out;
}

/** Journey & movement */
export const TRAVEL_JOURNEY_MOVEMENT = normalizeLatinEnglishRows([
  { latin: 'iter (gen. itineris)', english: 'journey / route' },
  { latin: 'via', english: 'road / way' },
  { latin: 'semita', english: 'path / trail' },
  { latin: 'gressus', english: 'step / pace' },
  { latin: 'cursus', english: 'running / course' },
]);

/** Places & locations */
export const TRAVEL_PLACES_LOCATIONS = normalizeLatinEnglishRows([
  { latin: 'urbs (gen. urbis)', english: 'city' },
  { latin: 'oppidum', english: 'town' },
  { latin: 'vīcus', english: 'village' },
  { latin: 'locus', english: 'place' },
  { latin: 'regiō', english: 'region / area' },
]);

/** Entry & passage */
export const TRAVEL_ENTRY_PASSAGE = normalizeLatinEnglishRows([
  { latin: 'porta', english: 'gate' },
  { latin: 'ianua', english: 'door' },
  { latin: 'pons (gen. pontis)', english: 'bridge' },
  { latin: 'trānsitus', english: 'crossing / passage' },
]);

/** Directions & distance */
export const TRAVEL_DIRECTIONS_DISTANCE = normalizeLatinEnglishRows([
  { latin: 'spatium', english: 'space / distance' },
  { latin: 'intervallum', english: 'interval / distance' },
  { latin: 'fīnis', english: 'boundary / border / end' },
  { latin: 'terminus', english: 'boundary / limit' },
]);

/** Travel conditions */
export const TRAVEL_CONDITIONS = normalizeLatinEnglishRows([
  { latin: 'pulvis (gen. pulveris)', english: 'dust' },
  { latin: 'lūtum', english: 'mud' },
  { latin: 'saxum', english: 'rock' },
  { latin: 'clīvus', english: 'slope / hill' },
]);

/** Transport & travel means */
export const TRAVEL_TRANSPORT_MEANS = normalizeLatinEnglishRows([
  { latin: 'equus', english: 'horse' },
  { latin: 'currus', english: 'chariot / cart' },
  { latin: 'rēda', english: 'wagon / carriage' },
  { latin: 'nāvis', english: 'ship (extends into sea travel)' },
]);

export const TRAVEL_JOURNEY_MOVEMENT_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_JOURNEY_MOVEMENT);
export const TRAVEL_PLACES_LOCATIONS_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_PLACES_LOCATIONS);
export const TRAVEL_ENTRY_PASSAGE_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_ENTRY_PASSAGE);
export const TRAVEL_DIRECTIONS_DISTANCE_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_DIRECTIONS_DISTANCE);
export const TRAVEL_CONDITIONS_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_CONDITIONS);
export const TRAVEL_TRANSPORT_MEANS_CARDS: VocabularyFlashcard[] = toFlashcards(TRAVEL_TRANSPORT_MEANS);

export const TRAVEL_ROADS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...TRAVEL_JOURNEY_MOVEMENT_CARDS,
  ...TRAVEL_PLACES_LOCATIONS_CARDS,
  ...TRAVEL_ENTRY_PASSAGE_CARDS,
  ...TRAVEL_DIRECTIONS_DISTANCE_CARDS,
  ...TRAVEL_CONDITIONS_CARDS,
  ...TRAVEL_TRANSPORT_MEANS_CARDS,
]);
