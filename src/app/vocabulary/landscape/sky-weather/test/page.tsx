import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { LANDSCAPE_SKY_QUIZ } from "@/lib/quizBanks/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeSkyWeatherTestPage() {
  return (
    <VocabBankQuizView
      questions={LANDSCAPE_SKY_QUIZ}
      quizHeading="Sky & weather — Quiz"
      resultsHeading="Sky & weather — Test results"
      backToLessonHref="/vocabulary/landscape/sky-weather"
    />
  );
}
