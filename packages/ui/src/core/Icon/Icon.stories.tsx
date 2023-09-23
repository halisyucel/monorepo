import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
	title: 'Core/Miscellaneous/Icon',
	component: Icon,
	argTypes: {},
	parameters: {
		controls: {
			exclude: ['sx', 'elementRef'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
	args: {},
	render: () => <Icon name="AlertHexagon" color="orange-500" />,
};
