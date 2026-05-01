/**
 * Target URL for quiz footers (“← Back to lesson”) from the current quiz route.
 * Lesson/sub-lesson quizzes live at `.../<segment>/test` → strip trailing `/test`.
 */
export function backHrefFromQuizPathname(pathname: string): string {
  const path = pathname.split('?')[0] ?? pathname;
  if (path === '/dashboard/daily/test') {
    return '/dashboard';
  }
  const stripped = path.replace(/\/test\/?$/u, '').replace(/\/$/u, '');
  return stripped.length > 0 ? stripped : '/';
}
