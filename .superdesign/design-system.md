# Hermela Yeshanew Cyber-Systems Portfolio

Source draft: `0dc4529d-f178-4881-97c8-79c7c62e2f33`
Project: `db65e274-527d-48b6-9ec8-83bb09b7e389`

## Product context
Single-page portfolio for Hermela Yeshanew, a software engineer and system developer. The page should communicate backend reliability, practical systems thinking, testing, database optimization, and selected projects.

## Visual direction
Cyber-systems / terminal interface with a black canvas, neon cyan and magenta accents, blue secondary highlights, technical metadata, glassy dark cards, clipped card corners, subtle grid, scanline, and controlled glitch motion. The design should feel technical and premium, not game-like or noisy.

## Tokens
- `--dark`: `#050505`
- `--panel`: `rgba(10, 10, 10, 0.8)`
- `--cyan`: `#00f3ff`
- `--magenta`: `#ff00ff`
- `--blue`: `#0066ff`
- `--text`: `#e0e0e0`
- `--muted`: `#6b7280`
- Display font: Syncopate, uppercase, tight tracking
- Body font: Space Grotesk, light-to-regular weights
- Metadata font: monospace / DM Mono
- Border: 1px translucent white/cyan
- Card shape: clipped lower-right corner
- Layout: max-width 1280px, responsive breakpoint around 768px

## Motion
- Global scanline travels from -10% to 110% over 8s.
- Hero title uses restrained cyan/magenta/blue glitch text-shadow over a 3s cycle.
- Ambient blue and magenta blurred fields remain low opacity.
- Cards lift 5px and glow cyan on hover.
- Project icons brighten and scale their color on hover.
- All motion must stop or simplify under `prefers-reduced-motion: reduce`.

## Section system
1. Fixed translucent navigation with `HY // SYS`, Experience, Terminal, Stack, Connect.
2. Full-screen hero with system status badge, Hermela Yeshanew title, engineering description, two CTAs, and code-terminal visual on desktop.
3. Experience timeline with career context and a cyber card containing internship outcomes.
4. Repository section with three project cards and project-specific visual/icon treatments.
5. Tech stack section with language chips and four capability cards.
6. Connection footer with large CTA, email, GitHub, back-to-top, and legacy link.

## Interaction contracts
- Existing anchor navigation maps to `#experience`, `#projects`, `#skills`, and `#contact`.
- Existing project filters remain functional; filtered cards preserve cyber-card treatment.
- Existing project source/play links remain real links.
- Existing chat/contact dialog remains the primary contact interaction; CTA buttons may open it while visible email/GitHub links remain available.
- Mobile navigation remains accessible with a visible toggle.
