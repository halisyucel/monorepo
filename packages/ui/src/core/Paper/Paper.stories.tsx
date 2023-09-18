import type { Meta, StoryObj } from '@storybook/react';

import Paper from './Paper';

const meta: Meta<typeof Paper> = {
	title: 'Core/Miscellaneous/Paper',
	component: Paper,
	argTypes: {
		as: {
			options: [
				'p',
				'div',
				'span',
				'article',
				'section',
				'aside',
				'header',
				'footer',
				'nav',
				'main',
			],
			control: {
				type: 'select',
			},
		},
		shadow: {
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'],
			control: {
				type: 'select',
			},
		},
	},
	parameters: {
		controls: {
			exclude: ['sx', 'elementRef'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
	args: {
		as: 'div',
		radius: 'md',
		children: 'Hello World',
		withBorder: true,
		background: 'slate-50',
	},
	render: (props) => <Paper sx={{ p: 'lg', fontSize: 'sm' }} {...props} />,
};
