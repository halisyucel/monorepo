import { css } from '@emotion/css';
import * as type from './sx.types';
import { isIncludeSpace, isNegativeSpace } from './sx.utils';

const UILibraryPrefix: type.UILibraryPrefix = 'ui';

export type CSSProps = {
	fontSize?: type.FontSizeSx;
	fontWeight?: type.FontWeightSx;
	fontFamily?: type.FontFamilySx;

	textAlign?: type.TextAlignSx;
	textDecoration?: type.TextDecorationSx;
	textTransform?: type.TextTransformSx;
	textOverflow?: type.TextOverflowSx;

	borderRadius?: type.BorderRadiusSx;
	borderWidth?: type.BorderWidthSx;
	borderColor?: type.ColorSx;
	borderStyle?: type.BorderStyleSx;

	color?: type.ColorSx;
	backgroundColor?: type.ColorSx;

	m?: type.SpaceSx<'margin'>;
	mx?: type.SpaceSx<'margin'>;
	my?: type.SpaceSx<'margin'>;
	mt?: type.SpaceSx<'margin'>;
	ml?: type.SpaceSx<'margin'>;
	mr?: type.SpaceSx<'margin'>;
	mb?: type.SpaceSx<'margin'>;

	margin?: type.MarginSx;
	marginX?: type.MarginSx;
	marginY?: type.MarginSx;
	marginTop?: type.MarginSx;
	marginLeft?: type.MarginSx;
	marginRight?: type.MarginSx;
	marginBottom?: type.MarginSx;

	p?: type.SpaceSx<'padding'>;
	px?: type.SpaceSx<'padding'>;
	py?: type.SpaceSx<'padding'>;
	pt?: type.SpaceSx<'padding'>;
	pl?: type.SpaceSx<'padding'>;
	pr?: type.SpaceSx<'padding'>;
	pb?: type.SpaceSx<'padding'>;

	padding?: type.PaddingSx;
	paddingX?: type.PaddingSx;
	paddingY?: type.PaddingSx;
	paddingTop?: type.PaddingSx;
	paddingLeft?: type.PaddingSx;
	paddingRight?: type.PaddingSx;
	paddingBottom?: type.PaddingSx;

	gap?: type.GapSx;
	rowGap?: type.GapSx;
	columnGap?: type.GapSx;

	boxShadow?: type.BoxShadowSx;
	dropShadow?: type.DropShadowSx;
};

export type SxProps = CSSProps &
	Partial<
		Record<type.CSSPseudoClass | type.RawMediaQuery | type.MediaQuery, CSSProps>
	>;

