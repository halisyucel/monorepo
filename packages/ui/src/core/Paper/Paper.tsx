import cx from 'classnames';
import { ElementType } from 'react';
import {
	sx,
	Color,
	BoxShadow,
	BorderRadius,
	PolymorphicElementProps,
} from '../../system';

export interface PaperProps {
	radius?: BorderRadius;
	shadow?: BoxShadow;
	background?: Color;
	withBorder?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Paper<T extends ElementType<any> = 'div'>({
	// default props
	as,
	className,
	elementRef,
	sx: sxProps,

	// paper props
	shadow,
	radius = 'md',
	background = 'slate-50',
	withBorder,
	...otherProps
}: PolymorphicElementProps<T> & PaperProps) {
	const Component = as || 'div';

	return (
		<Component
			ref={elementRef}
			className={cx(
				sx({
					boxShadow: shadow,
					borderRadius: radius,
					backgroundColor: background,
					borderWidth: withBorder ? 'medium' : undefined,
					borderStyle: withBorder ? 'solid' : undefined,
					borderColor: withBorder ? 'gray-200' : undefined,
					...sxProps,
				}),
				className,
			)}
			{...otherProps}
		/>
	);
}
