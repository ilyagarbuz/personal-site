---
title: "Firefox 150: Smarter Images, Richer CSS, and a Voice for Screen Readers"
ogTitle: "Firefox 150 Release: sizes='auto', color-mix() Multi-Color, ariaNotify(), and More"
description: "Explore what's new in Firefox 150 for web developers: HTML sizes='auto' for lazy-loaded responsive images, CSS color-mix() with unlimited colors, light-dark() with images, media playback pseudo-classes, animation-range for scroll-driven animations, revert-rule keyword, and the developer-friendly ariaNotify() API for accessibility."
pubDate: 2026-04-21
readingTime: 4
coverImage: "../../assets/images/blog/articles/firefox-150/firefox-150.jpg"
---

**Release Date:** April 21, 2026<br />
**Source:** [MDN Web Docs — Firefox 150 for Developers](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/150)

Hey fellow devs! Firefox 150 is out. While not a groundbreaking release, it's packed with interesting and practical features that'll make our daily work a bit smoother.

Let's dive into the juiciest new additions you should definitely check out.

## 🚀 What's New for Developers?

### 1. HTML: `sizes="auto"` for Lazy-Loaded Images

A long-awaited improvement for `<img>` elements with `loading="lazy"`. You can now specify `sizes="auto"`, and the browser will automatically calculate the image's layout size (after CSS is applied) to pick the right candidate from `srcset`.
This eliminates duplicating media conditions in the `sizes` attribute that are already defined in your CSS. Simpler code, fewer errors.

```html
<img
  srcset="small.jpg 300w, large.jpg 1000w"
  sizes="auto"
  loading="lazy"
  alt="Responsive lazy image"
/>
```

### 2. CSS: Mix More Than Two Colors

The `color-mix()` function now accepts **multiple** color values instead of just two.

```css
/* Mix three colors together */
.element {
  background-color: color-mix(in srgb, red 30%, blue 30%, green 40%);
}
```

This makes it possible to create complex palettes on the fly without preprocessors.

### 3. CSS: `light-dark()` Now Works with Images

The `light-dark()` function previously only accepted colors. In Firefox 150, it now accepts `<color>`+ value types, enabling images, gradients, and other value types depending on the color scheme.

```css
.dark-aware-bg {
  background-image: light-dark(url(light-pattern.png), url(dark-pattern.png));
}

.adaptive-border {
  border-image: light-dark(url(border-light.svg), url(border-dark.svg));
}
```

### 4. CSS: Style Audio & Video Based on Playback State

Support has arrived for media-related pseudo-classes on `<audio>` and `<video>` elements: `:buffering`, `:muted`, `:paused`, `:playing`, `:seeking`, `:stalled`, and `:volume-locked`.

Now you can easily show a loading indicator while video buffers or change control opacity on pause — all in pure CSS.

```css
video:playing {
  opacity: 1;
  filter: none;
}

video:paused {
  opacity: 0.7;
  filter: grayscale(0.5);
}

video:buffering {
  cursor: wait;
}
```

### 5. CSS: Scroll-Driven Animations Get Closer

Firefox 150 adds support for `animation-range-start`, `animation-range-end`, and the `animation-range` shorthand property. This is a significant step forward for **scroll-driven animations**, letting you precisely control which scroll segment triggers your animation.

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fade-in linear both;
  animation-timeline: scroll();
  animation-range-start: 0px;
  animation-range-end: 200px;
}
```

### 6. CSS: The `revert-rule` Keyword

A new global CSS keyword — `revert-rule`. It rolls back a property's value as if **the current CSS rule didn't exist**. The value from another matching rule (like a more specific selector or user-agent style) takes effect instead.

```css
/* Without revert-rule, both rules apply */
.special {
  color: revert-rule; /* Ignores this rule, uses any other matching rule */
  background: black;
}
```

### 7. JavaScript API: Screen Readers Say "Thank You"

The `ariaNotify()` method is now available on `Document` and `Element`. It queues a string of text to be announced by a screen reader — a more ergonomic and reliable alternative to ARIA live regions.

```javascript
// Announce a status update to assistive technology
document.ariaNotify("Your message has been sent successfully");

// Announce errors
element.ariaNotify("Please fix the highlighted fields");
```

### 8. DOM: Caret Navigation Inside Shadow DOM

The `Document.caretPositionFromPoint()` method now accepts the `options.shadowRoots` argument. Pass an array of shadow roots, and the method will return the caret (text cursor) position inside shadow DOM if the click point lands there.

```javascript
const shadowRoots = [myElement.shadowRoot];
const caretPosition = document.caretPositionFromPoint(10, 20, { shadowRoots });
```

## ⚙️ For Extension Developers

- **WebAuthn in Extensions:** Extensions can now use the Web Authentication API with an RP ID for any domain covered by host permissions. This enables creating and retrieving WebAuthn credentials on behalf of web services.
- **Improved `tabs.move` behavior** for split views.
- **Fixed CSS import issues** in JavaScript modules.

**Happy coding! 🚀**
