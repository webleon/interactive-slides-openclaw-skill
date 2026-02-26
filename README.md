# interactive-slides

A Claude Code skill for creating interactive, animated web presentations — with 10 curated style presets, visual style discovery, and a structured 5-phase workflow.

## What it does

Turns your content into a beautiful, self-contained HTML file that opens in any browser. Not a PowerPoint — something alive: animated, polished, and web-native.

**You get:**
- A structured discovery workflow (audience → style → outline → build)
- 10 hand-crafted visual presets to choose from
- Three presentation modes: Slide Deck, Scroll Story, or Interactive Deck
- Full navigation support: keyboard, click, touch, swipe, scroll wheel
- GSAP animations, Google Fonts, Chart.js — all via CDN, no setup needed

## Installation

### Requirements
- [Claude Code](https://claude.ai/code) CLI installed

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/sylvial928/interactive-slides.git
   ```

2. Copy the skill files into your Claude Code skills directory:
   ```bash
   cp -r interactive-slides/ ~/.claude/skills/interactive-slides/
   ```

3. That's it. Restart Claude Code (or start a new session) and the skill will be available.

### Verify it's installed

In Claude Code, type:
```
/interactive-slides
```
Or just ask: *"Create an interactive presentation about X"* — Claude will automatically pick up the skill.

## Usage

Just describe what you want:

> "Create an interactive presentation for our Q1 investor update"

> "Turn this PDF into an interactive web deck"

> "Make a scroll-based story about our product roadmap"

Claude will walk you through discovery (audience, goal, delivery mode), show you style options, confirm the slide structure, then build.

## File structure

```
SKILL.md            # Main skill prompt and workflow
STYLE_PRESETS.md    # 10 visual presets with CSS variables and font pairings
evals/              # Evaluation cases for testing skill quality
```

## License

MIT — see [LICENSE](LICENSE)
