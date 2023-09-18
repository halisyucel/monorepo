import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
	title: 'Core/Typography/Text',
	component: Text,
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
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		size: 'sm',
		font: 'mono',
		weight: 'light',
		children:
			'Phasellus et arcu ultricies, gravida felis sit amet, imperdiet dui. Sed non dolor eget ligula cursus egestas. Nam nec eros sodales, accumsan est id, vulputate dolor. Pellentesque elit lorem, hendrerit euismod odio sit amet, tempor congue eros. Pellentesque mollis dapibus magna et dapibus. Nulla facilisi. Praesent tempor, nibh nec facilisis tempus, erat massa iaculis magna, eu volutpat massa ex fermentum justo. Donec quis aliquam diam, ut gravida magna. Nam porta egestas neque, ut commodo arcu feugiat at.',
	},
	render: (props) => <Text {...props} />,
};
