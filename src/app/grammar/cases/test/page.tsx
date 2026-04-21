'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: 'Which Latin case is used to indicate the subject of a sentence, or the person/thing performing the action?',
    options: ['Accusative', 'Nominative', 'Ablative', 'Genitive'],
    correct: 1
  },
  {
    question: 'If you wanted to say "of the teacher" to show possession, which case would you use?',
    options: ['Dative', 'Vocative', 'Genitive', 'Accusative'],
    correct: 2
  },
  {
    question: 'In the sentence "Marcus Brūtī librum habet," what is the function of the word "librum"?',
    options: ['The subject performing the action', 'The person being addressed', 'The direct object receiving the action', 'The owner of the book'],
    correct: 2
  },
  {
    question: 'Which case should be used when you are speaking directly to someone, such as calling out "O Marcus!"?',
    options: ['Vocative', 'Nominative', 'Ablative', 'Dative'],
    correct: 0
  },
  {
    question: 'The Dative case is most commonly used for which of the following?',
    options: ['The means by which an action is done', 'The indirect object (to/for someone)', 'Showing possession', 'The direct object'],
    correct: 1
  },
  {
    question: 'If a word indicates the "means" or "manner" of an action (e.g., "by means of a sword"), which case is it likely in?',
    options: ['Genitive', 'Accusative', 'Ablative', 'Nominative'],
    correct: 2
  },
  {
    question: 'In the example "Marcus Brūtī librum habet," why is "Brūtī" in the genitive case?',
    options: ['Because Brutus is the subject', 'Because the book belongs to Brutus', 'Because Brutus is receiving the book', 'Because Marcus is talking to Brutus'],
    correct: 1
  },
  {
    question: 'Which of these functions is NOT associated with the Ablative case?',
    options: ['Manner', 'Separation', 'Direct Object', 'Means'],
    correct: 2
  },
  {
    question: 'How does Latin distinguish the function of a noun in a sentence compared to English?',
    options: ['Primarily through word order', 'By changing the word\'s endings', 'By using only prepositions', 'Latin does not distinguish function'],
    correct: 1
  },
  {
    question: 'What would the sentence "Marcus Brūtī librum habet" mean if "Marcus" was changed to the Accusative case and "librum" was changed to the Nominative case?',
    options: ['The book has Marcus', 'Brutus has Marcus\'s book', 'Marcus still has the book', 'The sentence becomes gibberish'],
    correct: 0
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

export default function CasesTestPage() {
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
          Cases Test Results
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
          <Link href="/grammar/cases" className="inline-block px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Cases Lesson
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-zinc-50">
        Cases Test
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