import { useLayoutEffect, useState } from 'react';

/**
 * Marks when the browser has mounted. We start `false` to match SSR, then flip to `true`.
 * Uses `useLayoutEffect` so the update runs before paint — `useEffect` runs after paint and made
 * localStorage-backed UI feel like it popped in late.
 */
export function useIsHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useLayoutEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}
