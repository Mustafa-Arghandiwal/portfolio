

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"



const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().max(200),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()),
			image: image().optional(),

		})
})

export const collections = { blog }

