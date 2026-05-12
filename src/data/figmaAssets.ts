/**
 * Short-lived Figma MCP asset URLs — prefer local `/assets/...` or inline SVG in components.
 * `figmaHero` parent avatars use local images; dashboard streak/trend/session still reference MCP exports until replaced.
 */
const A = 'https://www.figma.com/api/mcp/asset';

export const figmaHero = {
	avatar1: '/assets/images/parent-1.jpg',
	avatar2: '/assets/images/Parent-2.jpg',
	avatar3: '/assets/images/Parent-3.jpg',
} as const;

export const figmaDashboard = {
	streakFlame: `${A}/5cf356ad-a020-4753-8e31-101ed87128c3`,
	statTrend: `${A}/469afe23-115c-49ca-8f3c-7759c7ccdb73`,
	sessionIcon: `${A}/3876a7f5-cabc-49cc-a9d4-6ba84623e499`,
} as const;
