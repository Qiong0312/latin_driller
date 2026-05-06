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

/** General city terms */
export const CITY_GENERAL_TERMS = normalizeLatinEnglishRows([
  { latin: 'urbs (gen. urbis)', english: 'city' },
  { latin: 'oppidum', english: 'town' },
  { latin: 'vīcus', english: 'district / village / street area' },
  { latin: 'regiō', english: 'region / district' },
  { latin: 'locus', english: 'place' },
]);

/** Buildings & structures */
export const CITY_BUILDINGS_STRUCTURES = normalizeLatinEnglishRows([
  { latin: 'domus', english: 'house / home' },
  { latin: 'aedificium', english: 'building' },
  { latin: 'insula', english: 'apartment building / block' },
  { latin: 'villa', english: 'country house / estate' },
  { latin: 'templum', english: 'temple' },
  { latin: 'basilica', english: 'public hall / court building' },
]);

/** Parts of buildings */
export const CITY_BUILDING_PARTS = normalizeLatinEnglishRows([
  { latin: 'ianua', english: 'door' },
  { latin: 'porta', english: 'gate' },
  { latin: 'fenestra', english: 'window' },
  { latin: 'paries (gen. pariētis)', english: 'wall' },
  { latin: 'tectum', english: 'roof' },
]);

/** Public places */
export const CITY_PUBLIC_PLACES = normalizeLatinEnglishRows([
  { latin: 'forum', english: 'marketplace / public square' },
  { latin: 'theātrum', english: 'theatre' },
  { latin: 'amphitheātrum', english: 'amphitheatre' },
  { latin: 'thermae', english: 'public baths' },
  { latin: 'curia', english: 'senate house' },
]);

/** City infrastructure */
export const CITY_INFRASTRUCTURE = normalizeLatinEnglishRows([
  { latin: 'via', english: 'road / street' },
  { latin: 'platea', english: 'street / broad road (later latin)' },
  { latin: 'pons (gen. pontis)', english: 'bridge' },
  { latin: 'mūrus', english: 'wall (city wall)' },
  { latin: 'turris', english: 'tower' },
]);

export const CITY_GENERAL_TERMS_CARDS: VocabularyFlashcard[] = toFlashcards(CITY_GENERAL_TERMS);
export const CITY_BUILDINGS_STRUCTURES_CARDS: VocabularyFlashcard[] = toFlashcards(CITY_BUILDINGS_STRUCTURES);
export const CITY_BUILDING_PARTS_CARDS: VocabularyFlashcard[] = toFlashcards(CITY_BUILDING_PARTS);
export const CITY_PUBLIC_PLACES_CARDS: VocabularyFlashcard[] = toFlashcards(CITY_PUBLIC_PLACES);
export const CITY_INFRASTRUCTURE_CARDS: VocabularyFlashcard[] = toFlashcards(CITY_INFRASTRUCTURE);

export const CITY_BUILDINGS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...CITY_GENERAL_TERMS_CARDS,
  ...CITY_BUILDINGS_STRUCTURES_CARDS,
  ...CITY_BUILDING_PARTS_CARDS,
  ...CITY_PUBLIC_PLACES_CARDS,
  ...CITY_INFRASTRUCTURE_CARDS,
]);
