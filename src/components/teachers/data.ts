export type MentorCard = {
	name: string;
	rating: string;
	credentials: string;
	bio: string[];
	tags: { label: string; tone: 'blue' | 'violet' | 'green' | 'amber' }[];
	facts: string[];
	featured?: boolean;
	imageUrl: string;
};

export const teacherPageAssets = {
	searchIconUrl: '/assets/teachers/search-icon.svg',
	starIconUrl: '/assets/teachers/star-icon.svg',
	checkIconUrl: '/assets/teachers/check-icon.svg',
	arrowIconUrl: '/assets/teachers/arrow-icon.svg',
	parentAvatarUrl: '/assets/teachers/parent-avatar.jpg',
	adminStarIconUrl: '/assets/teachers/admin-star-icon.svg',
	mentorFitArrowIconUrl: '/assets/teachers/mentor-fit-arrow-icon.svg',
	parentTestimonialStarIconUrl: '/assets/teachers/parent-testimonial-star.svg',
	quoteIconUrl: '/assets/teachers/quote-icon.svg',
} as const;

export const toneClasses = {
	blue: 'bg-[#e1f3ff] text-[#0a9dfb]',
	violet: 'bg-[#decbfe] text-[#7c3aed]',
	green: 'bg-[#dff8e9] text-[#048c3c]',
	amber: 'bg-[#fffbeb] text-[#a16207]',
} as const;

export const parentLoveCards = [
	{
		iconUrl: '/assets/teachers/parent-love-icon-1.svg',
		title: 'Hand-Selected Excellence',
		description:
			'Every mentor is carefully vetted, not just for expertise — but for empathy, creativity, and ability to connect.',
	},
	{
		iconUrl: '/assets/teachers/parent-love-icon-2.svg',
		title: 'Parents’ #1 Reason for Returning',
		description: 'Families consistently say our teachers are the biggest reason they continue with us.',
	},
	{
		iconUrl: '/assets/teachers/parent-love-icon-3.svg',
		title: 'Trained for Gifted & 2e Minds',
		description: 'Our mentors are specifically trained to work with advanced and neurodivergent learners.',
	},
	{
		iconUrl: '/assets/teachers/parent-love-icon-4.svg',
		title: 'Personal, Not Just Professional',
		description:
			'Many of our teachers were gifted students themselves — they truly understand your child.',
	},
];

export const mentors: MentorCard[] = [
	{
		name: 'Dr. Emily Ross',
		rating: '4.9',
		credentials: 'PhD Chemistry, MIT',
		bio: ['Helping brilliant minds find patterns', 'in the chaos of science.'],
		tags: [
			{ label: 'Chemistry', tone: 'blue' },
			{ label: 'Mastery', tone: 'violet' },
		],
		facts: ['5+ years experience', 'Loved by 200+ students'],
		imageUrl: '/assets/teachers/mentor-emily-1.jpg',
	},
	{
		name: 'Alex Martinez',
		rating: '5.0',
		credentials: 'MS Computer Science, Stanford',
		bio: ['Ex-Google engineer turning', 'complex code into creative play.'],
		tags: [
			{ label: 'Coding', tone: 'blue' },
			{ label: 'Gaming', tone: 'green' },
		],
		facts: ['8+ years experience', 'Top-rated mentor'],
		imageUrl: '/assets/teachers/mentor-alex-1.jpg',
	},
	{
		name: 'Dr. Sarah Chen',
		rating: '4.9',
		credentials: 'PhD Mathematics, Princeton',
		bio: ['Making math a language for', "solving the world's puzzles."],
		tags: [
			{ label: 'Advanced Math', tone: 'blue' },
			{ label: 'Debate', tone: 'amber' },
		],
		facts: ['10+ years experience', 'Loved by 500+ students'],
		featured: true,
		imageUrl: '/assets/teachers/mentor-sarah-1.jpg',
	},
	{
		name: 'Alex Martinez',
		rating: '5.0',
		credentials: 'MS Computer Science, Stanford',
		bio: ['Ex-Google engineer turning', 'complex code into creative play.'],
		tags: [
			{ label: 'Coding', tone: 'blue' },
			{ label: 'Gaming', tone: 'green' },
		],
		facts: ['8+ years experience', 'Top-rated mentor'],
		imageUrl: '/assets/teachers/mentor-alex-2.jpg',
	},
	{
		name: 'Dr. Sarah Chen',
		rating: '4.9',
		credentials: 'PhD Mathematics, Princeton',
		bio: ['Making math a language for', "solving the world's puzzles."],
		tags: [
			{ label: 'Advanced Math', tone: 'blue' },
			{ label: 'Debate', tone: 'amber' },
		],
		facts: ['10+ years experience', 'Loved by 500+ students'],
		featured: true,
		imageUrl: '/assets/teachers/mentor-sarah-2.jpg',
	},
	{
		name: 'Marcus Johnson',
		rating: '4.8',
		credentials: 'MS Robotics, Carnegie Mellon',
		bio: ['Master of mechanical wonders and', 'neurodivergent advocacy.'],
		tags: [
			{ label: 'Robotics', tone: 'blue' },
			{ label: 'Life Skills', tone: 'violet' },
		],
		facts: ['6+ years experience', 'Loved by 150+ students'],
		imageUrl: '/assets/teachers/mentor-marcus.jpg',
	},
];

export const adminTeam = [
	{
		name: 'Ann Rickard',
		rating: '5.0',
		role: 'Community Director',
		description:
			'Ann is a homeschooling mom who worked for 11 years as an Instructional Aide for the Resource Specialist Program at Evans Elementary School in Garden Grove, CA. Her diverse background in education, team management and outside of the box thinking make her an integral part of Team YSA.',
		imageUrl: '/assets/teachers/admin-ann.png',
	},
	{
		name: 'Mr. Sam',
		rating: '5.0',
		role: 'Head of School',
		description:
			'Mr. Sam, MEd, is a growth-minded, two-time Fulbright Scholar, TEDx speaker, and Director of Young Scholars Academy! Mr. Sam is a neurodivergent educator who has ADHD. As an ADHD learner, he has committed his life to empower young people to learn to develop their superpowers and lead meaningful and fulfilling lives through strength-based education.',
		imageUrl: '/assets/teachers/admin-sam.png',
	},
];

export const parentTestimonials = [
	{
		quote:
			"Finding YSA was a turning point for our son. For the first time, he’s in a space where his 'intensity' is seen as a superpower, not a problem. The mentors truly 'get' him.",
		name: 'Jennifer M.',
		role: 'Parent of a 9-year-old scholar',
		imageUrl: '/assets/teachers/parent-testimonial-jennifer.jpg',
	},
	{
		quote:
			"The Chemistry program didn't just teach my daughter facts; it ignited a passion. Dr. Emily Ross has this incredible way of making complex topics feel like a thrilling mystery to solve.",
		name: 'David K.',
		role: 'Parent of an 11-year-old scholar',
		imageUrl: '/assets/teachers/parent-testimonial-david.jpg',
		featured: true,
	},
	{
		quote:
			"We've tried countless online courses, but nothing compares to the community here. The small class sizes mean my child isn't just a face on a screen-they're a valued member of a team.",
		name: 'Michelle T.',
		role: 'Parent of a 14-year-old scholar',
		imageUrl: '/assets/teachers/parent-testimonial-michelle.jpg',
	},
];
