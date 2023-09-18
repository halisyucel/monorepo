import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
	title: 'Core/Miscellaneous/Box',
	component: Box,
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
	},
	parameters: {
		controls: {
			exclude: ['sx', 'elementRef'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		as: 'div',
		children: 'Lorem ipsum dolor sit amet',
	},
	render: (props) => <Box {...props} />,
};
