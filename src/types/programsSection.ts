export type ProgramCategoryId = 'science' | 'coding' | 'math' | 'robotics' | 'writing' | 'critical-thinking';

export interface ProgramAgeOption {
	label: string;
	isActive?: boolean;
}

export interface ProgramSelectOption {
	value: string;
	label: string;
}

export interface ProgramListingCard {
	href: string;
	title: string;
	description: string;
	ageLabel: string;
	category: { id: ProgramCategoryId; label: string };
	durationWeeks: number;
	teacher: { name: string };
	/** Matches educator/mentor image via `ProgramsSection` map */
	teacherPhotoKey: 'mark' | 'katie' | 'malikai' | 'thompson';
	/** Matches hero image import in `ProgramsSection.astro` */
	coverImageKey: ProgramCategoryId;
}

export interface ProgramsSectionData {
	eyebrow: string;
	title: string;
	description: string;
	filters: {
		ageRange: {
			label: string;
			options: ProgramAgeOption[];
		};
		campType: {
			label: string;
			placeholder: string;
			options: ProgramSelectOption[];
		};
		teacher: {
			label: string;
			placeholder: string;
			options: ProgramSelectOption[];
		};
		clearLabel: string;
	};
	cards: ProgramListingCard[];
	viewAllCta: { label: string; href: string };
	learnMoreLabel?: string;
	emptyFilterMessage?: string;
}