function baseSx({
	fontSize,
	fontWeight,
	fontFamily,

	textAlign,
	textDecoration,
	textTransform,
	textOverflow,

	borderRadius,
	borderWidth,
	borderColor,
	borderStyle,

	color,
	backgroundColor,

	m,
	mx,
	my,
	mt,
	ml,
	mr,
	mb,

	margin,
	marginX,
	marginY,
	marginTop,
	marginLeft,
	marginRight,
	marginBottom,

	p,
	px,
	py,
	pt,
	pl,
	pr,
	pb,

	padding,
	paddingX,
	paddingY,
	paddingTop,
	paddingLeft,
	paddingRight,
	paddingBottom,

	gap,
	rowGap,
	columnGap,

	boxShadow,
	dropShadow,

	...otherProps
}: SxProps = {}): string[] {
	const emotion: string[] = [];

	if (fontSize) {
		if (type.FONT_SIZE.includes(fontSize as type.FontSize)) {
			emotion.push(
				`font-size: var(--${UILibraryPrefix}-fontSize-${fontSize});`,
			);
			emotion.push(
				`line-height: var(--${UILibraryPrefix}-lineHeight-${fontSize});`,
			);
		} else {
			emotion.push(`font-size: ${fontSize};`);
		}
	}

	if (fontWeight) {
		if (type.FONT_WEIGHT.includes(fontWeight as type.FontWeight)) {
			emotion.push(
				`font-weight: var(--${UILibraryPrefix}-fontWeight-${fontWeight});`,
			);
		} else {
			emotion.push(`font-weight: ${fontWeight};`);
		}
	}

	if (fontFamily) {
		if (type.FONT_FAMILY.includes(fontFamily as type.FontFamily)) {
			emotion.push(
				`font-family: var(--${UILibraryPrefix}-fontFamily-${fontFamily});`,
			);
		} else {
			emotion.push(`font-family: ${fontFamily};`);
		}
	}

	if (color) {
		if (type.COLOR.includes(color as type.Color)) {
			emotion.push(`color: var(--${UILibraryPrefix}-color-${color});`);
		} else {
			emotion.push(`color: ${color};`);
		}
	}

	if (backgroundColor) {
		if (type.COLOR.includes(backgroundColor as type.Color)) {
			emotion.push(
				`background-color: var(--${UILibraryPrefix}-color-${backgroundColor});`,
			);
		} else {
			emotion.push(`background-color: ${backgroundColor};`);
		}
	}

	if (borderColor) {
		if (type.COLOR.includes(borderColor as type.Color)) {
			emotion.push(
				`border-color: var(--${UILibraryPrefix}-color-${borderColor});`,
			);
		} else {
			emotion.push(`border-color: ${borderColor};`);
		}
	}

	if (textAlign) {
		if (type.TEXT_ALIGN.includes(textAlign as type.TextAlign)) {
			emotion.push(
				`text-align: var(--${UILibraryPrefix}-textAlign-${textAlign});`,
			);
		} else {
			emotion.push(`text-align: ${textAlign};`);
		}
	}

	if (textDecoration) {
		if (type.TEXT_DECORATION.includes(textDecoration as type.TextDecoration)) {
			emotion.push(
				`text-decoration: var(--${UILibraryPrefix}-textDecoration-${textDecoration});`,
			);
		} else {
			emotion.push(`text-decoration: ${textDecoration};`);
		}
	}

	if (textTransform) {
		if (type.TEXT_TRANSFORM.includes(textTransform as type.TextTransform)) {
			emotion.push(
				`text-transform: var(--${UILibraryPrefix}-textTransform-${textTransform});`,
			);
		} else {
			emotion.push(`text-transform: ${textTransform};`);
		}
	}

	if (textOverflow) {
		if (type.TEXT_OVERFLOW.includes(textOverflow as type.TextOverflow)) {
			emotion.push(
				`text-overflow: var(--${UILibraryPrefix}-textOverflow-${textOverflow});`,
			);
		} else {
			emotion.push(`text-overflow: ${textOverflow};`);
		}
	}

	if (borderRadius) {
		if (type.BORDER_RADIUS.includes(borderRadius as type.BorderRadius)) {
			emotion.push(
				`border-radius: var(--${UILibraryPrefix}-borderRadius-${borderRadius});`,
			);
		} else {
			emotion.push(`border-radius: ${borderRadius};`);
		}
	}

	if (borderWidth) {
		if (type.BORDER_WIDTH.includes(borderWidth as type.BorderWidth)) {
			emotion.push(
				`border-width: var(--${UILibraryPrefix}-borderWidth-${borderWidth});`,
			);
		} else {
			emotion.push(`border-width: ${borderWidth};`);
		}
	}

	if (borderStyle) {
		if (type.BORDER_STYLE.includes(borderStyle as type.BorderStyle)) {
			emotion.push(
				`border-style: var(--${UILibraryPrefix}-borderStyle-${borderStyle});`,
			);
		} else {
			emotion.push(`border-style: ${borderStyle};`);
		}
	}

	if (m) {
		if (isIncludeSpace<'margin'>(m)) {
			if (isNegativeSpace<'margin'>(m)) {
				emotion.push(
					`margin: calc(var(--${UILibraryPrefix}-space-${m.slice(1)}) * -1);`,
				);
			} else {
				emotion.push(`margin: var(--${UILibraryPrefix}-space-${m});`);
			}
		}
	}

	if (mx) {
		if (isIncludeSpace<'margin'>(mx)) {
			if (isNegativeSpace<'margin'>(mx)) {
				emotion.push(
					`margin-left: calc(var(--${UILibraryPrefix}-space-${mx.slice(
						1,
					)}) * -1);`,
				);
				emotion.push(
					`margin-right: calc(var(--${UILibraryPrefix}-space-${mx.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-left: var(--${UILibraryPrefix}-space-${mx});`);
				emotion.push(`margin-right: var(--${UILibraryPrefix}-space-${mx});`);
			}
		}
	}

	if (my) {
		if (isIncludeSpace<'margin'>(my)) {
			if (isNegativeSpace<'margin'>(my)) {
				emotion.push(
					`margin-top: calc(var(--${UILibraryPrefix}-space-${my.slice(
						1,
					)}) * -1);`,
				);
				emotion.push(
					`margin-bottom: calc(var(--${UILibraryPrefix}-space-${my.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-top: var(--${UILibraryPrefix}-space-${my});`);
				emotion.push(`margin-bottom: var(--${UILibraryPrefix}-space-${my});`);
			}
		}
	}

	if (mt) {
		if (isIncludeSpace<'margin'>(mt)) {
			if (isNegativeSpace<'margin'>(mt)) {
				emotion.push(
					`margin-top: calc(var(--${UILibraryPrefix}-space-${mt.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-top: var(--${UILibraryPrefix}-space-${mt});`);
			}
		}
	}

	if (ml) {
		if (isIncludeSpace<'margin'>(ml)) {
			if (isNegativeSpace<'margin'>(ml)) {
				emotion.push(
					`margin-left: calc(var(--${UILibraryPrefix}-space-${ml.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-left: var(--${UILibraryPrefix}-space-${ml});`);
			}
		}
	}

	if (mr) {
		if (isIncludeSpace<'margin'>(mr)) {
			if (isNegativeSpace<'margin'>(mr)) {
				emotion.push(
					`margin-right: calc(var(--${UILibraryPrefix}-space-${mr.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-right: var(--${UILibraryPrefix}-space-${mr});`);
			}
		}
	}

	if (mb) {
		if (isIncludeSpace<'margin'>(mb)) {
			if (isNegativeSpace<'margin'>(mb)) {
				emotion.push(
					`margin-bottom: calc(var(--${UILibraryPrefix}-space-${mb.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`margin-bottom: var(--${UILibraryPrefix}-space-${mb});`);
			}
		}
	}

	if (margin) {
		emotion.push(`margin: ${margin};`);
	}

	if (marginX) {
		emotion.push(`margin-left: ${marginX};`);
		emotion.push(`margin-right: ${marginX};`);
	}

	if (marginY) {
		emotion.push(`margin-top: ${marginY};`);
		emotion.push(`margin-bottom: ${marginY};`);
	}

	if (marginTop) {
		emotion.push(`margin-top: ${marginTop};`);
	}

	if (marginLeft) {
		emotion.push(`margin-left: ${marginLeft};`);
	}

	if (marginRight) {
		emotion.push(`margin-right: ${marginRight};`);
	}

	if (marginBottom) {
		emotion.push(`margin-bottom: ${marginBottom};`);
	}

	if (p) {
		if (isIncludeSpace<'padding'>(p)) {
			if (isNegativeSpace<'padding'>(p)) {
				emotion.push(
					`padding: calc(var(--${UILibraryPrefix}-space-${p.slice(1)}) * -1);`,
				);
			} else {
				emotion.push(`padding: var(--${UILibraryPrefix}-space-${p});`);
			}
		}
	}

	if (px) {
		if (isIncludeSpace<'padding'>(px)) {
			if (isNegativeSpace<'padding'>(px)) {
				emotion.push(
					`padding-left: calc(var(--${UILibraryPrefix}-space-${px.slice(
						1,
					)}) * -1);`,
				);
				emotion.push(
					`padding-right: calc(var(--${UILibraryPrefix}-space-${px.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-left: var(--${UILibraryPrefix}-space-${px});`);
				emotion.push(`padding-right: var(--${UILibraryPrefix}-space-${px});`);
			}
		}
	}

	if (py) {
		if (isIncludeSpace<'padding'>(py)) {
			if (isNegativeSpace<'padding'>(py)) {
				emotion.push(
					`padding-top: calc(var(--${UILibraryPrefix}-space-${py.slice(
						1,
					)}) * -1);`,
				);
				emotion.push(
					`padding-bottom: calc(var(--${UILibraryPrefix}-space-${py.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-top: var(--${UILibraryPrefix}-space-${py});`);
				emotion.push(`padding-bottom: var(--${UILibraryPrefix}-space-${py});`);
			}
		}
	}

	if (pt) {
		if (isIncludeSpace<'padding'>(pt)) {
			if (isNegativeSpace<'padding'>(pt)) {
				emotion.push(
					`padding-top: calc(var(--${UILibraryPrefix}-space-${pt.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-top: var(--${UILibraryPrefix}-space-${pt});`);
			}
		}
	}

	if (pl) {
		if (isIncludeSpace<'padding'>(pl)) {
			if (isNegativeSpace<'padding'>(pl)) {
				emotion.push(
					`padding-left: calc(var(--${UILibraryPrefix}-space-${pl.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-left: var(--${UILibraryPrefix}-space-${pl});`);
			}
		}
	}

	if (pr) {
		if (isIncludeSpace<'padding'>(pr)) {
			if (isNegativeSpace<'padding'>(pr)) {
				emotion.push(
					`padding-right: calc(var(--${UILibraryPrefix}-space-${pr.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-right: var(--${UILibraryPrefix}-space-${pr});`);
			}
		}
	}

	if (pb) {
		if (isIncludeSpace<'padding'>(pb)) {
			if (isNegativeSpace<'padding'>(pb)) {
				emotion.push(
					`padding-bottom: calc(var(--${UILibraryPrefix}-space-${pb.slice(
						1,
					)}) * -1);`,
				);
			} else {
				emotion.push(`padding-bottom: var(--${UILibraryPrefix}-space-${pb});`);
			}
		}
	}

	if (padding) {
		emotion.push(`padding: ${padding};`);
	}

	if (paddingX) {
		emotion.push(`padding-left: ${paddingX};`);
		emotion.push(`padding-right: ${paddingX};`);
	}

	if (paddingY) {
		emotion.push(`padding-top: ${paddingY};`);
		emotion.push(`padding-bottom: ${paddingY};`);
	}

	if (paddingTop) {
		emotion.push(`padding-top: ${paddingTop};`);
	}

	if (paddingLeft) {
		emotion.push(`padding-left: ${paddingLeft};`);
	}

	if (paddingRight) {
		emotion.push(`padding-right: ${paddingRight};`);
	}

	if (paddingBottom) {
		emotion.push(`padding-bottom: ${paddingBottom};`);
	}

	if (gap) {
		if (type.SPACE.includes(gap as type.Space)) {
			emotion.push(`gap: var(--${UILibraryPrefix}-space-${gap});`);
		} else {
			emotion.push(`gap: ${gap};`);
		}
	}

	if (rowGap) {
		if (type.SPACE.includes(rowGap as type.Space)) {
			emotion.push(`row-gap: var(--${UILibraryPrefix}-space-${rowGap});`);
		} else {
			emotion.push(`row-gap: ${rowGap};`);
		}
	}

	if (columnGap) {
		if (type.SPACE.includes(columnGap as type.Space)) {
			emotion.push(`column-gap: var(--${UILibraryPrefix}-space-${columnGap});`);
		} else {
			emotion.push(`column-gap: ${columnGap};`);
		}
	}

	if (boxShadow) {
		if (type.BOX_SHADOW.includes(boxShadow as type.BoxShadow)) {
			emotion.push(
				`box-shadow: var(--${UILibraryPrefix}-boxShadow-${boxShadow});`,
			);
		} else {
			emotion.push(`box-shadow: ${boxShadow};`);
		}
	}

	if (dropShadow) {
		emotion.push(`filter: var(--${UILibraryPrefix}-dropShadow-${dropShadow});`);
	}

	if (otherProps) {
		Object.entries(otherProps).forEach(([key, value]) => {
			const mediaRegExp = new RegExp(
				`^@media\\.(${Object.keys(type.MEDIA_QUERY).join('|')})\\.(${[
					'up',
					'down',
				].join('|')})$`,
			);

			if (mediaRegExp.test(key)) {
				const query = key.split('.')[1];
				const direction = key.split('.')[2];

				const size = type.MEDIA_QUERY[query as keyof typeof type.MEDIA_QUERY];

				emotion.push(
					`@media (${
						direction === 'up' ? 'min' : 'max'
					}-width: ${size}px) { ${baseSx(value)} }`,
				);
			}

			emotion.push(`${key} { ${baseSx(value)} }`);
		});
	}

	return emotion;
}

export default function sx(props: SxProps = {}): string {
	return css(baseSx(props));
}
