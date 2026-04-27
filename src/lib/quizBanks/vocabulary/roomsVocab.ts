import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import type { VocabEntry } from '@/lib/buildVocabularyQuestionBank';

export const ROOMS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  { latin: 'cūbiculum', english: 'bedroom', icon: '/flashcard-icons/rooms/cubiculum.svg' },
  { latin: 'dormitōrium', english: 'sleeping room / dormitory', icon: '/flashcard-icons/rooms/dormitorium.svg' },
  { latin: 'lēctus', english: 'bed', icon: '/flashcard-icons/rooms/lectus.svg' },
  { latin: 'culīna', english: 'kitchen', icon: '/flashcard-icons/rooms/culina.svg' },
  { latin: 'trīclīnium', english: 'dining room (Roman style)', icon: '/flashcard-icons/rooms/triclinium.svg' },
  { latin: 'ātrium', english: 'main hall / central room', icon: '/flashcard-icons/rooms/atrium.svg' },
  { latin: 'tāblīnum', english: 'study / office (Roman house)', icon: '/flashcard-icons/rooms/tablinum.svg' },
  { latin: 'cella', english: 'small room / chamber', icon: '/flashcard-icons/rooms/cella.svg' },
  { latin: 'camēra', english: 'room / chamber', icon: '/flashcard-icons/rooms/camera.svg' },
  { latin: 'balneum', english: 'bath / bathroom', icon: '/flashcard-icons/rooms/balneum.svg' },
  { latin: 'lāvātōrium', english: 'washing room', icon: '/flashcard-icons/rooms/lavatorium.svg' },
  { latin: 'bibliothēca', english: 'library', icon: '/flashcard-icons/rooms/bibliotheca.svg' },
  { latin: 'officīna', english: 'workshop / workroom', icon: '/flashcard-icons/rooms/officina.svg' },
  { latin: 'hortus', english: 'garden', icon: '/flashcard-icons/rooms/hortus.svg' },
  { latin: 'peristȳlium', english: 'courtyard with columns', icon: '/flashcard-icons/rooms/peristylium.svg' },
];

function e(cards: VocabularyFlashcard[]): VocabEntry[] {
  return cards.map(({ latin, english }) => ({ latin, english }));
}

export const ROOMS_LIVING_SLEEPING_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(0, 3));
export const ROOMS_EATING_COOKING_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(3, 5));
export const ROOMS_GENERAL_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(5, 9));
export const ROOMS_WASHING_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(9, 11));
export const ROOMS_STUDY_WORK_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(11, 13));
export const ROOMS_OUTDOOR_ENTRIES = e(ROOMS_ALL_FLASHCARDS.slice(13, 15));
