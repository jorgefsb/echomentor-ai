# BRIEF · EchoMentor AI landing

Built with **scroll-craft** (nateherkai/scroll-craft @0b81622, MIT). Engine copied unmodified.

## Interview (answered by Jorge, 2026-09-26)

| Question | Answer |
|---|---|
| Product | EchoMentor AI by UETC · Arden A.C. Adaptive AI learning platform (beta, live) |
| Audience | Club UETC members (gamedev learners in MX/LATAM) and newcomers who should join the Club |
| Grammar | **Live surface** ("Superficie viva") |
| Style | Premium dark and refined ("Premium oscuro y fino") |
| Domain | echomentor.jorgesuarez.com.mx |
| How newcomers get access | Join the Club UETC (club.uetc.mx, free). Zero backend in the landing |
| Must have | Clear features, members login area, connector into the platform, public repo |

Brand rules applied: UETC green #92bf1f as the one accent, no invented or unverifiable numbers,
no em dashes, no access code anywhere, no mention of the base the platform is built on.

## References used (gbrain)

- `knowledge/biblioteca-buen-gusto-diseno`: Linear (dark app chrome, hairlines, restraint), Vercel (type and spacing), Stripe (operable demos over screenshots). Anti-example: modulify.ai.
- `registry/biblioteca-cosas-chidas`: wedoflow.com (rhythm), motionin.design (motion restraint). Rule: copy rhythm, type and space, never content.
- `reference/skill-hallmark-diseno`: anti-slop gates (no purple, no glow, no gradient text, no card grids, no fake stats).

## Grammar: Live surface

The page is the product running on labelled sample data. App chrome is the navigation,
the hero is a class already in progress, every panel computes its state from arrays in the page,
and the close is a real input: the members code field that logs you into the platform.

## Feeling curve

```
1  Curiosity     a class is already running when you land: slide, teacher speaking, classmates typing
2  Momentum      one sentence becomes a whole syllabus, line by line, in a log you can read
3  Wonder (PEAK) you write who you are and the whole course rewrites itself at once
4  Company       the AI teacher and classmates talk with you while the whiteboard draws
5  Play          activities you can operate: a quiz that grades, a simulation that answers, 12 languages
6  Clarity       the help panel: everything it does, one line each
7  Decision      a field with a cursor in it: your Club code, and you are inside
```

## Peak

> "le cambié el perfil y la clase entera se reescribió enfrente de mí: temario, ejemplos, dificultad y ritmo"

Gets the largest span on the page (3.2), a quiet empty-profile beat before the first rewrite,
and the most work: every region of the surface changes on the same frame.

## Signature move

**El perfil que reescribe la clase.** A learner profile (scroll-driven presets, or the visitor's own text)
regrades outline, worked example, quiz level and pace across the whole surface simultaneously.

## Tell-someone test

"Es la página donde escribes quién eres y el curso entero se reescribe para ti."

## Honesty

Every panel says "Demostración con datos de ejemplo". The demo uses three prepared adaptations;
the real platform rewrites everything with AI from the learner profile (up to 4000 characters).
Feature claims were checked against the running platform on 2026-09-26.

## Connector

`<form method="post" action="https://uetc.jorgesuarez.com.mx/api/access-code/enter">` (platform v1.4.0).
Validates the code server-side, sets the signed session cookie, 303 into the app.
Failure returns to `/?acceso=invalido#entrar`. Code never travels in a URL; works without JavaScript.

## v1.1 (2026-09-26): trilingual + fuller surface

- ES · EN · RO with live switching (no reload, no layout jump), browser detection, `?lang=` links, hreflang.
- Hero now runs on its own: a live simulation (player enters the area, the Blueprint lights up node by node, the lamp turns on), the teacher caption types, the class chat fills in.
- Windows capped at 860px and centered, so tall screens no longer show empty panels. Syllabus pane shows skeleton rows before generating. Whiteboard has a dot grid.
- Romanian is a landing language; the platform interface itself has 12 languages and Romanian is not one of them yet (the page says so by listing the 12).
