import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
		        description: z.string().optional(),
			// Transform string to Date object
			created: z.coerce.date(),
			updated: z.coerce.date().optional(),
		        status: z.enum(['finished', 'in-progress', 'notes']).default('finished'),
		        confidence: z.enum(['certain', 'likely', 'possible', 'unlikely', 'speculative']).default('likely'),
		        importance: z.number().min(1).max(10).default(5),
		        tags: z.array(z.string()).default([]),
		        heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
