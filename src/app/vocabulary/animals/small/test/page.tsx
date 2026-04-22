'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: 'What is the Latin word for "mouse"?',
    options: ['Rana', 'Mus', 'Serpens', 'Formica'],
    correct: 1
  },
  {
    question: 'Which creature is "Rana"?',
    options: ['Mouse', 'Frog', 'Snake', 'Ant'],
    correct: 1
  },
  {
    question: 'What does "Serpens" mean?',
    options: ['Mouse', 'Frog', 'Snake', 'Bee'],
    correct: 2
  },
  {
    question: 'Which creature is "Apis"?',
    options: ['Mouse', 'Snake', 'Bee', 'Ant'],
    correct: 2
  },
  {
    question: 'What is the Latin word for "ant"?',
    options: ['Mus', 'Apis', 'Formica', 'Serpens'],
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

export default function SmallCreaturesTestPage() {
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
          Small Creatures Test Results
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
          <Link href="/vocabulary/animals/small" className="inline-block px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
            Back to Lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">
        Small Creatures Test
      </h1>
      <div className="mb-4">
        <div className="w-full rounded-full h-2 bg-zinc-100 dark:bg-zinc-800">
          <div
            className="bg-sky-300 h-2 rounded-full dark:bg-sky-600"
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
          className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-800 text-sm font-medium shadow-sm transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          Previous
        </button>
        {currentQuestion === shuffledQuestions.length - 1 ? (
          <button
            onClick={calculateScore}
            className="px-6 py-2 rounded-lg bg-sky-200 text-sky-950 text-sm font-medium shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Score Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-4 py-2 rounded-lg bg-sky-200 text-sky-950 text-sm font-medium shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}