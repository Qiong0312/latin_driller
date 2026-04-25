'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { QuizMedalSummary } from '@/components/QuizMedalSummary';
import { TestNextQuestionButton, TestQuestionNavLayout, TestScoreSubmitButton } from '@/components/TestQuestionNav';
import { recordQuizResult } from '@/lib/localProgress';
import { prepareQuizDeck } from '@/lib/prepareQuizDeck';

const QUESTIONS_PER_QUIZ = 10;

const questions = [
  {
    question: 'What do Latin adjectives agree with?',
    options: ['Only the verb', 'Number, gender, and case of the noun', 'Only number', 'Only case'],
    correct: 1,
  },
  {
    question: 'In librōs bonōs habeō, bonōs agrees in:',
    options: ['Only gender', 'Case, number, and gender', 'Only case', 'Tense'],
    correct: 1,
  },
  {
    question: 'What is the positive form of an adjective?',
    options: ['Comparison form', 'Base form', 'Superlative form', 'Verb form'],
    correct: 1,
  },
  {
    question: 'Comparative form is usually made by adding:',
    options: ['-issimus', '-ior', '-us', '-um'],
    correct: 1,
  },
  {
    question: 'Superlative form is usually made by adding:',
    options: ['-ior', '-issime', '-issimus', '-er'],
    correct: 2,
  },
  {
    question: 'Perītior can also mean:',
    options: ['Most skilled', 'Somewhat skilled', 'Not skilled', 'Skilled only'],
    correct: 1,
  },
  {
    question: 'Perītissimus can mean:',
    options: ['Very skilled or most skilled', 'Less skilled', 'Not skilled', 'Equal skill'],
    correct: 0,
  },
  {
    question: 'Fill in the blank: Librōs ____ habeō. (good books)',
    options: ['bonī', 'bonōs', 'bona', 'bonum'],
    correct: 1,
  },
  {
    question: 'Fill in the blank: Puella ____ est. (skilled girl)',
    options: ['perītus', 'perīta', 'perītam', 'perītōs'],
    correct: 1,
  },
  {
    question: 'Fill in the blank: Servum ____ video. (skilled slave)',
    options: ['perītus', 'perītum', 'perīta', 'perītōs'],
    correct: 1,
  },
  {
    question: 'Fill in the blank: Librum ____ legō. (good book)',
    options: ['bonī', 'bonum', 'bonōs', 'bona'],
    correct: 1,
  },
  {
    question: 'Fill in the blank: Puellās ____ video. (skilled girls)',
    options: ['perītās', 'perītōs', 'perīta', 'perītus'],
    correct: 0,
  },
  {
    question: 'Fill in the blank: Vir ____ est. (very skilled man)',
    options: ['perītissimus', 'perītissimōs', 'perītissimum', 'perītissima'],
    correct: 0,
  },
  {
    question: 'Fill in the blank: Virōs ____ video. (very skilled men)',
    options: ['perītissimus', 'perītissimōs', 'perītissima', 'perītissimum'],
    correct: 1,
  },
  {
    question: 'Fill in the blank: Librī ____ sunt. (good books)',
    options: ['bonum', 'bonōs', 'bonī', 'bonae'],
    correct: 2,
  },
];

export default function AdjectivesTestPage() {
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const shuffled = prepareQuizDeck(questions, QUESTIONS_PER_QUIZ);
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
        correct += 1;
      }
    });
    setScore(correct);
    setScored(true);
    if (pathname) {
      recordQuizResult(pathname, correct, shuffledQuestions.length);
    }
  };

  const getCurrentQuestion = () => shuffledQuestions[currentQuestion];

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
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Adjectives - Test results</h1>
        <p className="text-2xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Score: {score} out of {shuffledQuestions.length}
        </p>
        <QuizMedalSummary quizPath={pathname} />
        <div className="space-y-4">
          {shuffledQuestions.map((q, index) => {
            const isCorrect = answers[index] === q.correct;
            return (
              <div
                key={index}
                className={`p-4 rounded ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}
              >
                <p className="font-medium">
                  {index + 1}. {q.question}
                </p>
                <p className="text-sm">Your answer: {q.options[answers[index]] || 'Not answered'}</p>
                {!isCorrect && <p className="text-sm">Correct answer: {q.options[q.correct]}</p>}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/grammar/adjectives"
            className="inline-block rounded-lg bg-zinc-200 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
          >
            Back to Adjectives lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">Adjectives - Quiz</h1>
      <div className="mb-4">
        <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-2 rounded-full bg-sky-300 dark:bg-sky-600"
            style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
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
          <p className="text-lg mb-4 text-zinc-800 dark:text-zinc-200">
            {currentQuestion + 1}. {currentQ.question}
          </p>
          <div className="space-y-2">
            {currentQ.options.map((option, oIndex) => (
              <label
                key={oIndex}
                className={`block cursor-pointer rounded border p-3 ${getOptionClass(oIndex)} ${
                  answers[currentQuestion] === oIndex
                    ? 'border-blue-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
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
