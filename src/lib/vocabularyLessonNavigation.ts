import { VOCABULARY_LESSON_PATHS } from '@/lib/trackedLessons';

/** Same hubs and order as side nav (@see AppNavigation VOCAB_LINKS) */
export const VOCABULARY_CATEGORY_NAV = [
  { href: '/vocabulary/animals', label: 'Animals' },
  { href: '/vocabulary/food', label: 'Food' },
  { href: '/vocabulary/body-parts', label: 'Body Parts' },
  { href: '/vocabulary/rooms', label: 'Rooms' },
  { href: '/vocabulary/landscape', label: 'Land & landscape' },
  { href: '/vocabulary/marketplace', label: 'Marketplace' },
  { href: '/vocabulary/family', label: 'Family Members' },
  { href: '/vocabulary/occupations', label: 'Occupations' },
  { href: '/vocabulary/time', label: 'Time' },
  { href: '/vocabulary/school-learning', label: 'School & Learning' },
  { href: '/vocabulary/core-actions', label: 'Core Actions' },
  { href: '/vocabulary/environment-interaction', label: 'Environment & Interaction' },
  { href: '/vocabulary/society-relationships', label: 'Society & Relationships' },
  { href: '/vocabulary/irregular-verbs', label: 'Irregular Verbs' },
  { href: '/vocabulary/deponent-verbs', label: 'Deponent Verbs' },
  { href: '/vocabulary/core-descriptions', label: 'Core Descriptions' },
  { href: '/vocabulary/expanded-descriptions', label: 'Expanded Description' },
] as const;

/** Display titles in the same order as {@link VOCABULARY_LESSON_PATHS} */
const VOCABULARY_SUB_LESSON_LABELS = [
  'Common Animals',
  'Wild Animals',
  'Birds',
  'Sea Animals',
  'Small Creatures',
  'Basic Foods',
  'Fruits',
  'Vegetables',
  'Meat & Protein',
  'Drinks & Others',
  'Basic Body Parts',
  'Face Parts',
  'Internal Organs',
  'Living & Sleeping Areas',
  'Eating & Cooking',
  'General House Spaces',
  'Washing & Bathing',
  'Study & Work',
  'Outdoor / Extra Spaces',
  'Land & World',
  'Mountains & Landforms',
  'Water',
  'Plants & Nature',
  'Sky & Weather',
  'Natural Elements',
  'Places & People',
  'Money & Trade',
  'Carrying & Personal Items',
  'Equipment & Setting',
  'Immediate Family',
  'Extended Family',
  'Other Relations',
  'General Occupations',
  'Military & Government',
  'Education & Knowledge',
  'Crafts & Trades',
  'Arts & Entertainment',
  'Basic Time Units (Tempora Fundamentālia)',
  'Larger Time Units (Tempora Maiōra)',
  'Parts of the Day (Partēs Diēī)',
  'Specific Moments & Periods',
  'Frequency & Occasion',
  'Study Materials (Librī et Instrumenta)',
  'Language & Content (Lingua et Scriptum)',
  'Learning Concepts (Disciplina)',
  'School Environment',
  'Daily Actions (Āctiōnēs cotīdiānae)',
  'Senses & Perception (Sēnsūs)',
  'Communication (Cōnloquium)',
  'Thinking & Knowing (Cōgitātiō et scientia)',
  'Emotion & Desire (Affectūs et cupiditās)',
  'Home Actions (Āctiōnēs Domūs)',
  'Marketplace & Money (Mercātus et Pecūnia)',
  'Military & Government (Mīlitia et Imperium)',
  'Nature & Movement (Nātūra et Mōtus)',
  'Weather & Natural Phenomena (Tempestās et Nātūra)',
  'Family & Relationships (Familia et Relātiōnēs)',
  'Learning & Teaching (Disciplina et Doctrīna)',
  'Travel & Exploration (Iter et Explōrātiō)',
  'Religion & Ritual (Relīgiō et Sacra)',
  'Law & Society (Lēx et Societās)',
  'Essential Irregular Verbs',
  'Common High-Frequency Irregulars',
  'Compound Irregular Verbs',
  'Communication & Speech',
  'Movement & Action',
  'Emotion & Thought',
  'Social & Legal Actions',
  'Semi-Deponent Verbs (Advanced)',
  'Size & Quantity (Magnitūdō)',
  'Quality & Value (Qualitās)',
  'Physical Properties (Corpus / Forma)',
  'Condition & State (Status)',
  'Basic Appearance & Color (Aspectus)',
  'Simple Personality (Ingenium)',
  'Time & Age (Tempus)',
  'Amount & Degree (Quantitās)',
  'Shape & Form (Fōrma)',
  'Position & Direction (Locus)',
  'Condition & Quality (Qualitās)',
  'Social & Character (Ingenium)',
  'Sensory & Appearance (Aspectus)',
] as const satisfies readonly string[];

if (
  VOCABULARY_SUB_LESSON_LABELS.length !== VOCABULARY_LESSON_PATHS.length ||
  !VOCABULARY_LESSON_PATHS.every((_, i) => VOCABULARY_SUB_LESSON_LABELS[i] !== undefined)
) {
  throw new Error(
    `VOCABULARY_SUB_LESSON_LABELS length (${VOCABULARY_SUB_LESSON_LABELS.length}) must equal VOCABULARY_LESSON_PATHS (${VOCABULARY_LESSON_PATHS.length})`,
  );
}

export type VocabularyNavEntry = {
  href: string;
  label: string;
};

export const VOCABULARY_SUB_LESSON_NAV: readonly VocabularyNavEntry[] = VOCABULARY_LESSON_PATHS.map((href, i) => ({
  href,
  label: VOCABULARY_SUB_LESSON_LABELS[i],
}));

export function getVocabularySubLessonAdjacent(
  lessonPath: string,
): { prev: VocabularyNavEntry | null; next: VocabularyNavEntry | null } {
  const normalized = lessonPath.replace(/\/$/, '') || lessonPath;
  const i = VOCABULARY_SUB_LESSON_NAV.findIndex((e) => e.href === normalized);
  if (i === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: i > 0 ? VOCABULARY_SUB_LESSON_NAV[i - 1] : null,
    next: i < VOCABULARY_SUB_LESSON_NAV.length - 1 ? VOCABULARY_SUB_LESSON_NAV[i + 1] : null,
  };
}

export function getVocabularyCategoryAdjacent(
  categoryPath: string,
): { prev: VocabularyNavEntry | null; next: VocabularyNavEntry | null } {
  const normalized = categoryPath.replace(/\/$/, '') || categoryPath;
  const list = VOCABULARY_CATEGORY_NAV as readonly VocabularyNavEntry[];
  const i = list.findIndex((e) => e.href === normalized);
  if (i === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: i > 0 ? list[i - 1] : null,
    next: i < list.length - 1 ? list[i + 1] : null,
  };
}
