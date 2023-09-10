import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
	title: 'Core/Layout/Box',
	component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		as: 'div',
		children: 'Box',
	},
	render: (props) => (
		<Box
			sx={{
				color: 'amber',
				fontSize: '1.5rem',
				fontWeight: 'bold',
				fontFamily: 'mono',
			}}
			{...props}
		/>
	),
};
