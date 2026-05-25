import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
			searchPlaceholder: z.string(),
			filterLabels: z.object({
				all: z.string(),
				stem: z.string(),
				creative: z.string(),
				gaming: z.string(),
				writing: z.string(),
			}),
			viewProfileLabel: z.string(),
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
					aboutParagraphs: z.array(z.string()),
				}),
			),
		}),
		adminTeam: z.object({
			title: z.string(),
			description: z.string(),
			viewProfileLabel: z.string(),
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

const semesterSalesCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/semester-sales' }),
	schema: z.object({
		seo: z.object({
			title: z.string(),
			description: z.string(),
		}),
		hero: z.object({
			badge: z.string(),
			title: z.string(),
			description: z.string(),
			primaryCtaLabel: z.string(),
			primaryCtaHref: z.string(),
			secondaryCtaLabel: z.string(),
			secondaryCtaHref: z.string(),
			countdown: z
				.object({
					targetDate: z.string(),
					label: z.string().optional(),
				})
				.optional(),
			stats: z.array(
				z.object({
					value: z.string(),
					label: z.string(),
				}),
			),
			portal: z.object({
				title: z.string(),
				subtitle: z.string(),
				streakLabel: z.string(),
				nextClassLabel: z.string(),
				nextClassTitle: z.string(),
				nextClassDescription: z.string(),
				progressLabel: z.string(),
				progressValue: z.string(),
				progressPercent: z.number(),
				metricOneLabel: z.string(),
				metricOneValue: z.string(),
				metricOneNote: z.string(),
				metricTwoLabel: z.string(),
				metricTwoValue: z.string(),
				metricTwoNote: z.string(),
			}),
		}),
		challenge: z.object({
			eyebrow: z.string(),
			title: z.string(),
			items: z.array(z.string()),
			quote: z.string(),
			quoteAttribution: z.string(),
		}),
		academy: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			features: z.array(z.string()),
			badgeTitle: z.string(),
			badgeDescription: z.string(),
		}),
		differentThinkers: z.object({
			title: z.string(),
			cards: z.array(
				z.object({
					title: z.string(),
					text: z.string(),
				}),
			),
		}),
		howSemesterWorks: z.object({
			title: z.string(),
			points: z.array(
				z.object({
					title: z.string(),
					text: z.string(),
				}),
			),
			highlight: z.string(),
		}),
		subjects: z
			.object({
				title: z.string(),
				description: z.string(),
				items: z.array(
					z.object({
						title: z.string(),
						description: z.string(),
					}),
				),
				ctaLabel: z.string(),
				ctaHref: z.string(),
			})
			.optional(),
		virtualWorks: z.object({
			title: z.string(),
			items: z.array(
				z.object({
					title: z.string(),
					text: z.string(),
				}),
			),
		}),
		familiesSaying: z.object({
			title: z.string(),
			reviews: z.array(
				z.object({
					quote: z.string(),
					name: z.string(),
					role: z.string(),
					avatarAlt: z.string(),
					avatarSrc: z.string().optional(),
				}),
			),
		}),
		pricing: z.object({
			title: z.string(),
			subtitle: z.string(),
			plans: z.array(
				z.object({
					name: z.string(),
					badge: z.string().optional(),
					price: z.string(),
					unit: z.string(),
					description: z.string().optional(),
					savingText: z.string().optional(),
					features: z.array(z.string()),
					ctaLabel: z.string(),
					ctaHref: z.string(),
				}),
			),
			fundsText: z.string(),
			fundsCtaLabel: z.string(),
			fundsCtaHref: z.string(),
		}),
		faq: z.object({
			title: z.string(),
			subtitle: z.string(),
			items: z.array(
				z.object({
					q: z.string(),
					a: z.string(),
					open: z.boolean(),
				}),
			),
		}),
		finalCta: z.object({
			title: z.string(),
			description: z.string(),
			primaryCtaLabel: z.string(),
			primaryCtaHref: z.string(),
			secondaryCtaLabel: z.string(),
			secondaryCtaHref: z.string(),
		}),
	}),
});

const mentorProfileCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/mentor-profile' }),
	schema: z.object({
		seo: z.object({
			title: z.string(),
			description: z.string(),
		}),
		hero: z.object({
			imageAlt: z.string(),
			topRatedTitle: z.string(),
			topRatedSubtitle: z.string(),
			badgeLabel: z.string(),
			experienceLabel: z.string(),
			name: z.string(),
			credentials: z.string(),
			quoteAvatarAlt: z.string(),
			quote: z.string(),
			primaryCtaLabel: z.string(),
			primaryCtaHref: z.string(),
			secondaryCtaLabel: z.string(),
			secondaryCtaHref: z.string(),
		}),
		about: z.object({
			title: z.string(),
			paragraphs: z.array(z.string()),
		}),
		beyondClassroom: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
				}),
			),
		}),
		howITeach: z.object({
			title: z.string(),
			description: z.string(),
			cards: z.array(
				z.object({
					title: z.string(),
					lines: z.array(z.string()),
				}),
			),
		}),
		insideClassroom: z.object({
			title: z.string(),
			description: z.string(),
			mainVideoLabel: z.string(),
			projectBadge: z.string(),
			projectTitle: z.string(),
			liveBadge: z.string(),
			liveTitle: z.string(),
		}),
		classroomVideoGallery: z.object({
			title: z.string(),
			description: z.string(),
			items: z
				.array(
					z.object({
						videoSrc: z.string(),
						label: z.string(),
					}),
				)
				.min(8)
				.max(8),
		}),
		classes: z.object({
			title: z.string(),
			description: z.string(),
			viewAllLabel: z.string(),
			viewAllHref: z.string(),
			featuredAgeLabel: z.string(),
			featuredTitle: z.string(),
			featuredDescription: z.string(),
			featuredStartsLabel: z.string(),
			featuredStartsValue: z.string(),
			featuredEnrollLabel: z.string(),
			featuredEnrollHref: z.string(),
			upcomingTitle: z.string(),
			upcomingDescription: z.string(),
			upcomingCtaLabel: z.string(),
			upcomingCtaHref: z.string(),
		}),
		studentExperience: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					title: z.string(),
					lines: z.array(z.string()),
				}),
			),
		}),
		testimonials: z.object({
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					quote: z.string(),
					name: z.string(),
					meta: z.string(),
					highlight: z.boolean().optional(),
				}),
			),
		}),
		findClassCta: z.object({
			title: z.string(),
			description: z.string(),
			primaryCtaLabel: z.string(),
			primaryCtaHref: z.string(),
			secondaryCtaLabel: z.string(),
			secondaryCtaHref: z.string(),
		}),
	}),
});

const summerCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/summer' }),
	schema: z.record(z.string(), z.any()),
});

const blogPageCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-page' }),
	schema: z.record(z.string(), z.any()),
});

const blogDetailCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-detail' }),
	schema: z.record(z.string(), z.any()),
});

const courseDetailCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/course-detail' }),
	schema: z.record(z.string(), z.any()),
});

const homeCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/home' }),
	schema: z.record(z.string(), z.any()),
});

const topAnnouncementCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/top-announcement' }),
	schema: z.object({
		message: z.string(),
		ctaLabel: z.string(),
		ctaHref: z.string(),
	}),
});

export const collections = {
	'top-announcement': topAnnouncementCollection,
	'blog-page': blogPageCollection,
	'blog-detail': blogDetailCollection,
	'course-detail': courseDetailCollection,
	home: homeCollection,
	teachers: teachersCollection,
	'semester-sales': semesterSalesCollection,
	'mentor-profile': mentorProfileCollection,
	summer: summerCollection,
};
