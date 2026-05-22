import { getEntry } from 'astro:content';
import { toSlug } from './slug';

/** Canonical URL for a course/camp detail page from its display title. */
export function courseHref(title: string): string {
	return `/courses/${toSlug(title)}`;
}

/** All `/courses/[slug]` pages to pre-render (home programs + summer camps). */
export async function collectCourseSlugs(): Promise<Map<string, string>> {
	const [homeEntry, summerEntry] = await Promise.all([
		getEntry('home', 'home'),
		getEntry('summer', 'summer'),
	]);

	const slugs = new Map<string, string>();

	function add(title: string) {
		const slug = toSlug(title);
		if (slug && !slugs.has(slug)) {
			slugs.set(slug, title);
		}
	}

	for (const card of homeEntry?.data.programs?.cards ?? []) {
		if (card.title) add(card.title);
	}

	for (const camp of (summerEntry?.data.camps?.cards ?? []) as Array<{ name?: string }>) {
		if (typeof camp.name === 'string' && camp.name.trim()) {
			add(camp.name);
		}
	}

	return slugs;
}
