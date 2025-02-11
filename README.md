# Mobile App UI Kit

12 components across 3 tiers (atoms → molecules → organisms) with light/dark mode via CSS Variables. HTML/CSS showcase deployed to GitHub Pages.

## Live Demo
**[yadavar333.github.io/mobile-ui-kit](https://yadavar333.github.io/mobile-ui-kit)**

## Stack
Figma · Figma Variables · CSS Custom Properties · HTML · GitHub Pages

## Component Inventory

### Tier 1 — Atoms
| # | Component | Variants |
|---|-----------|----------|
| 1 | **Button** | Filled · Outlined · Text · Elevated · Danger — sm / md / lg — default / hover / active / disabled |
| 2 | **Text Input** | Default · Focused · Error · Disabled — with label + helper text |
| 3 | **Avatar** | xs / sm / md / lg / xl sizes · 6 colour variants · image · online status dot |
| 4 | **Badge & Chip** | Tinted · Filled — Primary / Success / Warning / Error / Neutral · Filter chips |

### Tier 2 — Molecules
| # | Component | Variants |
|---|-----------|----------|
| 5 | **Card** | Elevated · Outlined · Filled (horizontal) — with media, title, subtitle, body, footer actions |
| 6 | **List Item** | Trailing: none · chevron · badge · toggle switch |
| 7 | **Form Group** | Label (required / optional) · Input · Helper text · Error state |
| 8 | **Toggle Switch** | On · Off · Disabled |

### Tier 3 — Organisms
| # | Component | Variants |
|---|-----------|----------|
| 9  | **App Bar** | Standard · Large title (with avatar + actions) |
| 10 | **Bottom Nav Bar** | 4 tabs — active indicator strip · notification badge |
| 11 | **Modal / Dialog** | Title · body · dual action buttons · backdrop overlay |
| 12 | **Bottom Sheet** | Drag handle · title · icon action list |

## Design System

### Tokens (from `figma/design-tokens.json`)
- **Colours** — primary, secondary, semantic (success/warning/error), adaptive surface/text/border
- **Spacing** — xs(4) · sm(8) · md(16) · lg(24) · xl(32) · 2xl(48)
- **Typography** — display / headline / title / body / body-sm / label / caption
- **Radius** — sm(4) · md(8) · lg(12) · xl(16) · full(9999)
- **Shadows** — sm / md / lg

### Light / Dark Mode
Switching is achieved entirely with CSS custom properties — no class duplication.
The `[data-theme="dark"]` selector overrides the `:root` token values.
JS reads `localStorage` + `prefers-color-scheme` and sets the attribute.

## File Structure

```
mobile-ui-kit/
├── docs/                    ← GitHub Pages source
│   ├── index.html           # full component showcase
│   ├── css/
│   │   ├── variables.css    # all design tokens (light + dark)
│   │   ├── layout.css       # page layout, section styles
│   │   ├── atoms.css        # button, input, avatar, badge, chip
│   │   ├── molecules.css    # card, list item, toggle, form group
│   │   └── organisms.css    # app bar, bottom nav, modal, bottom sheet
│   └── js/
│       └── theme.js         # light/dark toggle + localStorage
├── figma/
│   └── design-tokens.json   # token definitions (importable to Figma)
└── README.md
```

## GitHub Pages Setup
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `docs`
4. Save — live in ~60 seconds
