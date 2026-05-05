---
title: "How I Learned to Stop Worrying and Love SVG: A Hands-On Guide"
ogTitle: "SVG from Scratch Guide"
description: "A practical intro to SVG for designers and developers: viewBox explained without jargon, the only 3 shapes you actually need, path commands demystified, and the stroke-dasharray trick that impresses everyone."
pubDate: 2026-05-05
readingTime: 7
coverImage: "../../assets/images/blog/articles/svg-cheat-sheet/svg-cheat-sheet.webp"
---

# The SVG Cheat Sheet I Wish I Had

Let me tell you a secret: SVG is not a picture. It's a lie that looks like a picture.

Every time you export an icon from Figma, you're getting a frozen moment. But real SVG—the kind you write by hand—is alive. You can poke it with CSS, make it dance with JavaScript, and watch it transform in ways a JPEG never could.

I learned this the hard way. For years, I treated SVG like a smarter PNG. Then one day I opened the code, deleted everything, and started typing `<circle>` from scratch. That's when the lights came on.

## Stop Thinking in Pixels

Here's what messes everyone up: an SVG doesn't have a resolution. It has a **contract with the browser**.

That contract looks like this:

```svg
<svg viewBox="0 0 40 40" width="200" height="200">
```

Translation: "Dear browser, inside this box, everything lives on a 40×40 grid. But please show it at 200×200 pixels. Scale everything. I trust you."

This single line changes everything. You can design an icon on a 20×20 grid, a dashboard on 500×300, or a tiny badge on 16×16. The browser handles the math. You just decide how big each "unit" feels.

## Basic shapes You Need to Memorize

**`<circle>`** – Center point (`cx`, `cy`) and radius (`r`). That's it.

<div class="svg-preview">
    <svg viewBox="0 0 100 100" width="180" height="180" role="img" aria-label="Orange circle preview">
        <circle cx="50" cy="50" r="30" fill="#FF6B35" />
    </svg>
</div>

```svg
<svg viewBox="0 0 100 100" width="180" height="180" role="img" aria-label="Orange circle preview">
    <circle cx="50" cy="50" r="30" fill="#FF6B35" />
</svg>
```

**`<rect>`** – Top-left corner (`x`, `y`) and size (`width`, `height`).

<div class="svg-preview">
  <svg viewBox="0 0 100 100" width="180" height="180" role="img" aria-label="Blue rounded rectangle preview">
    <rect x="20" y="20" width="60" height="60" rx="8" fill="#1A73E8" />
  </svg>
</div>

```svg
<svg viewBox="0 0 100 100" width="180" height="180" role="img" aria-label="Blue rounded rectangle preview">
    <rect x="20" y="20" width="60" height="60" rx="8" fill="#1A73E8" />
</svg>
```

