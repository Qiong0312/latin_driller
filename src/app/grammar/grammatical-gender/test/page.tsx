'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: 'What does "grammatical gender" mean in Latin?',
    options: ['The biological sex of a person', 'A category that is part of the noun itself', 'The emotional tone of a word', 'The plural form of a noun'],
    correct: 1
  },
  {
    question: 'How is Latin different from English regarding gender?',
    options: ['Latin has no gender at all', 'English assigns gender to objects', 'Latin assigns gender even to objects', 'English has more genders than Latin'],
    correct: 2
  },
  {
    question: 'How many grammatical genders are there in Latin?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correct: 1
  },
  {
    question: 'Which of the following is NOT a Latin gender?',
    options: ['Masculine', 'Feminine', 'Neutral', 'Neuter'],
    correct: 2
  },
  {
    question: 'Which of the following is an example of a masculine noun?',
    options: ['puella', 'templum', 'vir', 'tabula'],
    correct: 2
  },
  {
    question: 'Which ending is commonly associated with masculine nouns?',
    options: ['-a', '-um', '-us', '-ae'],
    correct: 2
  },
  {
    question: 'What type of things can masculine nouns represent?',
    options: ['Only male people', 'Only objects', 'Male people, animals, and some objects', 'Only abstract ideas'],
    correct: 2
  },
  {
    question: 'Which of the following is masculine despite being an object?',
    options: ['tabula', 'fluvius', 'bellum', 'puella'],
    correct: 1
  },
  {
    question: 'Which of the following is a feminine noun?',
    options: ['puer', 'templum', 'puella', 'fluvius'],
    correct: 2
  },
  {
    question: 'What is the most common ending for feminine nouns?',
    options: ['-us', '-um', '-a', '-r'],
    correct: 2
  },
  {
    question: 'Which statement is true about feminine nouns?',
    options: ['They only refer to female humans', 'They can also refer to objects', 'They always end in -a', 'They are always plural'],
    correct: 1
  },
  {
    question: 'Which of the following is feminine but NOT a person?',
    options: ['mater', 'puella', 'tabula', 'puer'],
    correct: 2
  },
  {
    question: 'What do neuter nouns usually represent?',
    options: ['Only animals', 'Only people', 'Objects or things without specific gender', 'Only places'],
    correct: 2
  },
  {
    question: 'Which of the following is a neuter noun?',
    options: ['vir', 'tabula', 'templum', 'puer'],
    correct: 2
  },
  {
    question: 'What is the common ending for neuter nouns?',
    options: ['-a', '-us', '-um', '-is'],
    correct: 2
  },
  {
    question: 'Which word means "war" and is neuter?',
    options: ['fluvius', 'bellum', 'mater', 'puella'],
    correct: 1
  },
  {
    question: 'A noun ending in -um is MOST LIKELY:',
    options: ['Masculine', 'Feminine', 'Neuter', 'Plural'],
    correct: 2
  },
  {
    question: 'A noun ending in -a is MOST LIKELY:',
    options: ['Masculine', 'Feminine', 'Neuter', 'Irregular'],
    correct: 1
  },
  {
    question: 'Which statement best describes Latin gender?',
    options: ['It always matches biological gender', 'It is random and meaningless', 'It is part of the noun and must be memorized', 'It only applies to people'],
    correct: 2
  },
  {
    question: 'Why is fluvius masculine?',
    options: ['Because rivers are male', 'Because it refers to a man', 'Because grammatical gender is part of the word', 'Because it ends in -a'],
    correct: 2
  }
];

function shuffleArray(array: any[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GrammaticalGenderTestPage() {
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(-1));
  }, []);

  const handleAnswerChange = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    shuffledQuestions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    setScore(correct);
    setScored(true);
  };

  const getCurrentQuestion = () => {
    return shuffledQuestions[currentQuestion];
  };

  const getOptionClass = (optionIndex: number) => {
    if (!scored) return '';
    const isSelected = answers[currentQuestion] === optionIndex;
    const isCorrect = getCurrentQuestion().correct === optionIndex;
    if (isCorrect) return 'bg-green-200 dark:bg-green-800';
    if (isSelected && !isCorrect) return 'bg-red-200 dark:bg-red-800';
    return '';
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <p className="text-center">Loading questions...</p>
      </div>
    );
  }

  if (scored) {
    return (
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Grammatical Gender Test Results
        </h1>
        <p className="text-2xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Score: {score} out of {shuffledQuestions.length}
        </p>
        <div className="space-y-4">
          {shuffledQuestions.map((q, index) => {
            const isCorrect = answers[index] === q.correct;
            return (
              <div key={index} className={`p-4 rounded ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                <p className="font-medium">{index + 1}. {q.question}</p>
                <p className="text-sm">Your answer: {q.options[answers[index]] || 'Not answered'}</p>
                {!isCorrect && <p className="text-sm">Correct answer: {q.options[q.correct]}</p>}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/grammar/grammatical-gender" className="inline-block px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Grammatical Gender Lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">
        Grammatical Gender Test
      </h1>
      <div className="mb-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Question {currentQuestion + 1} of {shuffledQuestions.length}
        </p>
      </div>
      <div className="mb-6">
        <p className="text-lg mb-4 text-zinc-800 dark:text-zinc-200">{currentQuestion + 1}. {currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((option, oIndex) => (
            <label key={oIndex} className={`block p-3 rounded cursor-pointer border ${getOptionClass(oIndex)} ${answers[currentQuestion] === oIndex ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
              <input
                type="radio"
                name="answer"
                value={oIndex}
                checked={answers[currentQuestion] === oIndex}
                onChange={() => handleAnswerChange(oIndex)}
                className="mr-2"
              />
              {String.fromCharCode(65 + oIndex)}. {option}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentQuestion === shuffledQuestions.length - 1 ? (
          <button
            onClick={calculateScore}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Score Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}