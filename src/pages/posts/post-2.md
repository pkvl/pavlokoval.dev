---
layout: "../../layouts/PostLayout.astro"
title: "The greatest post of all time 2"
author: "Pavlo"
pubDate: "January 15, 2025"
editDate: "January 18, 2025"
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