(`rx` gives you rounded corners. `ry` exists. You'll never use it.)

**`<path>`** – The scary one. But here's the trick: a path is just directions. "Move here, draw a line there, stop."

<div class="svg-preview">
  <svg viewBox="0 0 80 70" width="220" height="160" role="img" aria-label="Red path polyline preview">
    <path d="M 10,50 L 40,20 L 70,50" fill="none" stroke="#E63946" stroke-width="4" />
  </svg>
</div>

```svg
<svg viewBox="0 0 80 70" width="220" height="160" role="img" aria-label="Red path polyline preview">
    <path d="M 10,50 L 40,20 L 70,50" fill="none" stroke="#E63946" stroke-width="4" />
</svg>
```

`M` = put the pen down. `L` = drag to this spot. `Z` = come back home.

That's three shapes. You can build almost anything with just these.

## The CSS Trick Nobody Explains

Here's something the tutorials skip: CSS overrides SVG attributes.

You can do this:

<div class="svg-preview">
  <svg class="preview-css-override" viewBox="0 0 100 100" width="180" height="180" role="img" aria-label="Circle color overridden by CSS">
    <style>
      .preview-css-override circle { fill: #2563eb; }
    </style>
    <circle cx="50" cy="50" r="30" fill="red" />
  </svg>
</div>

```svg
<circle fill="red" />
```

But if your stylesheet says `.icon circle { fill: blue; }` — blue wins. Every time.

Why does this matter? Because now you can export messy SVGs from design tools, strip out all the inline colors, and control everything from one CSS file.

<div class="svg-preview">
  <svg class="icon" viewBox="0 0 120 70" width="260" height="150" role="img" aria-label="CSS-controlled SVG shape preview">
    <style>
      .icon .main-shape { fill: #4361ee; }
      .icon:hover .main-shape { fill: #60a5fa; transform: scale(1.05); transform-origin: center; }
    </style>
    <rect class="main-shape" x="25" y="15" width="70" height="40" rx="8" />
  </svg>
</div>

```css
/* One file to rule them all */
.icon {
  transition: all 0.2s ease;
}

.icon .main-shape {
  fill: var(--brand-primary);
}

.icon:hover .main-shape {
  fill: var(--brand-bright);
  transform: scale(1.05);
}
```

Same SVG. Infinite variations. No repeated code.

## The Animation That Impresses Everyone

There's one SVG trick that looks like magic but is embarrassingly simple: the "drawing" effect.

Imagine a line hiding just off-screen. Now it slides into view. That's literally what's happening.

Here's the recipe:

1. Make a dashed line where the dash is exactly as long as the line itself
2. Push that dash completely off the start
3. Slide it back

<div class="svg-preview">
  <svg viewBox="0 0 200 40" width="400" height="80" role="img" aria-label="Animated draw-on line preview">
    <path class="draw-on-preview" d="M 10,20 L 190,20" stroke="#00C49A" stroke-width="4" stroke-linecap="round"/>
    <style>
      .draw-on-preview {
        stroke-dasharray: 180;
        stroke-dashoffset: 180;
        animation: reveal-preview 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      }
      @keyframes reveal-preview {
        from { stroke-dashoffset: 180; }
        to { stroke-dashoffset: 0; }
      }
    </style>
  </svg>
</div>

```svg
<svg viewBox="0 0 200 40" width="400" height="80">
  <path class="draw-on" d="M 10,20 L 190,20" stroke="#00C49A" stroke-width="4" stroke-linecap="round"/>
</svg>

<style>
.draw-on {
  stroke-dasharray: 180;  /* length of the line */
  stroke-dashoffset: 180; /* hidden at the start */
  animation: reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes reveal {
  to { stroke-dashoffset: 0; }
}
</style>
```

## Stop Repeating Yourself

If you draw the same shape twice in an SVG, you're doing it wrong.

**`<defs>`** is your warehouse. Stack it with things you'll need later:

<div class="svg-preview">
  <svg viewBox="0 0 200 100" width="500" height="250" role="img" aria-label="Defs, gradient, filter, and use preview">
    <defs>
      <linearGradient id="brandGradientPreview" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4361EE"/>
        <stop offset="100%" stop-color="#7209B7"/>
      </linearGradient>
      <filter id="softShadowPreview">
        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
      <circle id="dotPreview" r="4" />
    </defs>
    <rect x="70" y="30" width="60" height="40" rx="6" fill="url(#brandGradientPreview)" filter="url(#softShadowPreview)"/>
    <use href="#dotPreview" x="80" y="50" fill="white"/>
    <use href="#dotPreview" x="100" y="50" fill="white"/>
    <use href="#dotPreview" x="120" y="50" fill="white"/>
  </svg>
</div>

```svg
<svg viewBox="0 0 200 100" width="500" height="250">
  <defs>
    <!-- A gradient you'll reuse -->
    <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4361EE"/>
      <stop offset="100%" stop-color="#7209B7"/>
    </linearGradient>

    <!-- A shadow effect -->
    <filter id="softShadow">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>

    <!-- A shape you'll stamp everywhere -->
    <circle id="dot" r="4" />
  </defs>

  <!-- Now use them -->
  <rect x="20" y="30" width="60" height="40" rx="6" fill="url(#brandGradient)" filter="url(#softShadow)"/>
  <use href="#dot" x="50" y="50" fill="white"/>
  <use href="#dot" x="70" y="50" fill="white"/>
  <use href="#dot" x="90" y="50" fill="white"/>
</svg>
```

`url(#something)` is how you reach into the warehouse. `href` is how you stamp a shape somewhere else.

## Your SVG Workflow From Now On

Stop exporting and praying. Here's what works:

1. **Sketch in the browser** — Start with a `<svg>` tag and a `viewBox`. Add one shape. Refresh. Add another.
2. **Use the inspector** — Right-click any SVG on the web, click "Inspect", and edit the code live. Best classroom there is.
3. **CSS variables are your friend** — `fill="var(--color)"` lets one SVG fit anywhere.
4. **When stuck, simplify** — Every curve can become two straight lines. Every complex icon can become three circles.

The best SVG is the one you understand line by line. Not the one you copied and prayed.

Now go open a blank HTML file and type `<svg>`. See what happens. Break things. It's just code — nothing will explode.
