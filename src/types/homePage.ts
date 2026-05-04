import type { ProgramsSectionData } from './programsSection';

export interface MethodologyStatTile {
	stat: string;
	description: string;
	variant: 'violet' | 'sky' | 'amber' | 'emerald';
	iconSrc: string;
}

export interface MethodologyPrinciple {
	title: string;
	description: string;
	iconTint: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'teal' | 'blue';
	iconSrc: string;
}

export interface ImpactStat {
	value: string;
	label: string;
}

export interface TeacherCard {
	name: string;
	role: string;
	bio: string;
}

export interface FitPoint {
	title: string;
	description: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

/** Figma platform section (e.g. node 15:1041) — feature tab icons */
export type PlatformFeatureIcon = 'live' | 'ai' | 'parent' | 'game';

export interface PlatformFeature {
	title: string;
	description: string;
	icon: PlatformFeatureIcon;
}

export interface HomePageSectionsData {
	programs: ProgramsSectionData;
	methodology: {
		eyebrow: string;
		title: string;
		description: string;
		cta: { label: string; href: string };
		statTiles: MethodologyStatTile[];
		principles: MethodologyPrinciple[];
	};
	platform: {
		eyebrow: string;
		title: string;
		description: string;
		features: PlatformFeature[];
	};
	impact: {
		eyebrow: string;
		title: string;
		description: string;
		stats: ImpactStat[];
	};
	teachers: {
		eyebrow: string;
		title: string;
		description: string;
		items: TeacherCard[];
	};
	world: {
		eyebrow: string;
		title: string;
		titleLine2: string;
		description: string;
		regions: string[];
	};
	fit: {
		eyebrow: string;
		title: string;
		description: string;
		points: FitPoint[];
	};
	faq: {
		eyebrow: string;
		title: string;
		description: string;
		items: FaqItem[];
	};
	communityCta: {
		title: string;
		description: string;
		primaryCta: { label: string; href: string };
		secondaryCta: { label: string; href: string };
	};
}
