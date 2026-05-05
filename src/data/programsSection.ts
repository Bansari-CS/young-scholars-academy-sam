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
				'Hands-on experiments exploring physics, chemistry,and biology fundamentals through play',
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
				'Build games and animations with Scratch while learning computational thinking',
			ageLabel: 'Ages 6-8',
			category: { id: 'coding', label: 'Coding' },
			durationWeeks: 10,
			teacher: { name: 'Alex Martinez' },
			teacherPhotoKey: 'martinez',
			coverImageKey: 'coding',
		},
		{
			href: '#',
			title: 'Math Explorers',
			description:
				'Advanced problem-solving and pattern recognition for budding mathematicians',
			ageLabel: 'Ages 6-8',
			category: { id: 'math', label: 'Math' },
			durationWeeks: 12,
			teacher: { name: 'Dr. Sarah Chen' },
			teacherPhotoKey: 'chen',
			coverImageKey: 'math',
		},
		{
			href: '#',
			title: 'Little Engineers',
			description:
				'Design and build simple robots while learning engineering principles',
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
				'Develop creative writing skills through narrative building and character design',
			ageLabel: 'Ages 6-8',
			category: { id: 'writing', label: 'Writing' },
			durationWeeks: 10,
			teacher: { name: 'Lisa Thompson' },
			teacherPhotoKey: 'thompson',
			coverImageKey: 'writing',
		},
		{
			href: '#',
			title: 'Logic & Puzzles',
			description:
				'Sharpen reasoning skills with strategic games and brain teasers',
			ageLabel: 'Ages 6-8',
			category: { id: 'critical-thinking', label: 'Critical Thinking' },
			durationWeeks: 6,
			teacher: { name: 'Dr. James Lee' },
			teacherPhotoKey: 'lee',
			coverImageKey: 'critical-thinking',
		},
	],
	viewAllCta: { label: 'View All Programs', href: '#' },
};
