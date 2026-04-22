'use client';

import { useEffect } from 'react';
import { touchUsageToday } from '@/lib/localProgress';

/** Marks that the user visited the app today, for streak/day tracking. */
export function AppUsageTracker() {
  useEffect(() => {
    touchUsageToday();
  }, []);

  return null;
}
