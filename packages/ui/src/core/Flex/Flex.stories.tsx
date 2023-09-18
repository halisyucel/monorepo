import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';
import Box from '../Box';

const meta: Meta<typeof Flex> = {
	title: 'Core/Layout/Flex',
	component: Flex,
	parameters: {
		controls: {
			exclude: ['sx', 'elementRef', 'children'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
	args: {
		gap: 'md',
		children: Array.from({ length: 3 }).map((_, i) => (
			<Box
				key={Math.random()}
				sx={{
					px: 'sm',
					pt: '2xs',
					pb: '3xs',
					color: 'white',
					fontSize: 'sm',
					fontFamily: 'mono',
					backgroundColor: 'blue-500',
				}}
			>
				Item {i + 1}
			</Box>
		)),
	},
	render: (props) => <Flex {...props} />,
};
