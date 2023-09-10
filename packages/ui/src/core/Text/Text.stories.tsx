import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
	title: 'Core/Typography/Text',
	component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'this is a humble text',
	},
	render: (props) => <Text {...props} />,
};
