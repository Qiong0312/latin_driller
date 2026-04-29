import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export const neQuestionsQuiz: QuizQuestion[] = [
  {
    question: 'What does enclitic -ne mark in Latin?',
    options: ['A command', 'A yes-or-no question', 'A relative clause', 'A comparison'],
    correct: 1,
  },
  {
    question: 'Where is -ne usually added?',
    options: ['At the end of the sentence only', 'To the emphatic word, often the first word', 'Only to nouns', 'Only to adjectives'],
    correct: 1,
  },
  {
    question: 'Choose the correct yes-or-no question from Iūlia cantat.',
    options: ['Iūliane cantat?', 'Cantat Iūliane?', 'Cantatne Iūlia?', 'Ne cantat Iūlia?'],
    correct: 2,
  },
  {
    question: 'Which is the correct question form of Mārcus venit?',
    options: ['Venitne Mārcus?', 'Mārcusne venit?', 'Ne Mārcus venit?', 'Venit Mārcusne?'],
    correct: 0,
  },
  {
    question: 'Which is the correct question form of Puer librum legit?',
    options: ['Legitne puer librum?', 'Puerne librum legit?', 'Legit puerne librum?', 'Ne legit puer librum?'],
    correct: 0,
  },
  {
    question: 'Pick the best question form: Magistra discipulōs laudat.',
    options: [
      'Laudatne magistra discipulōs?',
      'Magistrane discipulōs laudat?',
      'Laudat magistra disciplinōsne?',
      'Ne magistra discipulōs laudat?',
    ],
    correct: 0,
  },
  {
    question: 'How do you ask “Is Rome in Italy?” from Rōma in Italiā est?',
    options: ['Rōmane in Italiā est?', 'Estne Rōma in Italiā?', 'In Italiāne Rōma est?', 'Ne Rōma in Italiā est?'],
    correct: 1,
  },
  {
    question: 'How do you ask “Is the dog sleeping?” from Canis dormit?',
    options: ['Canisne dormit?', 'Dormit canisne?', 'Dormitne canis?', 'Ne dormit canis?'],
    correct: 2,
  },
  {
    question: 'In Cantatne Iūlia?, where is -ne attached?',
    options: ['To Iūlia', 'To cantat', 'To the whole sentence', 'To an implied pronoun'],
    correct: 1,
  },
  {
    question: 'Which statement about -ne is accurate for this lesson?',
    options: [
      'It creates only open-ended questions',
      'It indicates a yes-or-no question',
      'It is used only with verbs of motion',
      'It replaces all punctuation',
    ],
    correct: 1,
  },
  {
    question: 'Which form is best Latin for “Does the boy read a book?”',
    options: ['Legitne puer librum?', 'Legit puer librumne?', 'Puer librum legitne?', 'Ne puer librum legit?'],
    correct: 0,
  },
  {
    question: 'Which sentence is a statement (not a -ne yes-or-no question)?',
    options: ['Venitne Mārcus?', 'Cantatne Iūlia?', 'Canis dormit.', 'Estne Rōma in Italiā?'],
    correct: 2,
  },
];
