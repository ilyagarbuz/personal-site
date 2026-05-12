---
title: "Chrome 148: Container Queries Without Types, AI in the Browser, and SharedWorker's Comeback"
ogTitle: "Chrome 148: Name-Only Container Queries, Prompt API for On-Device AI, and Manifest Localization"
description: "Chrome 148 ships bare-name container queries, the new revert-rule keyword for CSS conditionals, on-device AI with the Prompt API, SharedWorker's return to Android, PWA manifest localization, and a smarter Web Authentication Immediate UI mode. Plus: loading=lazy for video and audio, text-decoration-skip-ink: all, and drag-and-drop spec fixes."
pubDate: 2026-05-06
readingTime: 5
coverImage: "../../assets/images/blog/articles/chrome-148/chrome-148.jpg"
---

**Title: Chrome 148: Container Queries Without Types, AI in the Browser, and SharedWorker's Comeback**

Chrome 148 (May 2026) is here, and this release is packed. We're getting CSS quality-of-life improvements that remove old annoying constraints, a brand-new Prompt API that brings on-device AI directly to web apps, and the return of SharedWorker on Android. Let's break down what matters most.

#### 🎨 CSS Wins: Bare-Name Containers, `revert-rule`, and Smarter Underlines

The big theme here is removing friction. Three updates stand out:

**Name-only container queries** let you query a container by its `container-name` alone, without setting any `container-type`. This means you can finally use container queries purely for organizational purposes without affecting layout modes:

```css
#sidebar {
  container-name: --sidebar;
}
@container --sidebar {
  .widget {
    background: green;
  }
}
```

**`revert-rule`** is a new keyword that rolls back the cascade to the previous rule (not the previous layer, like `revert-layer`). It's perfect for conditionals. If a custom property isn't set, you can wipe the current rule entirely:

```css
.card {
  display: if(style(--layout: fancy): grid; else: revert-rule);
}
```

**`text-decoration-skip-ink: all`** now forces ink-skipping on _all_ glyphs, including CJK characters. Previously, `auto` left CJK out because underlines through ideographs look terrible. If you've manually adjusted `text-underline-position` for CJK text, you can now opt into `all` and let the browser handle it elegantly.

#### 🤖 Prompt API: On-Device AI Enters the Browser

This is the headline feature. The Prompt API gives direct access to the browser's built-in on-device language model — no cloud calls, no API keys, no latency. Initial support covers text, image, and audio inputs.

What can you do? Image captioning, visual search, audio transcription, sound event classification, structured data extraction from multimodal inputs... all running locally. You can even constrain outputs with regex or JSON Schema to get predictable, structured results.

A sampling parameters Origin Trial (temperature + topK) ships alongside it, giving you creative control over model output.

#### 📱 SharedWorker Returns to Android

SharedWorker was disabled on Android for years due to unpredictable process lifecycle concerns. After community discussion and re-evaluation, it's back. Alongside this, a new `extendedLifetime: true` constructor option lets SharedWorkers stay alive even after all clients unload — enabling post-unload async tasks without relying on Service Workers.

#### 🌐 PWAs Go Global: Manifest Localization

This is a big quality-of-life upgrade for Progressive Web Apps. Previously, showing a localized app name or description at install time required hacks or server-side manifest generation based on `Accept-Language` headers. Now it's native.

The Web App Manifest supports a `"translations"` field, where you define per-locale overrides for `name`, `description`, `icons`, and `shortcuts`. The browser automatically picks the right resources based on the user's system language. If your PWA serves an international audience, this is instantly useful:

```json
{
  "name": "My Cool App",
  "translations": {
    "ru": {
      "name": "Моё крутое приложение",
      "description": "Лучшее описание на русском"
    }
  }
}
```

#### ⚡️ Smarter Login UX: Web Authentication Immediate UI Mode

This one directly impacts conversion. `Immediate UI mode` for `navigator.credentials.get()` solves the classic login dilemma: "do I show a biometric prompt if I'm not sure the user has a passkey?"

Previously, sites had to either make a "silent" request that could fail unpredictably, or call the UI immediately and risk showing an empty dialog. With `mediation: "immediate"`, the browser shows the login UI _only_ if it immediately knows a passkey or saved password is available. If not, the promise rejects silently with `NotAllowedError`, and your site falls straight through to the traditional login form. No empty dialogs, no wasted user attention — just a smooth path to authentication regardless of what's available.

#### 🛠 More Useful Bits

- **CSS `at-rule()` detection**: `@supports at-rule(@container)` finally lets you feature-detect CSS at-rules natively, like you already could for properties and selectors.
- **`loading="lazy"` for `<video>` and `<audio>`**: Same lazy-loading behavior we've had for images and iframes, now for native media elements. A straightforward performance win.
- **Drag-and-drop fixes**: `dropEffect` now follows the spec correctly on `dragEnter`, `dragOver`, and `dragLeave` events. Plus, `pointercancel` fires properly when drag starts, ending the pointer event stream.
- **Reusing no-store images**: If you reassign the same `src` to an `<img>` with `Cache-Control: no-store`, Chrome now reuses the already-decoded image instead of re-fetching — matching Firefox and Safari behavior.
- **`contentType` in Resource Timing**: `PerformanceResourceTiming` now exposes the server's `Content-Type` header, making it easier to debug MIME-type issues in the field.
- **avar2 font shaping**: Variable fonts get a major upgrade. The avar2 table lets font designers create "meta sliders" that control multiple axes at once, and define mathematical relationships between axes. The result: more expressive variable fonts with smaller file sizes.

#### 🧪 What's in Origin Trial?

Several promising features are opt-in for now:

- **Declarative CSS Module Scripts**: Inline style modules for declarative shadow DOM.
- **Container Timing API**: Measure when specific DOM sections first paint — like Element Timing, but scoped to components.
- **HTML-in-Canvas**: Render live HTML subtrees into canvas using `drawElementImage` and friends.
- **OpaqueRange**: A range-like API for form control values, enabling inline suggestions and highlights without exposing DOM internals.
- **Connection Allowlisting**: An HTTP-header-driven mechanism to restrict which external endpoints a document or worker can connect to.

---

_For the complete list — including WebGPU linear indexing, Web Serial on Android, and IDNA ContextJ rules — check the official release notes: [developer.chrome.com/release-notes/148](https://developer.chrome.com/release-notes/148)_
