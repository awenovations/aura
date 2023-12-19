/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

const defaultFormatting = {
	prefix: '',
	commentStyle: 'long',
	indentation: '',
	separator: ' =',
	suffix: ';'
};

function createPropertyNameFormatter(format, formatting = {}) {
	let { prefix, commentStyle, indentation, separator, suffix } = Object.assign(
		{},
		defaultFormatting,
		formatting
	);

	switch (format) {
		case 'css':
			prefix = '--aura-';
			indentation = '  ';
			separator = ':';
			break;
	}

	return {
		prefix,
		commentStyle,
		indentation,
		separator,
		suffix,
		formatName(prop) {
			return `${prefix}${prop.name}`;
		}
	};
}

/**
 * Creates a function that can be used to format a property. This can be useful
 * to use as the function on `dictionary.allTokens.map`. The formatting
 * is configurable either by supplying a `format` option or a `formatting` object
 * which uses: prefix, indentation, separator, suffix, and commentStyle.
 * @memberof module:formatHelpers
 * @example
 * ```javascript
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   formatter: function({ dictionary, options }) {
 *     const { outputReferences } = options;
 *     const formatProperty = createPropertyFormatter({
 *       outputReferences,
 *       dictionary,
 *       format: 'css'
 *     });
 *     return dictionary.allTokens.map(formatProperty).join('\n');
 *   }
 * });
 * ```
 * @param {Object} options
 * @param {Boolean} options.outputReferences - Whether or not to output references. You will want to pass this from the `options` object sent to the formatter function.
 * @param {Dictionary} options.dictionary - The dictionary object sent to the formatter function
 * @param {String} options.format - Available formats are: 'css', 'sass', 'less', and 'stylus'. If you want to customize the format and can't use one of those predefined formats, use the `formatting` option
 * @param {Object} options.formatting - Custom formatting properties that define parts of a declaration line in code. The configurable strings are: prefix, indentation, separator, suffix, and commentStyle. Those are used to generate a line like this: `${indentation}${prefix}${prop.name}${separator} ${prop.value}${suffix}`
 * @returns {Function}
 */
function createPropertyFormatter({ outputReferences, dictionary, format, formatting = {} }) {
	const { prefix, commentStyle, indentation, separator, suffix, formatName } =
		createPropertyNameFormatter(format, formatting);

	return function (prop) {
		let name = formatName(prop);
		let to_ret_prop = `${indentation}${name}${separator} `;
		let value = prop.value;
		let drop_shadow_props;

		if (format === 'tailwind' && prop.type === 'custom-shadow') {
			value = prop.value.boxShadow;
			drop_shadow_props = prop.value.dropShadow.map((v, i) => {
				return `${indentation}${name}-drop-shadow-${i + 1}${separator} ${v}${suffix}`;
			});
		}

		/**
		 * A single value can have multiple references either by interpolation:
		 * "value": "{size.border.width.value} solid {color.border.primary.value}"
		 * or if the value is an object:
		 * "value": {
		 *    "size": "{size.border.width.value}",
		 *    "style": "solid",
		 *    "color": "{color.border.primary.value"}
		 * }
		 * This will see if there are references and if there are, replace
		 * the resolved value with the reference's name.
		 */
		if (outputReferences && dictionary.usesReference(prop.original.value)) {
			// Formats that use this function expect `value` to be a string
			// or else you will get '[object Object]' in the output
			if (typeof value === 'string') {
				const refs = dictionary.getReferences(prop.original.value);
				refs.forEach((ref) => {
					// value should be a string that contains the resolved reference
					// because Style Dictionary resolved this in the resolution step.
					// Here we are undoing that by replacing the value with
					// the reference's name
					if (ref.value && ref.name) {
						value = value.replace(ref.value, function () {
							if (format === 'css') {
								return `var(${prefix}${ref.name})`;
							} else {
								return `${prefix}${ref.name}`;
							}
						});
					}
				});
			}
		}

		to_ret_prop += prop.attributes.category === 'asset' ? `"${value}"` : value;

		if (format == 'sass' && prop.themeable === true) {
			to_ret_prop += ' !default';
		}

		to_ret_prop += suffix;

		if (prop.comment && commentStyle !== 'none') {
			if (commentStyle === 'short') {
				to_ret_prop = to_ret_prop.concat(` // ${prop.comment}`);
			} else {
				to_ret_prop = to_ret_prop.concat(` /* ${prop.comment} */`);
			}
		}

		return drop_shadow_props ? [to_ret_prop, ...drop_shadow_props] : to_ret_prop;
	};
}

export { createPropertyFormatter, createPropertyNameFormatter };
