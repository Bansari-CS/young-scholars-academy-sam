import type { HeroData, LearnerSectionData } from '../types/home';

export const heroData: HeroData = {
	trustBadges: [
		'WASC Accredited',
		'1,200+ Families Served',
		'93% Re-Enroll',
		'40+ States, 13 Countries',
	],
	titleLineOne: "Where Your Child's",
	titleHighlight: 'Brilliance Belongs',
	description:
		'Premium online learning designed for gifted, twice-exceptional, and neurodivergent learners. Small classes. Expert mentors. Real results.',
	primaryCta: {
		label: 'Browse Courses',
		href: '/summer',
	},
	secondaryCta: {
		label: 'Browse All Courses',
		href: '/#programs-heading',
	},
	ratingText: '4.9/5 from parent reviews',
	navItems: [
		{ label: 'Programs', href: '#' },
		{ label: 'How It Works', href: '#' },
		{ label: 'Why YSA', href: '#' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Our Teachers', href: '/teachers' },
	],
	dashboard: {
		studentName: "Alex's Dashboard",
		course: 'Advanced Math • Grade 6',
		streakLabel: '15 Day Streak',
		cardAriaLabel: 'Product preview',
		progressTag: 'In Progress',
		lessonProgressLabel: 'Lesson Progress',
		lessonTitle: 'Algebraic Expressions',
		lessonDescription: 'Master variables and solve complex equations',
		progressPercent: 68,
		stats: [
			{ label: 'Accuracy', value: '94%', change: '+6%', icon: 'accuracy' },
			{ label: 'Points', value: '2,847', icon: 'points' },
			{ label: 'Study Time', value: '5.2h', icon: 'study' },
		],
		nextSession: {
			label: 'Next Session',
			title: 'Live Class: Geometry Basics',
			chipText: 'Join',
		},
	},
};

export const learnerSectionData: LearnerSectionData = {
	organizationsTitle: 'Trusted by Leading Educational Organizations',
	organizations: [
		{ name: 'STANFORD', subtitle: 'ONLINE', icon: 'tree' },
		{ name: 'NAGC', subtitle: 'National Assoc. for Gifted Children', icon: 'star' },
		{ name: '2e Foundation', subtitle: 'Twice-Exceptional Education', icon: 'twoe' },
		{ name: 'SENG', subtitle: 'Supporting Emotional Needs of the Gifted', icon: 'heart' },
		{ name: "Hoagies' Gifted", subtitle: 'Education Page', icon: 'book' },
	],
	badgeText: 'Why Families Choose YSA',
	title: 'We Understand Your Learner',
	description:
		"Parents come to us when traditional schools can't keep up with their child's curiosity, when boredom turns to frustration, or when they need a community that truly gets it.",
	cards: [
		{
			title: '"School Is Too Easy"',
			description:
				"Your child finishes work in minutes, then zones out. They're not challenged, not engaged, not growing.",
			highlight: 'We meet them where they are and accelerate from there',
			icon: 'stress',
		},
		{
			title: '"No One Gets My Child"',
			description:
				"Gifted, 2e, neurodivergent - your learner doesn't fit the mold. They need teachers who understand.",
			highlight: 'Our educators specialize in diverse learners and celebrate differences',
			icon: 'group',
		},
		{
			title: '"Isolated & Lonely"',
			description:
				'Your child feels different, alone. They crave intellectual peers who share their passions.',
			highlight: 'Small cohorts create lasting friendships with true peers',
			icon: 'alone',
		},
	],
};
