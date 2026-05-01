'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { QuizMedalSummary } from '@/components/QuizMedalSummary';
import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  FLASHCARD_FOOTER_DUAL_ROW_LAYOUT,
  FLASHCARD_FOOTER_LINK_PAIR_CLASS,
} from '@/lib/flashcardFooterStyles';

function resultsBackFooterText(backLabel: string): string {
  const trimmed = backLabel.trim();
  if (trimmed.startsWith('←')) {
    return trimmed;
  }
  return `← ${trimmed}`;
}

export type QuizResultsSummaryProps = {
  resultsHeading: string;
  score: number;
  totalQuestions: number;
  quizPath: string | null;
  backHref: string;
  /** Default “Back to Lesson”; shown as “← …” unless it already starts with ← */
  backLabel?: string;
  questions: readonly QuizQuestion[];
  answers: readonly number[];
  /** Right-aligned on sm+ (e.g. secondary “New Quiz →” button) */
  secondaryAction?: ReactNode;
};

export function QuizResultsSummary({
  resultsHeading,
  score,
  totalQuestions,
  quizPath,
  backHref,
  backLabel = 'Back to Lesson',
  questions,
  answers,
  secondaryAction,
}: QuizResultsSummaryProps) {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">{resultsHeading}</h1>
      <p className="mb-8 text-center text-2xl font-bold text-black dark:text-zinc-50">
        Score: {score} out of {totalQuestions}
      </p>
      <QuizMedalSummary quizPath={quizPath} />
      <div className="space-y-4">
        {questions.map((q, index) => {
          const isCorrect = answers[index] === q.correct;
          return (
            <div
              key={index}
              className={`rounded p-4 ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}
            >
              <p className="font-medium">
                {index + 1}. {q.question}
              </p>
              <p className="text-sm">Your answer: {q.options[answers[index]] ?? 'Not answered'}</p>
              {!isCorrect && <p className="text-sm">Correct answer: {q.options[q.correct]}</p>}
            </div>
          );
        })}
      </div>
      <footer
        className={`mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800 ${FLASHCARD_FOOTER_DUAL_ROW_LAYOUT}`}
      >
        <div className="min-w-0 flex-1">
          <Link href={backHref} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS}>
            {resultsBackFooterText(backLabel)}
          </Link>
        </div>
        {secondaryAction != null ? (
          <div className="min-w-0 flex-1 text-end [&_button]:whitespace-nowrap [&_button]:text-xs [&_button]:sm:text-sm">
            {secondaryAction}
          </div>
        ) : null}
      </footer>
    </>
  );
}
