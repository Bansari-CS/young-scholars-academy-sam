export interface CourseNavItem {
	label: string;
	href: string;
}

export interface HeroStat {
	label: string;
	value: string;
}

export interface CourseIncludeItem {
	text: string;
}

export interface CurriculumSession {
	session: string;
	topic: string;
	date: string;
}

export interface GainItem {
	text: string;
}

export interface ReviewItem {
	name: string;
	role: string;
	text: string;
}

export interface RelatedCourse {
	tag: string;
	title: string;
	meta: string;
	image: string;
}

export const courseDetailData = {
	navItems: [
		{ label: 'Programs', href: '#' },
		{ label: 'How It Works', href: '#' },
		{ label: 'Why YSA', href: '#' },
		{ label: 'Results', href: '#' },
		{ label: 'Our Teachers', href: '#' },
	] as CourseNavItem[],
	hero: {
		badges: ['Science & Tech', 'Ages 10-14'],
		titleLead: 'Introduction to',
		titleAccent: 'Robotics & Coding',
		description:
			'Build real robots and learn Python fundamentals in this hands-on, interactive 8-week course designed specifically for middle school innovators.',
		stats: [
			{ label: 'Duration', value: '8 Weeks' },
			{ label: 'Level', value: 'Beginner' },
			{ label: 'Class Size', value: 'Max 12' },
			{ label: 'Format', value: 'Live Online' },
		] as HeroStat[],
		price: '$299',
		priceNote: 'Full course access',
		instructor: 'Dr. Alex Watson',
	},
	tabs: ['Overview', 'Learning Outcomes', 'Schedule', 'Teacher', 'Reviews'],
	sidebar: {
		price: '$299',
		cohort: 'Next cohort starts Nov 12',
		includes: [
			{ text: '16 hours live instruction' },
			{ text: 'Physical robotics kit shipped' },
			{ text: 'Certificate of completion' },
			{ text: 'Lifetime community access' },
		] as CourseIncludeItem[],
		related: [
			{
				tag: 'Design',
				title: 'Game Design for Kids',
				meta: '$199 • 6 Weeks',
				image: 'https://www.figma.com/api/mcp/asset/4ea2ca89-46f5-4e4f-be33-9f2dbc3d190a',
			},
			{
				tag: 'Science',
				title: 'Junior Chemist Labs',
				meta: '$249 • 4 Weeks',
				image: 'https://www.figma.com/api/mcp/asset/6f6fc97f-9d55-4056-8b2c-bc3691cc2f29',
			},
		] as RelatedCourse[],
	},
	content: {
		overview:
			'Welcome to the exciting world of robotics! This course is designed to take students from absolute beginners to confident creators. We focus on practical, hands-on projects that make abstract coding concepts tangible and fun.',
		overview2:
			'Students will work in small groups, ensuring personalized attention. By the end of the 8 weeks, each student will have built and programmed their own autonomous navigating robot.',
		pillars: [
			{
				title: 'Python Basics',
				description: 'Variables, loops, and logic tailored for hardware control.',
			},
			{
				title: 'Hardware Assembly',
				description: 'Connecting sensors, motors, and microcontrollers safely.',
			},
		],
		gains: [
			{ text: 'Mastery over Python syntax and logic structures.' },
			{ text: 'Understanding of electronics: circuits, voltage, and current.' },
			{ text: 'Critical thinking and algorithmic problem-solving.' },
			{ text: 'Confidence to explore advanced engineering topics.' },
		] as GainItem[],
		sessions: [
			{
				session: 'Session 01',
				topic: 'Introduction to Hardware & Tools',
				date: 'Nov 12, 4:00 PM',
			},
			{
				session: 'Session 02',
				topic: 'Python: Variables & Basic Logic',
				date: 'Nov 19, 4:00 PM',
			},
			{
				session: 'Session 03',
				topic: 'Sensors and Data Inputs',
				date: 'Nov 26, 4:00 PM',
			},
		] as CurriculumSession[],
		instructorBio:
			'With over 15 years of experience in aerospace robotics and a PhD in Educational Technology, Dr. Watson specializes in making complex engineering concepts accessible to young minds. He has taught over 5,000 students globally.',
	},
	reviews: {
		rating: '4.9/5.0',
		total: '(124 reviews)',
		items: [
			{
				name: 'Sarah Miller',
				role: 'Parent of 12yo',
				text: "My son was always playing video games, now he's building them! Dr. Watson is incredible at keeping them engaged.",
			},
			{
				name: 'David Chen',
				role: 'Parent of 10yo',
				text: 'The kit arrived quickly and was high quality. The online sessions feel like they are in a real classroom.',
			},
		] as ReviewItem[],
	},
};
