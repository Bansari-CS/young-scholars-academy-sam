import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		readTime: z.string(),
		publishedAt: z.date(),
		author: z.string(),
		authorRole: z.string(),
		coverImage: z.string(),
		order: z.number().optional(),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	blog: blogCollection,
};
