# Micro-interaction suggestions

## Context
The site has strong motion on Home (InsightHero, EntryIntro) and Work (parallax, draggable cards). Case studies, Navbar, Footer, About and ResearchWall are mostly static. There is no `whileHover`/`whileTap`, no `useScroll`, and CSS hovers lack `motion-reduce:` variants. `MotionConfig reducedMotion="user"` already covers `motion/react` transforms.

## Suggested micro-interactions (pick any)
1. **Navbar sliding underline**: a shared `layoutId` indicator glides between links. Add a hairline shadow and slight shrink after scroll. Fix the brand dot, which has no `group-hover`.
2. **Reading-progress bar**: a thin emerald `useScroll` + `scaleX` line at the top of case study pages.
3. **Case-study kit hover polish** (`components/case-study/kit.tsx`, reaches 4 pages at once):
   - `Rows`/`InsightRows`: row highlight and a green left rule on hover.
   - `Stats`: count-up when scrolled into view.
   - `Gallery`: gentle image zoom on hover.
   - `Hero`: short entrance.
4. **Button/link feedback**: `whileTap` scale 0.97 on CTAs and chips. Arrow nudge on links in About and Footer (email, LinkedIn, "View case study" on Work).
5. **Home stagger**: stagger sibling cards on reveal. Add a magnetic cursor-pull on the primary CTA.
6. **ResearchWall cards**: lift and slight tilt on hover, and the same on keyboard focus.
7. **EntryIntro skip**: a "Skip" control, plus Esc/click to skip.
8. **Page transitions**: a short fade between routes.

## Housekeeping
- Export one shared ease (`[0.22,1,0.36,1]`) instead of the three copies in `Work.tsx`, `kit.tsx` and `USPCaseStudy.tsx`.
- Add `motion-reduce:` variants to CSS-only transitions.
- Match `focus-visible` states to hover states.

## Recommended first batch
1, 2, 3, 4, 7: highest impact, lowest risk.

## Verification
Run the dev server, check hover, tap and focus on each page, and check with reduced-motion enabled. Then run `mise exec -- npm run build`.
