export function slugifyHeading(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-');
}

export function extractOutlineFromMarkdown(body: string): Array<{ id: string; title: string }> {
	const matches = body.match(/^## (.+)$/gm) ?? [];

	return matches.map((line) => {
		const title = line.replace(/^## /, '').trim();
		return { id: slugifyHeading(title), title };
	});
}
