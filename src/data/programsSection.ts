import type { ProgramsSectionData } from '../types/programsSection';

export const programsSectionData: ProgramsSectionData = {
	eyebrow: 'Explore programs',
	title: 'Find the Perfect Program for Your Child',
	description:
		'Curated learning paths designed for different ages and learning goals',
	filters: {
		ageRange: {
			label: 'Age Range',
			options: [
				{ label: 'Ages 6-8', isActive: true },
				{ label: 'Ages 9-11' },
				{ label: 'Ages 12-14' },
				{ label: 'Ages 15+' },
			],
		},
		campType: {
			label: 'Camp Type',
			placeholder: 'Select Type (Virtual, Hybrid…)',
			options: [
				{ value: '', label: 'All Types' },
				{ value: 'virtual', label: 'Virtual' },
				{ value: 'in-person', label: 'In-Person' },
				{ value: 'hybrid', label: 'Hybrid' },
			],
		},
		teacher: {
			label: 'Teacher',
			placeholder: 'Choose Instructor',
			options: [
				{ value: '', label: 'Any instructor' },
				{ value: 'ross', label: 'Dr. Emily Ross' },
				{ value: 'martinez', label: 'Alex Martinez' },
				{ value: 'chen', label: 'Dr. Sarah Chen' },
				{ value: 'johnson', label: 'Marcus Johnson' },
				{ value: 'thompson', label: 'Lisa Thompson' },
				{ value: 'lee', label: 'Dr. James Lee' },
			],
		},
		clearLabel: 'Clear all filters',
	},
	cards: [
		{
			href: '#',
			title: 'Young Scientists Lab',
			description:
				'Hands-on experiments and scientific thinking for curious minds who want to see how the world works.',
			ageLabel: 'Ages 6-8',
			category: { id: 'science', label: 'Science' },
			durationWeeks: 8,
			teacher: { name: 'Dr. Emily Ross' },
			teacherPhotoKey: 'ross',
			coverImageKey: 'science',
		},
		{
			href: '#',
			title: 'Creative Coding Adventures',
			description:
				'Games, stories, and projects that make programming feel like play while building real skills.',
			ageLabel: 'Ages 6-8',
			category: { id: 'coding', label: 'Coding' },
			durationWeeks: 8,
			teacher: { name: 'Alex Martinez' },
			teacherPhotoKey: 'martinez',
			coverImageKey: 'coding',
		},
		{
			href: '#',
			title: 'Math Explorers',
			description:
				'Patterns, puzzles, and problem sets that reward intuition and speed without skipping foundations.',
			ageLabel: 'Ages 6-8',
			category: { id: 'math', label: 'Math' },
			durationWeeks: 8,
			teacher: { name: 'Dr. Sarah Chen' },
			teacherPhotoKey: 'chen',
			coverImageKey: 'math',
		},
		{
			href: '#',
			title: 'Little Engineers',
			description:
				'Build, test, and iterate with friendly robotics challenges designed for first-time makers.',
			ageLabel: 'Ages 6-8',
			category: { id: 'robotics', label: 'Robotics' },
			durationWeeks: 8,
			teacher: { name: 'Marcus Johnson' },
			teacherPhotoKey: 'johnson',
			coverImageKey: 'robotics',
		},
		{
			href: '#',
			title: 'Storytelling Masters',
			description:
				'Voice, structure, and revision in a workshop setting—perfect for kids who live in big ideas.',
			ageLabel: 'Ages 6-8',
			category: { id: 'writing', label: 'Writing' },
			durationWeeks: 8,
			teacher: { name: 'Lisa Thompson' },
			teacherPhotoKey: 'thompson',
			coverImageKey: 'writing',
		},
		{
			href: '#',
			title: 'Logic & Puzzles',
			description:
				'Strategic games and brain teasers that build reasoning habits without feeling like another worksheet.',
			ageLabel: 'Ages 6-8',
			category: { id: 'critical-thinking', label: 'Critical Thinking' },
			durationWeeks: 8,
			teacher: { name: 'Dr. James Lee' },
			teacherPhotoKey: 'lee',
			coverImageKey: 'critical-thinking',
		},
	],
	viewAllCta: { label: 'View All Programs', href: '#' },
};
