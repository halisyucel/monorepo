import { css } from '@emotion/css';
import * as type from './types';

type EmotionCSS =
	| type.FontSizeEmotion
	| type.FontWeightEmotion
	| type.FontFamilyEmotion
	| type.ColorEmotion
	| type.TextAlignEmotion
	| type.TextDecorationEmotion
	| type.TextTransformEmotion;

type SxClassName =
	| type.FontSizeClassName
	| type.FontWeightClassName
	| type.FontFamilyClassName
	| type.ColorClassName
	| type.TextAlignClassName
	| type.TextDecorationClassName
	| type.TextTransformClassName;

export type SxProps = {
	fontSize?: type.FontSizeSX;
	fontWeight?: type.FontWeightSX;
	fontFamily?: type.FontFamilySX;

	textAlign?: type.TextAlignSX;
	textDecoration?: type.TextDecorationSX;
	textTransform?: type.TextTransformSX;

	color?: type.ColorSX;
};

export default function sx({
	fontSize,
	fontWeight,
	fontFamily,

	textAlign,
	textDecoration,
	textTransform,

	color,
}: SxProps = {}): string | null {
	const emotion: EmotionCSS[] = [];
	const classes: SxClassName[] = [];

	if (fontSize) {
		if (type.FONT_SIZE.includes(fontSize as type.FontSize)) {
			classes.push(`ui-fontSize-${fontSize as type.FontSize}`);
		} else {
			emotion.push(`font-size: ${fontSize};`);
		}
	}

	if (fontWeight) {
		if (type.FONT_WEIGHT.includes(fontWeight as type.FontWeight)) {
			classes.push(`ui-fontWeight-${fontWeight as type.FontWeight}`);
		} else {
			emotion.push(`font-weight: ${fontWeight};`);
		}
	}

	if (fontFamily) {
		if (type.FONT_FAMILY.includes(fontFamily as type.FontFamily)) {
			classes.push(`ui-fontFamily-${fontFamily as type.FontFamily}`);
		} else {
			emotion.push(`font-family: ${fontFamily};`);
		}
	}

	if (color) {
		if (type.BASIC_COLORS.includes(color as type.BasicColor)) {
			classes.push(`ui-color-${color as type.BasicColor}`);
		} else if (type.BASE_COLORS.includes(color as type.BaseColor)) {
			classes.push(`ui-color-${color as type.BaseColor}-500`);
		} else if (
			type.BASE_COLORS.flatMap((c) =>
				type.COLOR_LEVELS.map((l) => `${c}-${l}`),
			).includes(color as type.ColorWithLevel)
		) {
			classes.push(`ui-color-${color as type.ColorWithLevel}`);
		} else {
			emotion.push(`color: ${color};`);
		}
	}

	if (textAlign) {
		if (type.TEXT_ALIGN.includes(textAlign as type.TextAlign)) {
			classes.push(`ui-textAlign-${textAlign as type.TextAlign}`);
		} else {
			emotion.push(`text-align: ${textAlign};`);
		}
	}

	if (textDecoration) {
		if (type.TEXT_DECORATION.includes(textDecoration as type.TextDecoration)) {
			classes.push(
				`ui-textDecoration-${textDecoration as type.TextDecoration}`,
			);
		} else {
			emotion.push(`text-decoration: ${textDecoration};`);
		}
	}

	if (textTransform) {
		if (type.TEXT_TRANSFORM.includes(textTransform as type.TextTransform)) {
			classes.push(`ui-textTransform-${textTransform as type.TextTransform}`);
		} else {
			emotion.push(`text-transform: ${textTransform};`);
		}
	}

	const uiLibraryClasses = classes.length ? classes.join(' ') : '';
	const emotionClasses = emotion.length
		? css`
				${emotion.join('\n')}
		  `
		: '';

	if (!uiLibraryClasses && !emotionClasses) {
		return null;
	}

	return [uiLibraryClasses, emotionClasses].join(' ').trim();
}
