// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://edgarvarela.org',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Lora',
			cssVariable: '--font-lora',
			fallbacks: ['Georgia', 'serif'],
			weights: [400, 700],
			styles: ['normal', 'italic'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-jetbrains',
			fallbacks: ['monospace'],
			weights: [400, 700],
		},
	],
});