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

/** Basic clothing */
export const CLOTHING_BASIC = normalizeLatinEnglishRows([
  { latin: 'vestīmentum', english: 'clothing / garment' },
  { latin: 'tunica', english: 'tunic (basic garment)' },
  { latin: 'toga', english: 'toga (formal roman garment)' },
  { latin: 'palla', english: 'cloak / shawl (for women)' },
  { latin: 'pallium', english: 'cloak (general)' },
]);

/** Outerwear */
export const CLOTHING_OUTERWEAR = normalizeLatinEnglishRows([
  { latin: 'amictus', english: 'cloak / covering' },
  { latin: 'sagum', english: 'military cloak' },
  { latin: 'paenula', english: 'traveling cloak' },
]);

/** Footwear */
export const CLOTHING_FOOTWEAR = normalizeLatinEnglishRows([
  { latin: 'calceus', english: 'shoe' },
  { latin: 'sandalium', english: 'sandal' },
  { latin: 'solea', english: 'sandal (light indoor sandal)' },
]);

/** Accessories */
export const CLOTHING_ACCESSORIES = normalizeLatinEnglishRows([
  { latin: 'cingulum', english: 'belt' },
  { latin: 'zona', english: 'belt / girdle' },
  { latin: 'anulus', english: 'ring' },
  { latin: 'bulla', english: 'amulet (worn by children)' },
]);

/** Materials & parts */
export const CLOTHING_MATERIALS_PARTS = normalizeLatinEnglishRows([
  { latin: 'textus', english: 'fabric / woven material' },
  { latin: 'lāna', english: 'wool' },
  { latin: 'linum', english: 'linen' },
  { latin: 'fibula', english: 'clasp / brooch' },
]);

export const CLOTHING_BASIC_CARDS: VocabularyFlashcard[] = toFlashcards(CLOTHING_BASIC);
export const CLOTHING_OUTERWEAR_CARDS: VocabularyFlashcard[] = toFlashcards(CLOTHING_OUTERWEAR);
export const CLOTHING_FOOTWEAR_CARDS: VocabularyFlashcard[] = toFlashcards(CLOTHING_FOOTWEAR);
export const CLOTHING_ACCESSORIES_CARDS: VocabularyFlashcard[] = toFlashcards(CLOTHING_ACCESSORIES);
export const CLOTHING_MATERIALS_PARTS_CARDS: VocabularyFlashcard[] = toFlashcards(CLOTHING_MATERIALS_PARTS);

export const CLOTHING_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...CLOTHING_BASIC_CARDS,
  ...CLOTHING_OUTERWEAR_CARDS,
  ...CLOTHING_FOOTWEAR_CARDS,
  ...CLOTHING_ACCESSORIES_CARDS,
  ...CLOTHING_MATERIALS_PARTS_CARDS,
]);
