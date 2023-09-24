import fs from "fs";
import path from "path";

const upperCamelCase = (str) => {
  const words = str.split("-");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const INDEX_FILE_INITIAL_CONTENT = `export type { default as IconProps } from './icons/IconProps';\n\n`;
const INDEX_FILE_CONTENT = (component) =>
  `export { default as ${component} } from './icons/${component}';\n`;
const COMPONENT_CONTENT = (name, component) => `
import Content from '../assets/${name}.svg?react';
import type IconProps from './IconProps';

export default function ${component}({ size = 24, color = 'currentColor', stroke = 2 }: IconProps) {
	
	return(
		<Content strokeWidth={stroke} stroke={color} width={size} height={size} />
	);
}
`;

let index = INDEX_FILE_INITIAL_CONTENT;
const icons = fs.readdirSync("./src/assets/");

for (const icon of icons) {
  const name = path.basename(icon, ".svg");
  const component = `Icon${upperCamelCase(name)}`;

  index += INDEX_FILE_CONTENT(component);
  fs.writeFileSync(
    `./src/icons/${component}.tsx`,
    COMPONENT_CONTENT(name, component)
  );
}

fs.writeFileSync("./src/index.ts", index);
