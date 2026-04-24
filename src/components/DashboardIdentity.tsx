'use client';

import { useSyncExternalStore } from 'react';
import { useIsHydrated } from '@/hooks/useIsHydrated';
import {
  getOrCreateProfileName,
  PROGRESS_EVENT,
  rerollProfileName,
} from '@/lib/localProgress';

function subscribe(onChange: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }
  const h = () => onChange();
  window.addEventListener(PROGRESS_EVENT, h);
  window.addEventListener('storage', h);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, h);
    window.removeEventListener('storage', h);
  };
}

function snapshotName(): string {
  return getOrCreateProfileName();
}

export function DashboardIdentity() {
  const hydrated = useIsHydrated();
  const fromStore = useSyncExternalStore(subscribe, snapshotName, () => 'locallearner');
  const name = hydrated ? fromStore : 'locallearner';

  return (
    <div className="mb-6 rounded-lg border border-zinc-200 bg-zinc-50/80 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
      <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Account name</p>
      <p className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{name}</p>
      <button
        type="button"
        onClick={() => rerollProfileName()}
        className="mt-3 rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        Change name
      </button>
    </div>
  );
}
