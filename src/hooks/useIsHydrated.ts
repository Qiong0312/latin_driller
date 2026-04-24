import { useEffect, useState } from 'react';

/** After mount, the client can render localStorage-backed data without React hydration errors. */
export function useIsHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}
