// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	markdown: {
		rehypePlugins: [rehypeSlug],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
