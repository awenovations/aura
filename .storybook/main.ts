import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-svelte-csf',
			options: {
				legacyTemplate: true
			}
		},
		'@storybook/addon-themes'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: [
		{
			from: '../icons',
			to: '/icons'
		},
		{
			from: '../svgs',
			to: '/svgs'
		}
	]
};
export default config;
