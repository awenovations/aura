import StyleDictionary from 'style-dictionary-utils';
import Theming from './theming.js';

const notDefault = (value, defaultValue) => (value !== defaultValue ? value : '');

const fontFamily = ({ fontFamily }, { fontFamilies } = {}) =>
	fontFamilies && fontFamilies[fontFamily] ? fontFamilies[fontFamily] : fontFamily;

StyleDictionary.registerTransform({
	name: 'web/font',
	type: 'value',
	matcher: function (token) {
		return token.type === 'custom-fontStyle';
	},
	transformer: function ({ value: font }, { options }) {
		// font: font-style font-variant font-weight font-size/line-height font-family;
		return `${notDefault(font.fontStretch, 'normal')} ${notDefault(font.fontStyle, 'normal')} ${
			font.fontWeight
		} ${font.fontSize}px/${font.lineHeight}px ${fontFamily(font, options)}`.trim();
	}
});

StyleDictionary.registerTransform({
	name: 'dimensionToPixel',
	type: `value`,
	transitive: true,
	matcher: (token) => token?.$type === 'dimension' || token?.type === 'dimension',
	transformer: (token, platform) => {
		const floatVal = parseFloat(token.value);

		if (isNaN(floatVal)) {
			throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to rem \n`;
		}

		if (floatVal === 0) {
			return '0';
		}

		return `${floatVal}px`;
	}
});

StyleDictionary.registerFormat({
	name: 'custom/css',
	formatter: Theming
});

const StyleDictionaryExtended = StyleDictionary.extend({
	source: ['src/tokens/*.json'],
	platforms: {
		css: {
			transformGroup: 'css/extended',
			transforms: ['dimensionToPixel', 'web/font'],
			buildPath: 'tokens/',
			files: [
				{
					destination: '_variables.css',
					format: 'custom/css'
				}
			]
		}
	}
});

StyleDictionaryExtended.buildAllPlatforms();
