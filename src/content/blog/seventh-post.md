---
title: Building a Clean Blog with Astro
description: How I built a fast, minimal blog using Astro, Tailwind, and content collections.
pubDate: 2027-02-15
updatedDate: 2027-02-20
tags:
  - webdev
  - astro
  - workflow
  - frontend
image: '../../assets/coffee-shop.jpg'
---

Astro makes it incredibly easy to build **fast, content-focused websites**.
In this post, I’ll walk through how I set up my blog, structured content,
and handled styling in a clean, scalable way.

---

## Why Astro?

Astro ships zero JavaScript by default, which makes it perfect for blogs and
documentation sites.

Some reasons I chose Astro:

- Server-first rendering
- Content collections with type safety
- Easy image optimization
- Works great with Tailwind

---

## Project Structure

Here’s the basic structure I used:

```txt
src/
  content/
    blog/
      my-first-post.md
  components/
  layouts/

```
### Code Block
```js

import { type CollectionEntry, getCollection, render } from "astro:content";
import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.id },
		props: post,
	}));
}
type Props = CollectionEntry<"blog">;

const post = Astro.props;
const { Content } = await render(post);
```

## Why Astro?

Astro ships zero JavaScript by default, which makes it perfect for blogs and
documentation sites.

Some reasons I chose Astro:

- Server-first rendering
- Content collections with type safety
- Easy image optimization
- Works great with Tailwind

---

## Project Structure

Here’s the basic structure I used:

```txt
src/
  content/
    blog/
      my-first-post.md
  components/
  layouts/

```
### Code Block
```js

import { type CollectionEntry, getCollection, render } from "astro:content";
import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.id },
		props: post,
	}));
}
type Props = CollectionEntry<"blog">;

const post = Astro.props;
const { Content } = await render(post);
```

