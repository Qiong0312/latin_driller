'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    section: 'Section 1: Core Concepts',
    questions: [
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
      }
    ]
  },
  {
    section: 'Section 2: Masculine Nouns',
    questions: [
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
      }
    ]
  },
  {
    section: 'Section 3: Feminine Nouns',
    questions: [
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
      }
    ]
  },
  {
    section: 'Section 4: Neuter Nouns',
    questions: [
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
      }
    ]
  },
  {
    section: 'Section 5: Application & Reasoning',
    questions: [
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
    ]
  }
];

export default function TestPage() {
  const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
  const [scored, setScored] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((section, sectionIndex) => {
      section.questions.forEach((q, qIndex) => {
        const globalIndex = sectionIndex * 4 + qIndex;
        if (answers[globalIndex] === q.correct) {
          correct++;
        }
      });
    });
    setScore(correct);
    setScored(true);
  };

  const getOptionClass = (questionIndex: number, optionIndex: number) => {
    if (!scored) return '';
    const isSelected = answers[questionIndex] === optionIndex;
    const isCorrect = questions[Math.floor(questionIndex / 4)].questions[questionIndex % 4].correct === optionIndex;
    if (isCorrect) return 'bg-green-200 dark:bg-green-800';
    if (isSelected && !isCorrect) return 'bg-red-200 dark:bg-red-800';
    return '';
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Grammatical Gender Test
      </h1>
      {questions.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">{section.section}</h2>
          {section.questions.map((q, qIndex) => {
            const globalIndex = sectionIndex * 4 + qIndex;
            return (
              <div key={qIndex} className="mb-6">
                <p className="text-lg mb-2 text-zinc-800 dark:text-zinc-200">{globalIndex + 1}. {q.question}</p>
                <div className="space-y-1">
                  {q.options.map((option, oIndex) => (
                    <label key={oIndex} className={`block p-2 rounded cursor-pointer ${getOptionClass(globalIndex, oIndex)}`}>
                      <input
                        type="radio"
                        name={`question-${globalIndex}`}
                        value={oIndex}
                        checked={answers[globalIndex] === oIndex}
                        onChange={() => handleAnswerChange(globalIndex, oIndex)}
                        disabled={scored}
                        className="mr-2"
                      />
                      {String.fromCharCode(65 + oIndex)}. {option}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="text-center">
        {!scored ? (
          <button
            onClick={calculateScore}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Score
          </button>
        ) : (
          <div className="mb-4">
            <p className="text-2xl font-bold text-black dark:text-zinc-50">Score: {score} out of 20</p>
            <Link href="/" className="inline-block mt-4 px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
              Back to Lesson
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}