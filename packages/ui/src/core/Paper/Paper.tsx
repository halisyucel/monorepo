import { ElementType } from 'react';
import {
	Color,
	BoxShadow,
	BorderRadius,
	PolymorphicElementProps,
} from '../../system';
import Box from '../Box';

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
	elementRef,
	sx: sxProps,

	// paper props
	shadow,
	radius = 'md',
	background = 'slate-50',
	withBorder,
	...otherProps
}: PolymorphicElementProps<T, PaperProps> & PaperProps) {
	const Component = as || 'div';

	return (
		<Box
			as={Component}
			elementRef={elementRef}
			sx={{
				boxShadow: shadow,
				borderRadius: radius,
				backgroundColor: background,
				borderWidth: withBorder ? 'medium' : undefined,
				borderStyle: withBorder ? 'solid' : undefined,
				borderColor: withBorder ? 'gray-200' : undefined,
				...sxProps,
			}}
			{...otherProps}
		/>
	);
}
