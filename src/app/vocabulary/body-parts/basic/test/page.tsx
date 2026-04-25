'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TestNextQuestionButton, TestQuestionNavLayout, TestScoreSubmitButton } from '@/components/TestQuestionNav';
import { prepareQuizDeck } from '@/lib/prepareQuizDeck';
import { usePathname } from 'next/navigation';
import { recordQuizResult } from '@/lib/localProgress';
import { QuizMedalSummary } from '@/components/QuizMedalSummary';

const questions = [
  {
    question: 'What is the Latin word for "body"?',
    options: ['cāput', 'corpus', 'collum', 'umerus'],
    correct: 1
  },
  {
    question: 'Which body part is "cāput"?',
    options: ['neck', 'head', 'shoulder', 'arm'],
    correct: 1
  },
  {
    question: 'What does "collum" mean?',
    options: ['head', 'neck', 'shoulder', 'arm'],
    correct: 1
  },
  {
    question: 'Which part is "umerus"?',
    options: ['neck', 'arm', 'shoulder', 'hand'],
    correct: 2
  },
  {
    question: 'What is the Latin word for "arm"?',
    options: ['umerus', 'brāchium', 'mānus', 'digitus'],
    correct: 1
  },
  {
    question: 'Which body part is "mānus"?',
    options: ['arm', 'hand', 'finger', 'chest'],
    correct: 1
  },
  {
    question: 'What does "digitus" mean?',
    options: ['hand', 'finger', 'chest', 'belly'],
    correct: 1
  },
  {
    question: 'Which part is "pectus"?',
    options: ['belly', 'back', 'chest', 'leg'],
    correct: 2
  },
  {
    question: 'What is the Latin word for "belly"?',
    options: ['tergum', 'pectus', 'venter', 'crūs'],
    correct: 2
  },
  {
    question: 'Which body part is "tergum"?',
    options: ['belly', 'back', 'leg', 'foot'],
    correct: 1
  },
  {
    question: 'What does "crūs" mean?',
    options: ['foot', 'back', 'leg', 'belly'],
    correct: 2
  },
  {
    question: 'Which part is "pēs"?',
    options: ['leg', 'foot', 'back', 'belly'],
    correct: 1
  }
];

export default function BasicBodyPartsTestPage() {
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const shuffled = prepareQuizDeck(questions);
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
    if (pathname) {
      recordQuizResult(pathname, correct, shuffledQuestions.length);
    }
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
      <div className="app-panel">
        <p className="text-center">Loading questions...</p>
      </div>
    );
  }

  if (scored) {
    return (
      <div className="app-panel">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Basic Body Parts Test Results
        </h1>
        <p className="text-2xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Score: {score} out of {shuffledQuestions.length}
        </p>
        <QuizMedalSummary quizPath={pathname} />
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
          <Link href="/vocabulary/body-parts/basic" className="inline-block px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
            Back to Lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">
        Basic Body Parts Test
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
      <TestQuestionNavLayout
        onPrev={prevQuestion}
        prevDisabled={currentQuestion === 0}
        renderRight={
          currentQuestion === shuffledQuestions.length - 1 ? (
            <TestScoreSubmitButton onClick={calculateScore} />
          ) : (
            <TestNextQuestionButton onClick={nextQuestion} />
          )
        }
      >
        <div>
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
      </TestQuestionNavLayout>
    </div>
  );
}