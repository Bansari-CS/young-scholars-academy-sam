export interface NavItem {
	label: string;
	href: string;
}

export interface HeroStat {
	label: string;
	value: string;
	change?: string;
}

export interface HeroDashboardData {
	studentName: string;
	course: string;
	streakLabel: string;
	progressTag: string;
	lessonTitle: string;
	lessonDescription: string;
	progressPercent: number;
	stats: HeroStat[];
}

export interface HeroData {
	badgeText: string;
	titleLineOne: string;
	titleHighlight: string;
	description: string;
	primaryCta: {
		label: string;
		href: string;
	};
	secondaryCta: {
		label: string;
		href: string;
	};
	ratingText: string;
	navItems: NavItem[];
	dashboard: HeroDashboardData;
}
