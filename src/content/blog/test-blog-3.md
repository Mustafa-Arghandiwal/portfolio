---
title: Test Blog 3
description: Text blog 3 description
pubDate: 'Dec 28 2025'
tags:
  - test
  - astro
  - workflow
  - frontend
image: '../../assets/coffee-shop.jpg'
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
