import * as CSS from 'csstype';

export type UILibraryPrefix = 'ui';

// font-size
export const FONT_SIZE = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type FontSizeCSSProp = 'font-size';
export type FontSizePropName = 'fontSize';
export type FontSize = (typeof FONT_SIZE)[number];
export type FontSizeSX =
	| FontSize
	| Omit<CSS.Property.FontSize<string>, FontSize>;
export type FontSizeClassName =
	`${UILibraryPrefix}-${FontSizePropName}-${FontSize}`;
export type FontSizeEmotion =
	`${FontSizeCSSProp}: ${CSS.Property.FontSize<string>};`;

// font-weight
export const FONT_WEIGHT = [
	'thin',
	'extralight',
	'light',
	'normal',
	'medium',
	'semibold',
	'bold',
	'extrabold',
	'black',
] as const;
export type FontWeightCSSProp = 'font-weight';
export type FontWeightPropName = 'fontWeight';
export type FontWeight = (typeof FONT_WEIGHT)[number];
export type FontWeightSX =
	| FontWeight
	| Omit<CSS.Property.FontWeight, FontWeight>;
export type FontWeightClassName =
	`${UILibraryPrefix}-${FontWeightPropName}-${FontWeight}`;
export type FontWeightEmotion =
	`${FontWeightCSSProp}: ${CSS.Property.FontWeight};`;

// font-family
export const FONT_FAMILY = ['sans', 'serif', 'mono'] as const;
export type FontFamilyCSSProp = 'font-family';
export type FontFamilyPropName = 'fontFamily';
export type FontFamily = (typeof FONT_FAMILY)[number];
export type FontFamilySX =
	| FontFamily
	| Omit<CSS.Property.FontFamily, FontFamily>;
export type FontFamilyClassName =
	`${UILibraryPrefix}-${FontFamilyPropName}-${FontFamily}`;
export type FontFamilyEmotion =
	`${FontFamilyCSSProp}: ${CSS.Property.FontFamily};`;

// colors
export const COLOR_LEVELS = [
	'50',
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900',
] as const;
export const BASIC_COLORS = [
	'white',
	'black',
	'transparent',
	'current',
	'inherit',
	'initial',
	'unset',
] as const;
export const BASE_COLORS = [
	'slate',
	'gray',
	'zinc',
	'neutral',
	'stone',
	'red',
	'orange',
	'amber',
	'yellow',
	'lime',
	'green',
	'emerald',
	'teal',
	'cyan',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose',
] as const;
export type BaseColor = (typeof BASE_COLORS)[number];
export type BasicColor = (typeof BASIC_COLORS)[number];
export type ColorWithLevel = `${BaseColor}-${(typeof COLOR_LEVELS)[number]}`;
export type ColorCSSProp = 'color';
export type ColorPropName = 'color';
export type Color = BaseColor | BasicColor | ColorWithLevel;
export type ColorSX = Color | Omit<CSS.Property.Color, Color>;
export type ColorClassName = `${UILibraryPrefix}-${ColorPropName}-${
	| BasicColor
	| ColorWithLevel}`;
export type ColorEmotion = `${ColorCSSProp}: ${CSS.Property.Color};`;

// text-align
export const TEXT_ALIGN = ['left', 'center', 'right', 'justify'] as const;
export type TextAlignCSSProp = 'text-align';
export type TextAlignPropName = 'textAlign';
export type TextAlign = (typeof TEXT_ALIGN)[number];
export type TextAlignSX = TextAlign | CSS.Property.TextAlign;
export type TextAlignClassName =
	`${UILibraryPrefix}-${TextAlignPropName}-${TextAlign}`;
export type TextAlignEmotion =
	`${TextAlignCSSProp}: ${CSS.Property.TextAlign};`;

// text-decoration
export const TEXT_DECORATION = ['underline', 'line-through', 'none'] as const;
export type TextDecorationCSSProp = 'text-decoration';
export type TextDecorationPropName = 'textDecoration';
export type TextDecoration = (typeof TEXT_DECORATION)[number];
export type TextDecorationSX =
	| TextDecoration
	| Omit<CSS.Property.TextDecoration, TextDecoration>;
export type TextDecorationClassName =
	`${UILibraryPrefix}-${TextDecorationPropName}-${TextDecoration}`;
export type TextDecorationEmotion =
	`${TextDecorationCSSProp}: ${CSS.Property.TextDecoration};`;

// text-transform
export const TEXT_TRANSFORM = ['uppercase', 'lowercase', 'capitalize'] as const;
export type TextTransformCSSProp = 'text-transform';
export type TextTransformPropName = 'textTransform';
export type TextTransform = (typeof TEXT_TRANSFORM)[number];
export type TextTransformSX = TextTransform | CSS.Property.TextTransform;
export type TextTransformClassName =
	`${UILibraryPrefix}-${TextTransformPropName}-${TextTransform}`;
export type TextTransformEmotion =
	`${TextTransformCSSProp}: ${CSS.Property.TextTransform};`;
