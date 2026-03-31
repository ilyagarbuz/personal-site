---
title: "Getting Started with Astro 6.0 Islands Architecture"
description: "How partial hydration keeps shipping fast, and when to reach for an island."
pubDate: 2026-03-15
readingTime: 6
---

Astro treats UI as mostly static HTML and only hydrates the components that truly need client-side behavior. Those interactive pieces are **islands**: self-contained widgets that ship their own JavaScript without dragging the whole page into a heavy SPA runtime.

## Why islands matter

1. Faster first paint — the document is usable before hydration.
2. Predictable bundles — you decide what ships to the client.
3. Framework flexibility — Vue, React, Svelte, and others can coexist per island.

## A minimal example

Here is the kind of boundary you might draw when a checkout counter must run in the browser:

```javascript
// islands/Counter.jsx (conceptual)
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <button type="button" onClick={() => setN((x) => x + 1)}>
      Count {n}
    </button>
  );
}
```

Mark it with a client directive in your Astro page so only this subtree hydrates.

![Editorial preview of an Astro project folder on a desk](/images/astro-cover.jpg)

## Practical tips

- Default to **no** client directive until interaction or browser APIs require it.
- Co-locate state inside the island; pass simple props from Astro.
- Keep islands small so their JS stays easy to audit in production builds.

Ship HTML first, add islands second, and your portfolio stays as fast as the one you are reading now.
