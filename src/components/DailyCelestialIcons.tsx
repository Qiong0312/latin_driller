'use client';

const CELESTIAL_SRC = {
  /** File is `star dust.svg` in `public/progress-icons/`. */
  dust: '/progress-icons/star%20dust.svg',
  star: '/progress-icons/star.svg',
  moon: '/progress-icons/moon.svg',
  planet: '/progress-icons/planet.svg',
} as const;

type IconProps = {
  className?: string;
};

function celestialImg(
  src: (typeof CELESTIAL_SRC)[keyof typeof CELESTIAL_SRC],
  { className = 'h-6 w-6' }: IconProps,
) {
  return (
    <img
      src={src}
      alt=""
      className={`inline-block object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

/** Stellar dust (daily test currency toward stars). */
export function StellarDustIcon({ className = 'h-6 w-6' }: IconProps) {
  return celestialImg(CELESTIAL_SRC.dust, { className });
}

export function CelestialStarIcon({ className = 'h-6 w-6' }: IconProps) {
  return celestialImg(CELESTIAL_SRC.star, { className });
}

export function CelestialMoonIcon({ className = 'h-6 w-6' }: IconProps) {
  return celestialImg(CELESTIAL_SRC.moon, { className });
}

export function CelestialPlanetIcon({ className = 'h-6 w-6' }: IconProps) {
  return celestialImg(CELESTIAL_SRC.planet, { className });
}

/** Backward-compatible alias. Prefer `CelestialPlanetIcon`. */
export function CelestialSunIcon({ className = 'h-6 w-6' }: IconProps) {
  return <CelestialPlanetIcon className={className} />;
}
