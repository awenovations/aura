import sass from 'sass';
import path from 'path';
import { fileURLToPath } from 'url';
import formattedVariables from './utils/formattedVariables.js';
import fileHeader from './utils/fileHeader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const globalCss = sass.compile(`${__dirname}/../globals.scss`).css;

console.log('sass', );

import { filteredTokens, matchDarkThemeToken, matchLightThemeToken } from './utils/tokenFilters.js';

const Theming = ({ dictionary, options, file }) => {
	const opts = options ?? {};
	const { outputReferences } = opts;
	const groupedTokens = {
		// if you export the prefixes use token.path[0] instead of [1]
		light: filteredTokens(dictionary, (token) => matchLightThemeToken(token)),
		dark: filteredTokens(dictionary, (token) => matchDarkThemeToken(token)),

		// Note: We don't export the dark & light versions of the tokens separately
		// - developers can refer to the primitive tokens instead.
		rest: filteredTokens(
			dictionary,
			(token) => !matchDarkThemeToken(token) && !matchLightThemeToken(token)
		)
	};

	// Note: replace strips out '-light-' and '-dark-' inside media queries
	// Remove "desktop" for typography (which only appears in the :root non-media-query section)
	return (
		fileHeader({ file }) +
		':root {\n' +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.rest,
			outputReferences
		}).replace(/desktop-/gm, '') +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.light,
			outputReferences
		}).replace(/--aura-/gm, '--aura-light-') +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.dark,
			outputReferences
		}).replace(/--aura-/gm, '--aura-dark-') +
		'\n}\n\n' +
		'@media (prefers-color-scheme: light) {\n' +
		' :root {\n' +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.light,
			outputReferences
		}).replace(/-light-/gm, '-') +
		'\n }\n}\n\n' +
		'@media (prefers-color-scheme: dark) {\n' +
		' :root {\n' +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.dark,
			outputReferences
		}).replace(/-dark-/gm, '-') +
		'\n }\n}\n\n' +
		'[data-theme="light"] {\n' +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.light,
			outputReferences
		}).replace(/-light-/gm, '-') +
		'\n}\n\n' +
		'[data-theme="dark"] {\n' +
		formattedVariables({
			format: 'css',
			dictionary: groupedTokens.dark,
			outputReferences
		}).replace(/-dark-/gm, '-') +
		'\n}\n\n' +
    globalCss
	);
};

export default Theming;
