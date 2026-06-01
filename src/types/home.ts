export interface NavItem {
	label: string;
	href: string;
}

export interface HeroStat {
	label: string;
	value: string;
	change?: string;
	icon: 'accuracy' | 'points' | 'study';
}

export interface NextSessionData {
	label: string;
	title: string;
	chipText: string;
}

export interface PartnerOrg {
	name: string;
	subtitle: string;
	icon: 'tree' | 'star' | 'twoe' | 'heart' | 'book';
}

export interface LearnerCard {
	title: string;
	description: string;
	highlight: string;
	icon: 'stress' | 'group' | 'alone';
}

export interface HeroDashboardData {
	studentName: string;
	course: string;
	streakLabel: string;
	cardAriaLabel?: string;
	videoDriveFileId?: string;
	videoYouTubeId?: string;
	videoLocalSrc?: string;
	videoAriaLabel?: string;
	progressTag: string;
	lessonProgressLabel: string;
	lessonTitle: string;
	lessonDescription: string;
	progressPercent: number;
	stats: HeroStat[];
	nextSession: NextSessionData;
}

