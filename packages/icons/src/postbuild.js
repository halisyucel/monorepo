import fs from 'fs';

fs.unlinkSync('./src/index.ts');

const components = fs.readdirSync('./src/icons/');

for (const component of components) {
	if (component === 'IconProps.ts') continue;

	fs.unlinkSync(`./src/icons/${component}`)
}

