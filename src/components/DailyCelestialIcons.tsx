'use client';

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

/** Placeholder: replace with assets in `public/` when ready. */
export function StellarDustIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <circle cx="8" cy="20" r="2.2" className="fill-violet-400" />
      <circle cx="14" cy="14" r="1.5" className="fill-fuchsia-400" />
      <circle cx="22" cy="18" r="1.8" className="fill-amber-300" />
      <circle cx="18" cy="24" r="1.2" className="fill-sky-400" />
      <path
        d="M16 4l1.2 3.2h3.3L18 8.6l1.1 3.2L16 9.6l-3.1 2.2 1.1-3.2L10 7.2h3.3L16 4z"
        className="fill-violet-300/90"
      />
    </svg>
  );
}

export function CelestialStarIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M16 2l2.2 6.2h6.4l-5.2 3.8L21.2 19 16 15.4 10.8 19l1.6-6.3-5.2-3.5h6.4L16 2z"
        className="fill-amber-300 stroke-amber-500/50"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function CelestialMoonIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M18 4c-6 0-11 5-11 12s5 12 12 12c1.2 0 2.4-.2 3.4-.4-2.2 1.2-4.6 1.8-7.2 1.8C8.5 29 3 23.2 3 16S8.5 3 16 3c.7 0 1.3.1 2 .2z"
        className="fill-slate-300 stroke-slate-400/60"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function CelestialSunIcon({ className = 'h-6 w-6', ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <circle cx="16" cy="16" r="5" className="fill-amber-400" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="16"
          y1="4"
          x2="16"
          y2="7.5"
          className="stroke-amber-500"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  );
}
