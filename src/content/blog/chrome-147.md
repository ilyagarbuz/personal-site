---
title: "Chrome 147: Widget Morphing, Smart Contrast, and Rust Under the Hood"
ogTitle: "Chrome 147: View Transitions for Elements, contrast-color(), and Event.pseudoTarget"
description: "Chrome 147 brings scoped View Transitions for individual elements, the native CSS contrast-color() function for automatic accessibility, and the long-awaited Event.pseudoTarget property for detecting clicks on pseudo-elements. Plus: border-shape, honest border-width computed values, and a Rust-based XML parser under the hood."
pubDate: 2026-04-08
readingTime: 4
coverImage: "../../assets/images/blog/articles/chrome-147/chrome-147.jpg"
---

Chrome 147 (April 2026) has landed. While there are some niche WebXR and IWA updates, this release packs several CSS gems and a long-awaited DOM fix that will make both designers and JS developers breathe a sigh of relief. Let's dive into what you should update in your mental toolkit right now.

#### 🎨 1. CSS `contrast-color()`: Automatic Black or White

For years, meeting WCAG contrast requirements meant writing custom SCSS functions or relying on the somewhat unstable `color-contrast()`. Now it's native and dead simple:

```css
.my-dynamic-badge {
  background: var(--user-avatar-color);
  color: contrast-color(var(--user-avatar-color));
}
```

The browser calculates the background luminance and outputs either `#000` or `#fff`. **Interesting tidbit:** It strictly returns black or white by design—this ensures maximum readability compliance, leaving aesthetic color choices to the designer.

#### 🧩 2. `element.startViewTransition()`: Morphing Without Page Reloads

Previously, the View Transitions API required DOM manipulation on the `document` level. Chrome 147 unlocks transitions scoped to individual elements.
**Where to use this?**

- Smooth dashboard widget reordering (animated drag-and-drop).
- Sorting product lists without jarring jumps.
- Tab switching that preserves scroll context.

This isn't just eye candy; it's a significant UX upgrade that reduces cognitive load when UI states change.

#### 👻 3. `Event.pseudoTarget`: Catching Clicks on Pseudo-Elements

The eternal struggle: You have a custom checkbox with an icon in `::after`. The user clicks the icon, but `event.target` stubbornly points to the parent `div`. Distinguishing a "tail" click from a container click previously required messy `getBoundingClientRect` hacks.
Now we have the `.pseudoTarget` property:

```javascript
element.addEventListener("click", (e) => {
  if (e.pseudoTarget?.type === "::after") {
    // Handle the specific click on the icon
  }
});
```

Supported in `UIEvent`, `AnimationEvent`, and `TransitionEvent`.

#### ⚙️ 4. A Few More Useful Bits

- **`border-shape`**: Create star-shaped or wavy borders that clip the background **inside** but **not** the `box-shadow`. It's not a replacement for `clip-path` but a logical companion.
- **`*-width` and `*-style` Separation**: No more `border-width: 10px` magically computing to `0` just because `border-style: none`. The computed value will now be honest (matching Firefox and Safari). Predictable layout is good layout.
- **Rust in the XML Parser**: Under the hood, Chrome is replacing the legacy C++ `libxml2` parser with a memory-safe Rust implementation (for non-XSLT scenarios). XSS attacks via XML bombs just got a lot harder to pull off.

#### 🤔 What's in Origin Trial?

Keep an eye on **Autofill Events**. Soon we'll be able to reliably catch when the browser autofills a form, allowing us to validate fields instantly instead of guessing or waiting for user input.

---

_For the complete list of changes, including WebXR Plane Detection, IWA Web Printing API, and LNA restrictions, check out the **official Chrome 147 release notes** on Chrome for Developers:_<a href="https://developer.chrome.com/release-notes/147" target="_blank" rel="noopener noreferrer">
<i>Chrome 147 release notes</i>
</a>
