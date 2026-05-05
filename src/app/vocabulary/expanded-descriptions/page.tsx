import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function ExpandedDescriptionsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-2 text-center text-4xl font-bold text-black dark:text-zinc-50">Expanded Description</h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Adiectīva Mediocria — richer adjectives for time, amount, shape, place, condition, character, and sense.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/time-age"
            lessonPath="/vocabulary/expanded-descriptions/time-age"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🕐 Time &amp; Age (Tempus)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">First, last, middle, recent, ancient, young, old</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/amount-degree"
            lessonPath="/vocabulary/expanded-descriptions/amount-degree"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🔢 Amount &amp; Degree (Quantitās)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Whole, none, any, other, the other, so much</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/shape-form"
            lessonPath="/vocabulary/expanded-descriptions/shape-form"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🔷 Shape &amp; Form (Fōrma)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Round, straight, twisted, flat, level</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/position-direction"
            lessonPath="/vocabulary/expanded-descriptions/position-direction"
            cardClassName="cursor-pointer rounded-lg bg-teal-50 p-4 transition hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🧭 Position &amp; Direction (Locus)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Upper, lower, inner, outer, near, far</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/condition-quality"
            lessonPath="/vocabulary/expanded-descriptions/condition-quality"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              💪 Condition &amp; Quality (Qualitās)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Strong, weak, healthy, sick, easy, difficult</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/social-character"
            lessonPath="/vocabulary/expanded-descriptions/social-character"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🤝 Social &amp; Character (Ingenium)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Proud, humble, cruel, merciful, faithful, unfaithful</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/expanded-descriptions/sensory-appearance"
            lessonPath="/vocabulary/expanded-descriptions/sensory-appearance"
            cardClassName="cursor-pointer rounded-lg bg-cyan-50 p-4 transition hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ✨ Sensory &amp; Appearance (Aspectus)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Beautiful, ugly, splendid, dark, rough, smooth</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/expanded-descriptions/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/expanded-descriptions/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/expanded-descriptions/test" />
          <LessonDoneButton lessonPath="/vocabulary/expanded-descriptions" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/expanded-descriptions" />
      </div>
    </div>
  );
}
