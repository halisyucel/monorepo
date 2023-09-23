import cx from 'classnames';
import { TablerIconsProps } from '@tabler/icons-react';
import { IconName } from './Icon.types';
import { Color, ElementProps, sx } from '../../system';

const icons = await import('@tabler/icons-react');

export interface IconProps {
	color?: Color;

	name: IconName;
	size?: TablerIconsProps['size'];
	stroke?: TablerIconsProps['stroke'];
	disabled?: boolean;
}

export default function Icon({
	name,
	size = 16,
	color,
	stroke = 2,
	disabled,

	sx: sxProps,
	className,
	...otherProps
}: Omit<ElementProps<'svg', IconProps>, 'children'>) {
	const TablerIcon = icons[`Icon${name}`];

	return (
		<TablerIcon
			size={size}
			stroke={stroke}
			className={cx(
				sx({
					color: disabled ? 'gray-400' : color,
					...sxProps,
				}),
				className,
			)}
			{...otherProps}
		/>
	);
}
