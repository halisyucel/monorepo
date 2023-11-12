import { program } from 'commander';

program
	.option('--ui-path <path>', 'path to the ui package', 'packages/ui')
	.option(
		'--styles-path <path>',
		'path to the styles package',
		'packages/styles',
	)
	.option('--update-version', 'update version in package.json', false);

program.parse();

const options = program.opts();

console.log(options);
