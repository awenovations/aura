import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconFilePath = `${__dirname}/../../icons`;

const files = fs.readdirSync(iconFilePath);

const icons = files
	.filter((file) => file.endsWith('.svg'))
	.map((file) => file.replace('.svg', ''))
	.map((icon) => {
		const iconArray = icon.split('-');
		const size = iconArray.pop();

		return {
			name: iconArray.join('-'),
			size
		};
	});

fs.writeFileSync(
	`${iconFilePath}/meta.json`,
	JSON.stringify({
		lastGenerated: Date.now(),
		icons
	})
);
