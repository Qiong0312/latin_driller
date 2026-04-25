'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TestNextQuestionButton, TestQuestionNavLayout, TestScoreSubmitButton } from '@/components/TestQuestionNav';
import { prepareQuizDeck } from '@/lib/prepareQuizDeck';
import { usePathname } from 'next/navigation';
import { recordQuizResult } from '@/lib/localProgress';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import { QuizMedalSummary } from '@/components/QuizMedalSummary';

export type CategoryVocabularyTestProps = {
  title: string;
  resultsHeading: string;
  backToCategoryHref: string;
  backToCategoryLabel: string;
  questions: readonly QuizQuestion[] | QuizQuestion[];
  /** Random subset size; use {@link CATEGORY_QUIZ_MAX_QUESTIONS} (20) for full-category quizzes. */
  maxQuestions: number; // e.g. CATEGORY_QUIZ_MAX_QUESTIONS
};

export function CategoryVocabularyTest({
  title,
  resultsHeading,
  backToCategoryHref,
  backToCategoryLabel,
  questions: fullBank,
  maxQuestions,
}: CategoryVocabularyTestProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const shuffled = prepareQuizDeck([...fullBank], maxQuestions);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(-1));
  }, [fullBank, maxQuestions]);

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
        <p className="text-center">Loading questions…</p>
      </div>
    );
  }

  if (scored) {
    return (
      <div className="app-panel">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">{resultsHeading}</h1>
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
            href={backToCategoryHref}
            className="inline-block rounded-lg bg-zinc-200 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
          >
            {backToCategoryLabel}
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">{title}</h1>
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
          <p className="mb-4 text-lg text-zinc-800 dark:text-zinc-200">
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

export { CATEGORY_QUIZ_MAX_QUESTIONS } from '@/lib/prepareQuizDeck';
