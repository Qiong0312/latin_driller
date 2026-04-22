"use client";

/** One line for the app shell: clarifies that progress is local-only. */
export function ProgressStorageHint() {
  return (
    <p className="mt-6 border-t border-zinc-200 pt-3 text-xs leading-snug text-zinc-500 dark:border-zinc-600 dark:text-zinc-500">
      “Done” for each lesson, plus any quiz/flash data, is stored in this browser only. It does not leave your
      device.
    </p>
  );
}
