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

const teachersCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teachers' }),
	schema: z.object({
		seo: z.object({
			title: z.string(),
			description: z.string(),
		}),
		hero: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
		}),
		parentLove: z.object({
			title: z.string(),
			description: z.string(),
			cards: z.array(
				z.object({
					iconUrl: z.string(),
					title: z.string(),
					description: z.string(),
				}),
			),
		}),
		parentQuote: z.object({
			avatarUrl: z.string(),
			avatarAlt: z.string(),
			quote: z.string(),
			highlightText: z.string(),
			authorLine: z.string(),
		}),
		mentors: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					name: z.string(),
					rating: z.string(),
					credentials: z.string(),
					bio: z.array(z.string()),
					tags: z.array(
						z.object({
							label: z.string(),
							tone: z.enum(['blue', 'violet', 'green', 'amber']),
						}),
					),
					facts: z.array(z.string()),
					featured: z.boolean().optional(),
					imageUrl: z.string(),
				}),
			),
		}),
		adminTeam: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					name: z.string(),
					rating: z.string(),
					role: z.string(),
					description: z.string(),
					imageUrl: z.string(),
				}),
			),
		}),
		parentTestimonials: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					quote: z.string(),
					name: z.string(),
					role: z.string(),
					imageUrl: z.string(),
					featured: z.boolean().optional(),
				}),
			),
		}),
		mentorFitCta: z.object({
			title: z.string(),
			description: z.string(),
			buttonLabel: z.string(),
			buttonHref: z.string(),
			footnote: z.string(),
		}),
	}),
});

export const collections = {
	blog: blogCollection,
	teachers: teachersCollection,
};
