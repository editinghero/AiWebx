## 2025-01-20 - [XSS via next/link]
**Vulnerability:** XSS vulnerability found in Next.js `<Link>` components if `href` is dynamically populated without sanitization. `javascript:` URLs can bypass normal protections and execute arbitrary code.
**Learning:** Next.js `<Link>` component does not automatically block `javascript:` protocol. When using dynamic external URLs that come from data files, databases, or user input, we must explicitly sanitize and restrict them to `http:` or `https:`.
**Prevention:** Always validate and sanitize external URLs before passing them to `<Link>`'s `href` or `<a>` tag's `href`, restricting allowed protocols explicitly (e.g., `['http:', 'https:'].includes(new URL(url).protocol)`).
