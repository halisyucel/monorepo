import { ElementType } from 'react';
import cx from 'classnames';
import {
	sx,
	Color,
	FontSize,
	TextAlign,
	FontWeight,
	FontFamily,
	TextOverflow,
	TextTransform,
	TextDecoration,
	PolymorphicElementProps,
} from '../../system';

export interface TextProps {
	size?: FontSize;
	font?: FontFamily;
	color?: Color;
	align?: TextAlign;
	weight?: FontWeight;
	overflow?: TextOverflow;
	transform?: TextTransform;
	decoration?: TextDecoration;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Text<T extends ElementType<any> = 'div'>({
	as,
	className,
	elementRef,
	sx: sxProps,

	size,
	font,
	color,
	align,
	weight,
	overflow,
	transform,
	decoration,
	...otherProps
}: PolymorphicElementProps<T> & TextProps) {
	const Component = as || 'div';

	return (
		<Component
			ref={elementRef}
			className={cx(
				sx({
					color,
					fontSize: size,
					textAlign: align,
					fontFamily: font,
					fontWeight: weight,
					textOverflow: overflow,
					textTransform: transform,
					textDecoration: decoration,
					...sxProps,
				}),
				className,
			)}
			{...otherProps}
		/>
	);
}
