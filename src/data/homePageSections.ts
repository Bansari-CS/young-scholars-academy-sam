import type { HomePageSectionsData } from '../types/homePage';
import { programsSectionData } from './programsSection';
import { figmaMethodology } from './figmaAssets';

export const homePageSectionsData: HomePageSectionsData = {
	programs: programsSectionData,
	methodology: {
		eyebrow: 'What makes us different',
		title: 'The YSA Methodology',
		description:
			"We don't just teach subjects—we nurture the whole learner. Our approach combines academic rigor with emotional safety, creating an environment where brilliant minds flourish.",
		cta: { label: 'Learn Our Approach', href: '#' },
		statTiles: [
			{
				stat: '4:1',
				description: 'Student-teacher ratio for\npersonalized attention',
				variant: 'violet',
				iconSrc: figmaMethodology.statPeople,
			},
			{
				stat: '100%',
				description: "PhD or Master's level instructors",
				variant: 'sky',
				iconSrc: figmaMethodology.statCap,
			},
			{
				stat: '2.5x',
				description: 'Faster skill progression vs. traditional methods',
				variant: 'amber',
				iconSrc: figmaMethodology.statChart,
			},
			{
				stat: '98%',
				description: 'Parent satisfaction rate',
				variant: 'emerald',
				iconSrc: figmaMethodology.statHeart,
			},
		],
		principles: [
			{
				title: 'Depth Over Breadth',
				description:
					'We go deep into subjects, encouraging mastery and genuine understanding rather than surface-level coverage.',
				iconTint: 'indigo',
				iconSrc: figmaMethodology.pMicroscope,
			},
			{
				title: 'Neurodivergent-Friendly',
				description:
					'Our educators are trained in 2e and neurodivergent learning styles, celebrating different ways of thinking.',
				iconTint: 'violet',
				iconSrc: figmaMethodology.pPuzzle,
			},
			{
				title: 'Socratic Discussion',
				description:
					'Students learn through dialogue and inquiry, not passive listening—developing critical thinking naturally.',
				iconTint: 'cyan',
				iconSrc: figmaMethodology.pChat,
			},
			{
				title: 'Asynchronous Pacing',
				description: 'Your child moves at their own speed—accelerating when ready, taking time when needed.',
				iconTint: 'emerald',
				iconSrc: figmaMethodology.pStar,
			},
			{
				title: 'Peer Community',
				description: 'Small cohorts foster lasting friendships with true intellectual and emotional peers.',
				iconTint: 'teal',
				iconSrc: figmaMethodology.pHandshake,
			},
			{
				title: 'Emotionally Safe',
				description: 'We create spaces where mistakes are learning opportunities and every voice is valued.',
				iconTint: 'blue',
				iconSrc: figmaMethodology.pShield,
			},
		],
	},
	platform: {
		eyebrow: 'EXPERIENCE YSA',
		title: 'A Learning Platform Built for Brilliance',
		description:
			'Interactive dashboards, live classes, and AI-powered insights—all designed to keep your child engaged and progressing',
		features: [
			{
				icon: 'live',
				title: 'Live Interactive Classes',
				description:
					'Real-time video sessions with breakout rooms, collaborative whiteboards, and instant feedback',
			},
			{
				icon: 'ai',
				title: 'AI-Powered Personalization',
				description:
					"Adaptive learning paths that adjust to your child's strengths, pace, and interests",
			},
			{
				icon: 'parent',
				title: 'Parent Dashboard',
				description: 'Track progress, view detailed reports, and celebrate milestones in real-time',
			},
			{
				icon: 'game',
				title: 'Gamified Learning',
				description: 'Earn badges, unlock achievements, and compete in friendly challenges',
			},
		],
	},
	impact: {
		eyebrow: 'PROVEN RESULTS',
		title: 'Real Growth. Measurable Impact.',
		description:
			"Families don't just see happier kids—they see tangible academic and emotional progress",
		stats: [
			{ value: '94%', label: 'of students advance 2+ grade levels in their subject' },
			{ value: '89%', label: 'report increased confidence and self-advocacy' },
			{ value: '4.9/5', label: 'average parent satisfaction rating' },
			{ value: '2.5x', label: 'faster skill progression vs traditional programs' },
		],
	},
	teachers: {
		eyebrow: 'EXPERT EDUCATORS',
		title: 'Learn from the Best',
		description:
			"Our teachers aren't just experts in their fields—they're passionate about gifted and neurodivergent education",
		items: [
			{
				name: 'Dr. Maya Chen',
				role: 'Mathematics',
				bio: 'Former IMO coach; specializes in early acceleration without gaps.',
			},
			{
				name: 'Jordan Ellis',
				role: 'Writing & rhetoric',
				bio: 'Journalist turned educator; focuses on voice, structure, and fearless drafting.',
			},
			{
				name: 'Samira Okonkwo',
				role: '2e & EF',
				bio: 'School psychologist and classroom veteran; pairs rigor with compassionate pacing.',
			},
		],
	},
	world: {
		eyebrow: 'Community',
		title: 'Our Kids Are All Around',
		titleLine2: 'the World',
		description: 'Live classes across time zones—your child meets true peers, not just the kids next door.',
		regions: ['North America', 'Europe', 'Middle East', 'Asia Pacific', 'Latin America'],
	},
	fit: {
		eyebrow: 'Fit guide',
		title: 'Is YSA Right for Your Child?',
		description: 'If several of these sound familiar, you are likely in the right place.',
		points: [
			{
				title: 'They crave depth, not busywork',
				description: 'They finish quickly, then disengage—or invent their own harder problems.',
			},
			{
				title: 'Asynchronous energy is real',
				description: 'Long focus bursts, irregular sleep, or travel shouldn’t mean sacrificing quality.',
			},
			{
				title: 'They need adults who “speak gifted”',
				description: 'Intensity, perfectionism, and asynchronous development feel normal here.',
			},
			{
				title: 'Friendship should be intellectual too',
				description: 'They want peers who share obsessions, not small talk.',
			},
		],
	},
	faq: {
		eyebrow: 'FAQ',
		title: 'Answers to Your Questions',
		description: 'Still unsure? These are the topics families ask about most on intro calls.',
		items: [
			{
				question: 'What ages and levels do you support?',
				answer:
					'We primarily serve elementary through early high school, with placement based on readiness—not birthday alone.',
			},
			{
				question: 'How do you handle 2e accommodations?',
				answer:
					'Mentors co-design scaffolds with families: extended time, alternative outputs, sensory-friendly options, and more.',
			},
			{
				question: 'Can we try a single course?',
				answer: 'Yes. Many families start with one subject block before expanding to a fuller schedule.',
			},
			{
				question: 'What is the time commitment?',
				answer:
					'Live blocks are compact; async work varies. Expect a clear weekly rhythm with flexibility built in.',
			},
		],
	},
	communityCta: {
		title: "Your Child's Brilliance Deserves a Community That Gets It",
		description:
			'Talk with our team about placement, scholarships, and the right first course—no pressure, just clarity.',
		primaryCta: { label: 'Book a call', href: '#' },
		secondaryCta: { label: 'Browse programs', href: '#' },
	},
};
