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
		withBorder: true,
		background: 'slate-50',
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum sit amet massa aliquet mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ornare aliquam porta. Fusce malesuada mauris lacus, vitae dictum orci placerat quis. Duis venenatis quis magna quis aliquam. Nunc aliquet metus id diam egestas lobortis. Donec interdum magna nec dictum auctor. Pellentesque efficitur quam massa, at cursus lorem tristique vitae. Suspendisse vitae mattis ligula. Pellentesque sagittis pulvinar est, non aliquet erat.',
	},
	render: (props) => (
		<Paper sx={{ p: 'lg', fontSize: 'sm', color: 'gray-700' }} {...props} />
	),
};
