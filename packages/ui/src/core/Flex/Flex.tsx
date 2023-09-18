import {
	AlignItems,
	ElementProps,
	FlexDirection,
	FlexWrap,
	Gap,
	JustifyContent,
} from '../../system';
import Box from '../Box';

export interface FlexProps {
	gap?: Gap;
	rowGap?: Gap;
	columnGap?: Gap;

	wrap?: FlexWrap;
	align?: AlignItems;
	justify?: JustifyContent;
	direction?: FlexDirection;
}

export default function Flex({
	gap,
	rowGap,
	columnGap,

	wrap,
	align,
	justify,
	direction,

	sx: sxProps,
	...otherProps
}: ElementProps<'div', FlexProps>) {
	return (
		<Box
			as="div"
			sx={{
				display: 'flex',
				flexWrap: wrap,
				alignItems: align,
				justifyContent: justify,
				flexDirection: direction,
				gap,
				rowGap,
				columnGap,
				...sxProps,
			}}
			{...otherProps}
		/>
	);
}
