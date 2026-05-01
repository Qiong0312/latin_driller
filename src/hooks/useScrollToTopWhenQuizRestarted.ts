import { useLayoutEffect, useRef } from 'react';

/**
 * When `scored` transitions from showing results (`true`) back to active quiz (`false`),
 * e.g. tapping “New Quiz”, restore the viewport to the top of the document.
 */
export function useScrollToTopWhenQuizRestarted(scored: boolean) {
  const prevScored = useRef(scored);
  useLayoutEffect(() => {
    if (prevScored.current && !scored) {
      window.scrollTo(0, 0);
    }
    prevScored.current = scored;
  }, [scored]);
}
