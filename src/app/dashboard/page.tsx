import { DashboardIdentity } from "@/components/DashboardIdentity";
import { LocalProgressSummary } from "@/components/LocalProgressSummary";

export default function DashboardPage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Dashboard
      </h1>
      <DashboardIdentity />
      <LocalProgressSummary />
    </div>
  );
}
