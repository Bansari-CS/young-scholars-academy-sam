import type { ProgramsSectionData } from './programsSection';

export type MethodologyStatIconKey = 'people' | 'cap' | 'chart' | 'heart';

export interface MethodologyStatTile {
	stat: string;
	description: string;
	variant: 'violet' | 'sky' | 'amber' | 'emerald';
	statIcon: MethodologyStatIconKey;
}

export type MethodologyPrincipleIconKey =
	| 'depth'
	| 'neuro'
	| 'socratic'
	| 'async'
	| 'peer'
	| 'safe';

export interface MethodologyPrinciple {
	title: string;
	description: string;
	iconTint: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'teal' | 'blue';
	principleIcon: MethodologyPrincipleIconKey;
}

export interface ImpactStat {
	value: string;
	label: string;
}

export interface ImpactTestimonialAuthor {
	name: string;
	meta: string;
	avatarIndex: 1 | 2 | 3 | 4 | 5 | 6;
	photoSrc?: string;
}

export interface ImpactQuoteCard {
	type: 'quote';
	rating: number;
	quote: string;
	author: ImpactTestimonialAuthor;
}

export interface ImpactVideoCard {
	type: 'video';
	rating: number;
	quote: string;
	author: ImpactTestimonialAuthor;
	thumbnailIndex?: 1 | 2 | 3 | 4 | 5 | 6;
	posterSrc?: string;
	driveFileId?: string;
}

export type ImpactCard = ImpactQuoteCard | ImpactVideoCard;

export interface ImpactColumn {
	flow: 'up' | 'down';
	cards: ImpactCard[];
}

export type TeacherPhotoIndex =
	| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

/** Figma “Learn from the Best” — one card per teacher */
export interface TeacherCard {
	name: string;
	/** Degree / school line (accent color in Figma) */
	credentials: string;
	bio: string;
	photoIndex: TeacherPhotoIndex;
}

export interface FitColumn {
	title: string;
	tone: 'good' | 'warning';
	items: string[];
}

export interface FaqItem {
	question: string;
	answer: string;
}

/** Figma platform section (node 15:1051 — file c3rnrQgPGh0oRsryiX14Ln) — feature tab icons */
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
		columns: ImpactColumn[];
	};
	teachers: {
		eyebrow: string;
		title: string;
		description: string;
		/** Shown on each card (e.g. Find Your Teacher →) */
		cardCta: { label: string; href: string };
		items: TeacherCard[];
	};
	world: {
		eyebrow: string;
		title: string;
		titleLine2: string;
		description: string;
		globeAlt?: string;
		stats: { value: string; label: string }[];
		countriesHeading?: string;
		countries?: Array<{ flag: string; name: string }>;
		regions?: string[];
	};
	fit: {
		eyebrow: string;
		title: string;
		description: string;
		goodFit: FitColumn;
		notIdeal: FitColumn;
		note: string;
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
