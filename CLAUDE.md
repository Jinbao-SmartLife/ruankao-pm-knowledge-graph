# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive knowledge graph for the Chinese "软考" (信息系统项目管理师) certification exam. Focuses on the 10 knowledge areas (十大管理) with Input-Tools-Output (ITTO) relationships, exam frequency data, mnemonics, and essay preparation.

Pure static site — no build tools, no package manager, no server required. Open `index.html` directly in a browser.

## Architecture

Two shared-CSS pages and two self-contained pages:

**`index.html`** — Main page with 3 views (matrix/performance domains/essays) + right-side detail panel (desktop) / bottom sheet panel (mobile). Uses `css/main.css`, `css/matrix.css`, `css/panel.css`. Module init chain: `DataStore.init()` → `Matrix.init()` → `Panel.init()` → `Search.init()` → view tab setup.

**`itto.html`** — ITTO overview with 4-quadrant layout (compact matrix, process ITTO details, documents catalog, tools catalog). Uses `css/main.css`, `css/itto.css`. Standalone logic in `js/itto.js`.

**`performance.html`** — Performance domain memory page with check tables, core points, and comparison panels. Self-contained with inline `<style>` and `<script>`.

**`memory.html`** — Knowledge association memory page with flow chains, tool sharing cards, pattern cards. Self-contained with inline `<style>` and `<script>`.

### JS Module Pattern

All modules use the revealing module pattern with global `var` (ES5, no modules/bundlers):

- `DataStore` (`js/data.js`) — Loads `window.NODES_DATA` and `window.EDGES_DATA`, builds lookup indexes (`nodeById`, `nodesByKnowledgeArea`, `nodesByProcessGroup`, `nodesByType`, `edgesBySource`, `edgesByTarget`, `processByKaPg`)
- `Matrix` (`js/matrix.js`) — Renders the 10×5 matrix grid, performance domain cards, essay timeline
- `Panel` (`js/panel.js`) — Right-side detail panel with 4 tabs (overview/ITTO/exam/mnemonics)
- `Search` (`js/search.js`) — Full-text search with debounce and keyboard navigation
- `App` (`js/app.js`) — Entry point, orchestrates init, handles view switching and `selectNode`

### Data Model

All data lives in `data/*.js` files, each assigning to a `window.*` global variable:

- **Node types**: `knowledge-area` (10), `performance-domain` (8), `process-group` (5), `process` (~49), `document`, `tool`
- **Node fields**: `id`, `label`, `type`, `knowledgeArea`, `processGroup`, `description`, `purpose`, `frequency`, `examFrequency`, `mnemonic`, `notes`
- **Node ID conventions**: `ka-N` (knowledge areas), `pd-N` (performance domains), `pg-N` (process groups), `proc-{prefix}-N` (processes, e.g. `proc-int-1`, `proc-scope-3`), `doc-*` (documents), `tool-*` (tools)
- **Edge types**: `belongs-to`, `consumed-by`, `produces`, `used-in`
- **Edge fields**: `source` (node id), `target` (node id), `type`, `label`

### CSS Organization

Dark theme (GitHub Dark style) using CSS custom properties in `css/main.css`. Component CSS split by feature: `matrix.css`, `panel.css`, `itto.css`.

**Responsive breakpoints** (shared CSS files and inline styles both follow):
- **900px**: Grid columns reduce (4→2→1), table font sizes shrink
- **768px**: Mobile layout — `body { overflow-y: auto; height: auto }` overrides desktop `overflow: hidden; height: 100vh`; layout containers switch to `height: auto`; grids collapse to single column; nav tabs become horizontally scrollable; detail panel becomes fixed bottom sheet
- **480px**: Small screen — further reduced padding, font sizes, and spacing

**Key mobile pattern**: Desktop uses `body { overflow: hidden; height: 100vh }` with internal scrolling in flex/grid children. On mobile (≤768px), body becomes the scroll container (`overflow-y: auto; height: auto`) and all layout containers switch to `height: auto; overflow: visible`. This applies to all 4 pages.

## Development

**Run locally**: Open `index.html` or `itto.html` in a browser. No server needed, but a local HTTP server avoids CORS issues if needed: `python3 -m http.server 8080`

**No tests, no linting, no CI** — this is a standalone educational tool.

**Dependency**: D3.js v7 is vendored at `lib/d3.v7.min.js`. No other external dependencies.

## Data Files

| File | Global Variable | Content |
|------|----------------|---------|
| `data/nodes.js` | `NODES_DATA` | ~420 nodes (all entity types) |
| `data/edges.js` | `EDGES_DATA` | ~300+ relationships |
| `data/exam-frequency.js` | `EXAM_FREQ_DATA` | Per-area/per-domain exam frequency |
| `data/mnemonics.js` | `MNEMONICS_DATA` | 36 memory aids |
| `data/essay-topics.js` | `ESSAY_TOPICS_DATA` | 19 essay questions (2015-2025) |
| `data/glossary.js` | `GLOSSARY_DATA` | 68 PM terms |
| `data/itto-details.js` | `ITTO_DETAILS_DATA` | 49 process essay templates |

## Key Conventions

- Language: Chinese content with English code
- CSS uses BEM-like class naming (e.g., `.nav-tab`, `.view-container`, `.cell-hot`)
- JS uses `var` throughout (ES5 style, no `let`/`const`/arrow functions)
- Data files use `window.VAR_NAME = [...]` pattern for global scope
- Git commit language follows the existing convention (Chinese or English, keep consistent with recent commits)
