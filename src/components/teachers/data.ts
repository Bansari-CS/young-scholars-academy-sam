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
	searchIconUrl: 'https://www.figma.com/api/mcp/asset/fc8c7bf8-6fc3-4ade-a950-e067da75bde3',
	starIconUrl: 'https://www.figma.com/api/mcp/asset/450b0d88-c24b-4005-aba2-5d64068dcdf0',
	checkIconUrl: 'https://www.figma.com/api/mcp/asset/9bad4fb4-ab6b-4787-8df1-2905fcb96bc2',
	arrowIconUrl: 'https://www.figma.com/api/mcp/asset/979f3fcd-d94f-4306-b995-05f83b57b874',
	parentAvatarUrl: 'https://www.figma.com/api/mcp/asset/98f54c72-65dd-4ea8-8e15-362f2a15062e',
	adminStarIconUrl: 'https://www.figma.com/api/mcp/asset/5942b6a5-f86a-4038-8774-e89c4ef8312e',
	mentorFitArrowIconUrl: 'https://www.figma.com/api/mcp/asset/03f0aca1-eea7-42b9-9aed-3d52106216c8',
} as const;

export const toneClasses = {
	blue: 'bg-[#e1f3ff] text-[#0a9dfb]',
	violet: 'bg-[#decbfe] text-[#7c3aed]',
	green: 'bg-[#dff8e9] text-[#048c3c]',
	amber: 'bg-[#fffbeb] text-[#a16207]',
} as const;

export const parentLoveCards = [
	{
		iconUrl: 'https://www.figma.com/api/mcp/asset/004234ac-85b3-4eed-9851-1fac489f27fa',
		title: 'Hand-Selected Excellence',
		description:
			'Every mentor is carefully vetted, not just for expertise — but for empathy, creativity, and ability to connect.',
	},
	{
		iconUrl: 'https://www.figma.com/api/mcp/asset/02f7f3c1-77ee-4f45-af42-7519426f65db',
		title: 'Parents’ #1 Reason for Returning',
		description: 'Families consistently say our teachers are the biggest reason they continue with us.',
	},
	{
		iconUrl: 'https://www.figma.com/api/mcp/asset/36e1805b-6fca-4564-a697-2cb402cdf131',
		title: 'Trained for Gifted & 2e Minds',
		description: 'Our mentors are specifically trained to work with advanced and neurodivergent learners.',
	},
	{
		iconUrl: 'https://www.figma.com/api/mcp/asset/149ac3a1-5736-4788-a3c4-a14561d6a7c8',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/4c469864-dc5b-4e45-b5f5-1dee72307efb',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/53708873-6131-4b79-b1ee-22b511167a1d',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/d0e7914f-c4eb-4a01-b58d-677c8803774b',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/07efef25-059f-4710-86f8-75196ab58cc5',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/a2a17720-6c50-4a87-a37c-d59d4f353231',
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
		imageUrl: 'https://www.figma.com/api/mcp/asset/2ca59341-ab3f-412a-a28b-f51955dd5f7f',
	},
];

export const adminTeam = [
	{
		name: 'Ann Rickard',
		rating: '5.0',
		role: 'Community Director',
		description:
			'Ann is a homeschooling mom who worked for 11 years as an Instructional Aide for the Resource Specialist Program at Evans Elementary School in Garden Grove, CA. Her diverse background in education, team management and outside of the box thinking make her an integral part of Team YSA.',
		imageUrl: 'https://www.figma.com/api/mcp/asset/a22bf4ea-ea9d-43fe-ab1d-a68631577187',
	},
	{
		name: 'Mr. Sam',
		rating: '5.0',
		role: 'Head of School',
		description:
			'Mr. Sam, MEd, is a growth-minded, two-time Fulbright Scholar, TEDx speaker, and Director of Young Scholars Academy! Mr. Sam is a neurodivergent educator who has ADHD. As an ADHD learner, he has committed his life to empower young people to learn to develop their superpowers and lead meaningful and fulfilling lives through strength-based education.',
		imageUrl: 'https://www.figma.com/api/mcp/asset/0d16ebba-b6ae-4684-9218-5c780ddaf2ff',
	},
];
