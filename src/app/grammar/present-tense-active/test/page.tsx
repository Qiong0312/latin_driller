'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TestNextQuestionButton, TestQuestionNavLayout, TestScoreSubmitButton } from '@/components/TestQuestionNav';
import { prepareQuizDeck } from '@/lib/prepareQuizDeck';
import { usePathname } from 'next/navigation';
import { recordQuizResult } from '@/lib/localProgress';
import { QuizMedalSummary } from '@/components/QuizMedalSummary';

const QUESTIONS_PER_QUIZ = 10;

const questions = [
  { question: 'The Latin present tense is used for:', options: ['Only past actions', 'Only future actions', 'Actions now, regularly, and general truths', 'Only completed actions'], correct: 2 },
  { question: 'Latin verbs show the subject by:', options: ['Word order', 'Endings', 'Prefixes', 'Capital letters'], correct: 1 },
  { question: 'What determines which ending is used?', options: ['The noun gender', 'The verb stem and conjugation', 'The sentence length', 'The object'], correct: 1 },
  { question: 'Which is TRUE?', options: ['Endings are completely different for every verb', 'Endings are mostly consistent across verbs', 'Latin has no verb endings', 'Only singular has endings'], correct: 1 },
  { question: 'What is the ending for "I"?', options: ['-s', '-o', '-t', '-mus'], correct: 1 },
  { question: 'What is the ending for "you" (singular)?', options: ['-tis', '-nt', '-s', '-mus'], correct: 2 },
  { question: 'What is the ending for "he/she/it"?', options: ['-o', '-t', '-mus', '-nt'], correct: 1 },
  { question: 'What is the ending for "we"?', options: ['-mus', '-tis', '-nt', '-s'], correct: 0 },
  { question: 'What is the ending for "you" (plural)?', options: ['-mus', '-tis', '-nt', '-o'], correct: 1 },
  { question: 'What is the ending for "they"?', options: ['-o', '-s', '-t', '-nt'], correct: 3 },
  { question: 'What does amare mean?', options: ['To see', 'To love', 'To read', 'To hear'], correct: 1 },
  { question: 'What is "I love"?', options: ['amas', 'amat', 'amo', 'amant'], correct: 2 },
  { question: 'What is "we love"?', options: ['amatis', 'amamus', 'amant', 'amas'], correct: 1 },
  { question: 'What is "they love"?', options: ['amat', 'amo', 'amant', 'amas'], correct: 2 },
  { question: 'Which form is "you (singular) love"?', options: ['amo', 'amas', 'amat', 'amamus'], correct: 1 },
  { question: 'What does videre mean?', options: ['To love', 'To hear', 'To see', 'To read'], correct: 2 },
  { question: 'What is "I see"?', options: ['vides', 'video', 'videt', 'vident'], correct: 1 },
  { question: 'What is "they see"?', options: ['videmus', 'videtis', 'vident', 'video'], correct: 2 },
  { question: 'What is "you (plural) see"?', options: ['vides', 'videtis', 'videt', 'vident'], correct: 1 },
  { question: 'What does legere mean?', options: ['To read', 'To hear', 'To love', 'To see'], correct: 0 },
  { question: 'What is "I read"?', options: ['legis', 'legit', 'lego', 'legunt'], correct: 2 },
  { question: 'What is "they read"?', options: ['legitis', 'legimus', 'legunt', 'legit'], correct: 2 },
  { question: 'What is "we read"?', options: ['legimus', 'legitis', 'legunt', 'legis'], correct: 0 },
  { question: 'What does audire mean?', options: ['To see', 'To hear', 'To love', 'To read'], correct: 1 },
  { question: 'What is "I hear"?', options: ['audis', 'audit', 'audio', 'audiunt'], correct: 2 },
  { question: 'What is "they hear"?', options: ['audit', 'audiunt', 'audimus', 'auditis'], correct: 1 },
  { question: 'What is "you (plural) hear"?', options: ['audis', 'auditis', 'audio', 'audiunt'], correct: 1 },
  { question: 'Which ending always indicates plural?', options: ['-o', '-s', '-mus / -tis / -nt', '-t'], correct: 2 },
  { question: 'Which ending always indicates singular?', options: ['-mus', '-tis', '-nt', '-o / -s / -t'], correct: 3 },
  { question: 'Which pair matches correctly?', options: ['-o -> they', '-nt -> they', '-s -> we', '-mus -> he'], correct: 1 },
  { question: 'What does amant mean?', options: ['I love', 'You love', 'He loves', 'They love'], correct: 3 },
  { question: 'What does vides mean?', options: ['I see', 'You see', 'He sees', 'They see'], correct: 1 },
  { question: 'What does legimus mean?', options: ['I read', 'You read', 'We read', 'They read'], correct: 2 },
  { question: 'What does audiunt mean?', options: ['I hear', 'You hear', 'They hear', 'We hear'], correct: 2 },
  { question: 'Why do not you always need pronouns in Latin?', options: ['They do not exist', 'The verb ending shows the subject', 'Latin avoids subjects', 'Only nouns are used'], correct: 1 },
  { question: 'Which is TRUE about learning endings?', options: ['Must memorize immediately', 'Cannot be learned', 'Will stick with practice', 'Are optional'], correct: 2 },
];

export default function PresentTenseActiveTestPage() {
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
        correct++;
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
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <p className="text-center">Loading questions...</p>
      </div>
    );
  }

  if (scored) {
    return (
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Present Tense Active - Test results</h1>
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
            href="/grammar/present-tense-active"
            className="inline-block rounded-lg bg-zinc-200 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
          >
            Back to Present Tense Active lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">Present Tense Active - Quiz</h1>
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
