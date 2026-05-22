import { getEntry } from 'astro:content';
import type { NavItem } from '../types/home';

export async function getSiteNavItems(): Promise<NavItem[]> {
	const homeEntry = await getEntry('home', 'home');
	const navItems = homeEntry?.data.navItems;

	if (!navItems?.length) {
		throw new Error('Missing site navigation in src/content/home/home.md (navItems)');
	}

	return navItems as NavItem[];
}
