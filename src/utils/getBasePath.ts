/**
 * Prepend the Astro base URL to a given path.
 * Handles the case where BASE_URL has a trailing slash.
 *
 * Examples (with base: '/dev-blog'):
 *   getBasePath('/')        => '/dev-blog/'
 *   getBasePath('/posts')   => '/dev-blog/posts'
 *   getBasePath('/rss.xml') => '/dev-blog/rss.xml'
 */
export function getBasePath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // '/dev-blog'
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}
