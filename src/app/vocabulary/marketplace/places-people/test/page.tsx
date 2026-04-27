import { VocabBankQuizView } from "@/components/VocabBankQuizView";
import { MARKETPLACE_PLACES_PEOPLE_QUIZ } from "@/lib/quizBanks/vocabulary/marketplaceCategoryQuestionBank";

export default function MarketplacePlacesPeopleTestPage() {
  return (
    <VocabBankQuizView
      questions={MARKETPLACE_PLACES_PEOPLE_QUIZ}
      quizHeading="Places & people — Quiz"
      resultsHeading="Places & people — Test results"
      backToLessonHref="/vocabulary/marketplace/places-people"
    />
  );
}
