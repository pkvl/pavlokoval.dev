---
layout: "../../layouts/Layout.astro"
title: "The greatest post of all time 2"
author: "Pavlo"
date: "Jul 27, 2024"
description: "Short description."
tags: ["first", "second"]
---

Here is my _great_ post!

This would look like this:

```html
<link rel="stylesheet" href="base.css" />
<link rel="stylesheet" href="mobile.css" />
<link rel="stylesheet" href="tablet.css" />
<link rel="stylesheet" href="desktop.css" />
```

It would be much easier to write using the modern syntax, but I’d be careful for now: browsers are still [catching up on the support](https://caniuse.com/css-media-range-syntax), and loading CSS is rather critical.

- `(width < 768px)`
- `(768px <= width < 1024px)`
- `(width >= 1024px)`

## Priorities

Another little detail in the Network panel made me realize what was going on: the Priority column. You might have to enable it by right-clicking the table heading and choosing it from the list of available columns.

!Network panel in Chrome with the list of CSS files: base.css, desktop.css with “highest” priority, then mobile.css, tablet.css with “lowest” priority.
CSS files aren’t equal either: desktop styles are more important than mobile ones.

It took a surprisingly long time for this page to load, almost 12 seconds. It’s because I disabled the cache and throttled the network to “Slow 3G”. I keep it enabled in my DevTools because it reminds me of real-world network performance 😐

You might’ve guessed where these priorities come from. All CSS files linked to the page are evaluated during HTML parsing:

- The ones with `media` attribute relevant to the current conditions (or without one, which makes it `media="all"`) get loaded with the **highest** priority.
- The ones with `media` attribute irrelevant to the current conditions (like `media="print"` or `(width >= 1024px)` on mobile) are still loaded, but with the **lowest** priority.

# Hi there!

This Markdown file creates a page at `your-domain.com/page-1/`

It probably isn't styled much, but Markdown does support:

- **bold** and _italics._
- lists
- [links](https://astro.build)
- <p>HTML elements</p>
- and more!

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require("./lang/" + l);
  return true;
};
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>
> OK.

![A starry night sky.](../../assets/posts/tokyo.png)

<p class="my_class">this is a paragraph with my class</p>
