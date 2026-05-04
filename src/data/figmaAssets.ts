/**
 * Figma MCP export URLs (short-lived). Replace with local assets for production longevity.
 * Source: Figma file c3rnrQgPGh0oRsryiX14Ln — Home frame nodes 1:3110, 1:3026, dashboard children.
 */
const A = 'https://www.figma.com/api/mcp/asset';

export const figmaHero = {
	avatar1: `${A}/db34cae8-ff6e-4ad1-8877-bc64c2913e60`,
	avatar2: `${A}/6ce6e3b7-55dc-4c94-959c-92ad89c872f2`,
	avatar3: `${A}/37aba40c-68ab-4a52-9daa-ba88450fd0dd`,
	ctaArrow: `${A}/17576483-c0c1-457a-a85e-9dea2e1cada8`,
	star: `${A}/f269dade-cc53-4ea2-b846-c4ff507d7e2d`,
} as const;

export const figmaDashboard = {
	student: `${A}/c94520f6-7257-4d5a-b0c5-38473f357c1d`,
	streakFlame: `${A}/5cf356ad-a020-4753-8e31-101ed87128c3`,
	statAccuracy: `${A}/0c3295ea-547d-4281-a917-42e26699e5b1`,
	statTrend: `${A}/469afe23-115c-49ca-8f3c-7759c7ccdb73`,
	statPoints: `${A}/71eddf4e-53c0-4e58-903f-83e29eb156d5`,
	statStudy: `${A}/3688a0ef-80e9-47e9-8a96-bf8feb529698`,
	sessionIcon: `${A}/3876a7f5-cabc-49cc-a9d4-6ba84623e499`,
} as const;

/** Why YSA / Methodology section (node 1:3432) */
export const figmaMethodology = {
	statPeople: `${A}/638a4ede-de48-42a6-8bed-9b3112ef84e1`,
	statCap: `${A}/96fd20ce-10f7-41dd-a62a-53401cf5de34`,
	statChart: `${A}/3a62998f-3467-448c-82c2-0129224d4ad9`,
	statHeart: `${A}/019d79c2-cc3b-45b5-92f6-139d27333fb7`,
	pMicroscope: `${A}/f8b68ac7-3380-4eb4-a834-e8dfb529c83b`,
	pPuzzle: `${A}/30074b64-4273-42bc-a10c-466c15269673`,
	pChat: `${A}/85257484-ccf7-4b6d-abee-91caab4ddde7`,
	pStar: `${A}/e35ef3a2-5686-43cc-8562-38beb2c3d474`,
	pHandshake: `${A}/97b7ac08-14cc-4c56-8667-13cbee25f007`,
	pShield: `${A}/4041082d-c567-4767-8de5-91c298a9083f`,
} as const;

export const figmaTrustStrip = {
	stanford: `${A}/433d22a1-cf41-4b93-a4a9-3305f2f1bf19`,
	nagc: `${A}/f1bbac46-f479-488b-bbed-147e4e348a97`,
	twoeVector: `${A}/a93098e1-930b-4fcd-b1c6-0f88bc212603`,
	seng: `${A}/a4e3310e-f9ac-4797-a219-f4a59b5fa92c`,
	hoagies: `${A}/a7d146eb-32ab-4f05-8803-e46d462581af`,
} as const;
