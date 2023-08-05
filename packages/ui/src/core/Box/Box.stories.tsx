import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box.tsx';

const meta: Meta<typeof Box> = {
	title: 'Layout/Box',
	component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		children: (
			<>
				+ What's in the box? <br />
				+ That's a simple &lt;div&gt; element
			</>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'This is the default box component',
			},
			source: {
				code: `<Box>Box</Box>`,
			}
		}
	},
	render: (props) => <Box {...props} />,
}