# Cyber-Systems Portfolio Implementation Plan

Status: Design fetched and mapped. Awaiting implementation approval.

## Ground truth
- Superdesign project: `db65e274-527d-48b6-9ec8-83bb09b7e389`
- Draft: `0dc4529d-f178-4881-97c8-79c7c62e2f33` (`v1`)
- Fetched reference: `.superdesign/fetched-draft.html`
- Existing app entry: `index.html` -> `script.jsx` -> `style.css`
- Existing app is a single-page React/Vite portfolio with no router.

## Goal
Recompose the current portfolio into the fetched HY_SYS cyber-systems interface while preserving the current project data, filter behavior, anchor navigation, GitHub/play links, and mailto contact dialog.

## Implementation phases

### 1. Foundation and shell
- Replace the current visual tokens in `style.css` with the fetched black, cyan, magenta, and blue palette.
- Load Space Grotesk, Syncopate, and DM Mono in `index.html`.
- Add a fixed translucent navigation shell with `HY // SYS` branding.
- Keep the existing menu state on mobile; remap labels to Experience, Terminal, Stack, and Connect.
- Add global cyber grid, scanline, and low-opacity ambient glow layers.

### 2. Hero / system status
- Rebuild the hero as a full viewport section with `System Online v2.0.25` badge.
- Use uppercase cyber display typography for `HERMELA YESHANEW` and restrained cyan/magenta glitch text-shadow.
- Add the fetched description emphasizing robust backends and dynamic systems.
- Keep the existing work/contact actions, relabeling them to `Initialize View` and `History.log`.
- Add a desktop-only code terminal panel populated with Hermela’s real role and skills.
- Hide or stack the terminal panel cleanly on mobile.

### 3. Experience timeline
- Change the current experience section into the fetched 12-column timeline composition.
- Keep the real internship employer, dates, and location.
- Present the existing internship summary as three concise outcome bullets: query optimization, automated testing, and collaboration.
- Add clipped cyber-card styling, cyan/magenta metadata, and chevron indicators.

### 4. Repository projects
- Rename the work anchor to `#projects` while preserving compatibility with the current `#work` anchor during transition.
- Present projects as cyber cards with terminal metadata and 16:9 visual headers.
- Use distinct visual identifiers for help desk, asset tracker, and platform game.
- Preserve the current filter list and behavior; style active filters as terminal controls.
- Keep exact source and play URLs from the existing `projects` array.
- Add hover glow, icon/color transition, and clipped lower-right card corner.

### 5. Technical stack
- Rename the toolkit anchor to `#skills` while retaining existing content.
- Split skills into language/logic chips, frontend/UI chips, and four capability cards.
- Use technical labels: SQL Systems, Version Ctrl, TDD & QA, and Logic Build.
- Keep the existing technologies truthful; do not add Tailwind as a skill unless confirmed by the project.

### 6. Contact and footer
- Convert the current contact CTA into the fetched `ESTABLISH CONNECTION?` treatment.
- Keep the chat modal as the functional contact experience behind the primary CTA.
- Keep direct email and GitHub links visible and valid.
- Add the fetched footer metadata and back-to-top behavior without linking to a stale legacy URL unless confirmed.

### 7. Responsive and accessibility pass
- At mobile widths, stack hero content, hide the terminal panel, keep status badge and CTAs readable, and make project cards one column.
- Ensure fixed navigation does not cover anchored headings by applying scroll margins.
- Preserve keyboard focus styles for navigation, filters, project links, menu, and dialog.
- Add reduced-motion overrides for scanline, glitch, ambient glows, and card transitions.
- Check for horizontal overflow at 390px and 768px.

## Files to modify
- `index.html`: font imports and document metadata.
- `script.jsx`: section structure, labels, terminal visual, project presentation, anchor IDs; preserve state and handlers.
- `style.css`: complete visual system, responsive layout, cyber effects, modal styling.

## Files to add/retain
- `.superdesign/design-system.md`: fetched design tokens and interaction contracts.
- `.superdesign/implementation-plan.md`: this plan.
- `.superdesign/fetched-draft.html`: fetched Superdesign reference for comparison.

## Validation checklist
- `npm run build` passes.
- Hero, experience, repository, skills, and contact sections render.
- Filter controls still change visible projects.
- Chat dialog opens, quick replies work, and valid form submission creates the mailto draft.
- GitHub/source/play links remain correct.
- Desktop and 390px mobile screenshots show no blank areas or horizontal overflow.
- Reduced-motion mode removes continuous decorative animation.

## Approval gate
Do not generate or apply a new Superdesign variation until the fetched draft and this implementation plan are approved. After approval, implement the plan in the existing Vite app and validate the result in the browser.
