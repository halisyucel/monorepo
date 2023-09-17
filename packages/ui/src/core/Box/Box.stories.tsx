import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
	title: 'Core/Layout/Box',
	component: Box,
	argTypes: {
		as: {
			description: 'The HTML element or React component to render.',
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
			expanded: true,
			exclude: ['sx', 'elementRef'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		as: 'div',
		children: 'I am a humble polymorphic Box',
	},
	render: (props) => <Box {...props} />,
};
