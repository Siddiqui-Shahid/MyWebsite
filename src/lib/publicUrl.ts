/** Resolve a path served from `public/` for the current Vite `base` (e.g. GitHub Pages). */
export function publicAssetUrl(path: string): string {
  const clean = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${clean}`
}

/** Full `https?://` URL as-is; otherwise treated as a `public/` file path. */
export function resumeHref(href: string): string {
  if (/^https?:\/\//i.test(href)) return href
  return publicAssetUrl(href)
}
