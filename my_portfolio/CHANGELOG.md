# Changelog

## Portfolio improvement pass - October 2026

### Completed

- Replaced the previous purple-heavy styling with a deep-blue, teal, and restrained amber design-token system for light and dark themes.
- Standardized typography, section spacing, card surfaces, borders, focus rings, and readable text colors.
- Localized hero highlights, key About labels, project actions, case-study labels, and case-study content in English and French.
- Added keyboard-accessible case-study dialogs with Escape dismissal, focus trapping, focus restoration, responsive scrolling, and dialog semantics.
- Reduced motion effects when `prefers-reduced-motion` is enabled and disabled the animated 3D scene on small screens or for reduced-motion users.
- Deferred the Three.js hero scene with `React.lazy`, reducing the initial JavaScript chunk from about 1 MB to about 225 kB in the production build.
- Added localized document titles and descriptions, Open Graph and Twitter metadata, canonical metadata, Person JSON-LD, `robots.txt`, and `sitemap.xml`.

### Known limitations

- Lighthouse and browser-based visual checks were not available in the local environment; responsive behavior was reviewed through code and production-build checks.
- The CV PDFs are present locally but ignored by Git, so they must be added to `public/cv/` before deployment.
- No project screenshots or public demo URLs are currently configured.
- `MLflow` remains listed as a skill and requires the portfolio owner’s confirmation.
- No analytics or tracking was added.
