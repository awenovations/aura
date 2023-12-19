import Layout from './global.svelte'
import type { Preview } from '@storybook/svelte';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
    layout: 'fullscreen',
		actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export const decorators = [
  () => Layout,
  withThemeByDataAttribute({
    themes: {
      system: 'system',
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'system',
    attributeName: 'data-theme'
  })
]

export default preview;
