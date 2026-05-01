'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TestNextQuestionButton, TestQuestionNavLayout } from '@/components/TestQuestionNav';
import { QuizResultsSummary } from '@/components/QuizResultsSummary';
import { prepareQuizDeck } from '@/lib/prepareQuizDeck';
import { recordQuizResult } from '@/lib/localProgress';
import { FLASHCARD_FOOTER_ACTION_CLASS } from '@/lib/flashcardFooterStyles';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';

export type VocabBankQuizViewProps = {
  questions: QuizQuestion[];
  quizHeading: string;
  resultsHeading: string;
  backToLessonHref: string;
  backToLessonLabel?: string;
};

export function VocabBankQuizView({
  questions: questionBank,
  quizHeading,
  resultsHeading,
  backToLessonHref,
  backToLessonLabel = 'Back to Lesson',
}: VocabBankQuizViewProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const shuffled = prepareQuizDeck(questionBank);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(-1));
  }, [questionBank]);

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

  const restartQuiz = () => {
    const shuffled = prepareQuizDeck(questionBank);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(-1));
    setCurrentQuestion(0);
    setScored(false);
    setScore(0);
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
        <p className="text-center">Loading questions…</p>
      </div>
    );
  }

  if (scored) {
    return (
      <div className="app-panel">
        <QuizResultsSummary
          resultsHeading={resultsHeading}
          score={score}
          totalQuestions={shuffledQuestions.length}
          quizPath={pathname}
          backHref={backToLessonHref}
          backLabel={backToLessonLabel}
          questions={shuffledQuestions}
          answers={answers}
          secondaryAction={
            <button type="button" onClick={restartQuiz} className={FLASHCARD_FOOTER_ACTION_CLASS} aria-label="New Quiz">
              New Quiz →
            </button>
          }
        />
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">{quizHeading}</h1>
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
        backHref={backToLessonHref}
        renderRight={
          currentQuestion < shuffledQuestions.length - 1 ? (
            <TestNextQuestionButton onClick={nextQuestion} />
          ) : undefined
        }
        scoreFooterAction={
          currentQuestion === shuffledQuestions.length - 1 ? calculateScore : undefined
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
                className={`block cursor-pointer rounded border p-3 ${
                  answers[currentQuestion] === oIndex
                    ? 'border-blue-500'
                    : 'border-gray-300 dark:border-gray-600'
                } ${getOptionClass(oIndex)}`}
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
