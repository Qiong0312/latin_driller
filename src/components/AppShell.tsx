"use client";

import { useEffect, useState } from "react";
import { AppNavigation } from "@/components/AppNavigation";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col md:flex-row">
      <header className="sticky top-0 z-30 flex h-12 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 dark:border-zinc-800 dark:bg-gray-800 md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded p-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">Latin Driller</span>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(16rem,85vw)] max-w-full flex-col border-r border-zinc-200 bg-white p-4 transition-transform duration-200 ease-out dark:border-zinc-700 dark:bg-gray-800 md:hidden ${
          menuOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500">Navigation</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded p-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <AppNavigation onLinkClick={() => setMenuOpen(false)} />
        </div>
      </div>

      <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-gray-800 md:block">
        <AppNavigation />
      </aside>

      <main className="min-w-0 flex-1 overflow-x-hidden p-2 sm:p-4">{children}</main>
    </div>
  );
}
