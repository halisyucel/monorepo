import { ElementType } from 'react';
import {
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
import Box from '../Box';

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
}: PolymorphicElementProps<T, TextProps> & TextProps) {
	const Component = as || 'div';

	return (
		<Box
			as={Component}
			elementRef={elementRef}
			sx={{
				color,
				fontSize: size,
				textAlign: align,
				fontFamily: font,
				fontWeight: weight,
				textOverflow: overflow,
				textTransform: transform,
				textDecoration: decoration,
				...sxProps,
			}}
			{...otherProps}
		/>
	);
}
