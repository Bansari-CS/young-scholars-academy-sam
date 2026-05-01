import type { HeroData } from '../types/home';

export const heroData: HeroData = {
	badgeText: 'Trusted by 2,000+ families',
	titleLineOne: "Where Your Child's",
	titleHighlight: 'Brilliance Belongs',
	description:
		'Premium online learning designed for gifted, twice-exceptional, and neurodivergent learners. Small classes. Expert mentors. Real results.',
	primaryCta: {
		label: 'Browse Courses',
		href: '#',
	},
	secondaryCta: {
		label: 'Book a Call',
		href: '#',
	},
	ratingText: '4.9/5 from parent reviews',
	navItems: [
		{ label: 'Programs', href: '#' },
		{ label: 'How It Works', href: '#' },
		{ label: 'Why YSA', href: '#' },
		{ label: 'Results', href: '#' },
		{ label: 'Our Teachers', href: '#' },
	],
	dashboard: {
		studentName: "Alex's Dashboard",
		course: 'Advanced Math - Grade 6',
		streakLabel: '15 Day Streak',
		progressTag: 'In Progress',
		lessonTitle: 'Algebraic Expressions',
		lessonDescription: 'Master variables and solve complex equations',
		progressPercent: 68,
		stats: [
			{ label: 'Accuracy', value: '94%', change: '+6%' },
			{ label: 'Points', value: '2,847' },
			{ label: 'Study Time', value: '5.2h' },
		],
	},
};
