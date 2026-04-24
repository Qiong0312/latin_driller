'use client';

import type { QuizMedalTier } from '@/lib/localProgress';

const MEDAL_SRC: Record<'bronze' | 'silver' | 'gold', string> = {
  bronze: '/progress-icons/bronze-medal.svg',
  silver: '/progress-icons/silver-medal.svg',
  gold: '/progress-icons/gold-medal.svg',
};

const TROPHY_SRC: Record<'bronze' | 'silver' | 'gold', string> = {
  bronze: '/progress-icons/bronze-trophy.svg',
  silver: '/progress-icons/silver-trophy.svg',
  gold: '/progress-icons/gold-trophy.svg',
};

type IconProps = {
  className?: string;
};

/**
 * Single quiz medal (bronze / silver / gold) for UI next to labels or counts.
 */
export function MedalIconImg({ tier, className = 'h-6 w-6' }: IconProps & { tier: QuizMedalTier }) {
  if (tier === 'none') {
    return <span className={`inline-block text-zinc-400 ${className}`}>—</span>;
  }
  return (
    <img
      src={MEDAL_SRC[tier]}
      alt=""
      className={`inline-block object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

/**
 * Tier trophy (bronze / silver / gold cup) for dashboard and summaries.
 */
export function TrophyIconImg({ kind, className = 'h-6 w-6' }: IconProps & { kind: 'bronze' | 'silver' | 'gold' }) {
  return (
    <img
      src={TROPHY_SRC[kind]}
      alt=""
      className={`inline-block object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
