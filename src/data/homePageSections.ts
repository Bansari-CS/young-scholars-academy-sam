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
		columns: [
			{
				flow: 'up',
				cards: [
					{
						type: 'quote',
						rating: 5,
						quote: '"Seeing my daughter try new things... she just keeps growing into a more confident human every class."',
						author: { name: 'Rachel T.', meta: 'Parent, Elementary Student', avatarIndex: 1 },
					},
					{
						type: 'quote',
						rating: 5,
						quote: '"My daughter went from hating math to asking for extra problem sets. YSA reignited her love of learning."',
						author: { name: 'Jennifer M.', meta: 'Parent, Grade 5 Student', avatarIndex: 2 },
					},
					{
						type: 'video',
						rating: 5,
						quote: '"The classes are engaging and finally challenging enough for our child."',
						author: { name: 'Monica L.', meta: 'Parent, Grade 4 Student', avatarIndex: 3 },
						thumbnailIndex: 4,
					},
				],
			},
			{
				flow: 'down',
				cards: [
					{
						type: 'video',
						rating: 5,
						quote: '"We are so happy we found this special community... our son has thrived."',
						author: { name: 'Priya S.', meta: 'Parent, Grade 4 Student', avatarIndex: 5 },
						thumbnailIndex: 1,
					},
					{
						type: 'quote',
						rating: 5,
						quote: '"I have never seen teachers with more passion, energy, and support... They are truly the best!"',
						author: { name: 'Trinity L.', meta: 'Parent of Two Students', avatarIndex: 6 },
					},
					{
						type: 'quote',
						rating: 5,
						quote: '"Every week we see growth not just in academics, but confidence and communication too."',
						author: { name: 'Sonia R.', meta: 'Parent, Grade 6 Student', avatarIndex: 4 },
					},
				],
			},
			{
				flow: 'up',
				cards: [
					{
						type: 'quote',
						rating: 5,
						quote: '"Seeing my daughter try new things... she just keeps growing into a more confident human every class."',
						author: { name: 'Rachel T.', meta: 'Parent, Elementary Student', avatarIndex: 1 },
					},
					{
						type: 'video',
						rating: 5,
						quote: '"The transformation has been incredible. My son now actively participates and loves learning."',
						author: { name: 'David K.', meta: 'Parent, Grade 3 Student', avatarIndex: 3 },
						thumbnailIndex: 2,
					},
					{
						type: 'quote',
						rating: 5,
						quote: '"The individualized guidance helped our daughter find her spark again."',
						author: { name: 'Alicia P.', meta: 'Parent, Grade 7 Student', avatarIndex: 2 },
					},
				],
			},
		],
	},
	teachers: {
		eyebrow: 'EXPERT EDUCATORS',
		title: 'Learn from the Best',
		description:
			"Our teachers aren't just experts in their fields—they're passionate about gifted and neurodivergent education",
		cardCta: { label: 'Find Your Teacher', href: '#' },
		items: [
			{
				name: 'Dr. Emily Ross',
				credentials: 'PhD Chemistry, MIT',
				bio: '15 years teaching gifted learners. Specializes in hands-on science exploration.',
				photoIndex: 1,
			},
			{
				name: 'Alex Martinez',
				credentials: 'MS Computer Science, Stanford',
				bio: 'Former Google engineer. Makes coding accessible and fun for young learners.',
				photoIndex: 2,
			},
			{
				name: 'Dr. Sarah Chen',
				credentials: 'PhD Mathematics, Princeton',
				bio: 'Competition math coach. Passionate about problem-solving strategies.',
				photoIndex: 3,
			},
			{
				name: 'Marcus Johnson',
				credentials: 'MS Robotics, Carnegie Mellon',
				bio: 'Robotics competition mentor. Brings engineering concepts to life.',
				photoIndex: 4,
			},
		],
	},
	world: {
		eyebrow: 'EXPERT EDUCATORS',
		title: 'Our Kids Are All Around',
		titleLine2: 'the World',
		description:
			"From Tokyo to New York, our students are building the future. Join a global community of innovators, thinkers, and creators who are pushing the boundaries of what's possible.",
		stats: [
			{ value: '10,000+', label: 'Active Students' },
			{ value: '50+', label: 'Countries' },
			{ value: '24/7', label: 'Live Learning' },
			{ value: '150+', label: 'Master Mentors' },
		],
		regions: ['North America', 'Europe', 'Middle East', 'Asia Pacific', 'Latin America'],
	},
	fit: {
		eyebrow: 'FIND YOUR FIT',
		title: 'Is YSA Right for Your Child?',
		description: "We're not for everyone-and that's okay. Here's who thrives with us.",
		goodFit: {
			title: 'Great Fit If Your Child:',
			tone: 'good',
			items: [
				'Is gifted, twice-exceptional (2e), or neurodivergent',
				'Finishes schoolwork quickly and craves deeper challenges',
				'Feels isolated or "different" from peers',
				'Has intense curiosity about specific subjects',
				'Thrives with personalized attention and pacing',
				'Needs a safe space to take intellectual risks',
			],
		},
		notIdeal: {
			title: 'May Not Be Ideal If:',
			tone: 'warning',
			items: [
				'Your child prefers large group settings (we keep classes small)',
				"You're looking for passive video lessons (we're live and interactive)",
				'You need a full replacement for traditional school curriculum',
				'Your child needs significant remedial support (we focus on acceleration)',
			],
		},
		note: "Not sure if it's the right fit? Explore whether YSA is a great fit for your child-and see if it matches your family's needs.",
	},
	faq: {
		eyebrow: 'COMMON QUESTIONS',
		title: 'Answers to Your Questions',
		description: 'Everything you need to know before getting started',
		items: [
			{
				question: 'What makes YSA different from other online programs?',
				answer:
					'We specialize exclusively in gifted, 2e, and neurodivergent learners. Our teachers have advanced degrees and specialized training in these populations. We keep classes small (4:1 ratio), go deep rather than broad, and create emotionally safe intellectual communities.',
			},
			{
				question: 'How do I know which program is right for my child?',
				answer: 'We use a fit call and short placement process to match readiness, pace, and interests before enrollment.',
			},
			{
				question: "What's the time commitment?",
				answer: 'Most families start with 2-4 live sessions per week, with optional projects and enrichment work between classes.',
			},
			{
				question: 'My child has ADHD/dyslexia/autism. Will they succeed here?',
				answer: 'Yes. We are intentionally built for neurodivergent learners and adapt pacing, modality, and support to each child.',
			},
			{
				question: 'What technology do we need?',
				answer: 'A reliable internet connection, a laptop/desktop with camera and mic, and a quiet learning space are enough to start.',
			},
			{
				question: "Can I get a refund if it's not a good fit?",
				answer: 'We offer transparent policy options and support families in finding the right plan during onboarding.',
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
