import React from 'react';

// ui library prefix
export type UILibraryPrefix = 'ui';

// css events
export type CSSPseudoClass = `&:${
	| 'active'
	| 'checked'
	| 'disabled'
	| 'empty'
	| 'enabled'
	| 'first-child'
	| 'first-of-type'
	| 'focus'
	| 'hover'
	| 'in-range'
	| 'invalid'
	| `lang(${string})`
	| 'last-child'
	| 'last-of-type'
	| 'link'
	| `not(${string})`
	| `nth-child(${number})`
	| `nth-last-child(${number})`
	| `nth-last-of-type(${number})`
	| `nth-of-type(${number})`
	| 'only-of-type'
	| 'only-child'
	| 'optional'
	| 'out-of-range'
	| 'read-only'
	| 'read-write'
	| 'required'
	| 'root'
	| 'target'
	| 'valid'
	| 'visited'}`;

// css media queries
export type RawMediaQuery =
	| `@media (min-width: ${number}px)`
	| `@media (max-width: ${number}px)`
	| `@media (min-width: ${number}px) and (max-width: ${number}px)`;

// defined css media queries
export const MEDIA_QUERY = {
	// breakpoints
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	'2xl': 1400,
};
export type MediaQuery = `@media.${keyof typeof MEDIA_QUERY}.${'up' | 'down'}`;

// font-size
export const FONT_SIZE = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type FontSize = (typeof FONT_SIZE)[number];
export type FontSizeSx = FontSize | React.CSSProperties['fontSize'];

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
export type FontWeight = (typeof FONT_WEIGHT)[number];
export type FontWeightSx = FontWeight | React.CSSProperties['fontWeight'];

// font-family
export const FONT_FAMILY = ['sans', 'serif', 'mono'] as const;
export type FontFamily = (typeof FONT_FAMILY)[number];
export type FontFamilySx = FontFamily | React.CSSProperties['fontFamily'];

// colors
const BASIC_COLOR = [
	'white',
	'black',
	'transparent',
	'current',
	'inherit',
	'initial',
	'unset',
] as const;
const BASE_COLOR = [
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
export const COLOR = [
	...BASIC_COLOR,
	...BASE_COLOR,
	...BASE_COLOR.flatMap((c) =>
		['50', ...Array.from({ length: 9 }, (_, i) => `${i + 1}00`), '950'].map(
			(s) => `${c}-${s}`,
		),
	),
] as const;
export type Color =
	| (typeof BASIC_COLOR)[number]
	| `${(typeof BASE_COLOR)[number]}`
	| `${(typeof BASE_COLOR)[number]}-${
			| '50'
			| '100'
			| '200'
			| '300'
			| '400'
			| '500'
			| '600'
			| '700'
			| '800'
			| '900'
			| '950'}`;
export type ColorSx = Color | React.CSSProperties['color'];

// text-align
export const TEXT_ALIGN = ['left', 'center', 'right', 'justify'] as const;
export type TextAlign = (typeof TEXT_ALIGN)[number];
export type TextAlignSx = TextAlign | React.CSSProperties['textAlign'];

// text-decoration
export const TEXT_DECORATION = ['underline', 'line-through', 'none'] as const;
export type TextDecoration = (typeof TEXT_DECORATION)[number];
export type TextDecorationSx =
	| TextDecoration
	| React.CSSProperties['textDecoration'];

// text-transform
export const TEXT_TRANSFORM = ['uppercase', 'lowercase', 'capitalize'] as const;
export type TextTransform = (typeof TEXT_TRANSFORM)[number];
export type TextTransformSx =
	| TextTransform
	| React.CSSProperties['textTransform'];

// text-overflow
export const TEXT_OVERFLOW = ['ellipsis', 'clip', 'none'] as const;
export type TextOverflow = (typeof TEXT_OVERFLOW)[number];
export type TextOverflowSx = TextOverflow | React.CSSProperties['textOverflow'];

// border-radius
export const BORDER_RADIUS = [
	'none',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'full',
] as const;
export type BorderRadius = (typeof BORDER_RADIUS)[number];
export type BorderRadiusSx = BorderRadius | React.CSSProperties['borderRadius'];

// border-width
export const BORDER_WIDTH = ['none', 'thin', 'medium', 'thick'] as const;
export type BorderWidth = (typeof BORDER_WIDTH)[number];
export type BorderWidthSx = BorderWidth | React.CSSProperties['borderWidth'];

// border-style
export const BORDER_STYLE = [
	'solid',
	'dashed',
	'dotted',
	'double',
	'none',
] as const;
export type BorderStyle = (typeof BORDER_STYLE)[number];
export type BorderStyleSx = BorderStyle | React.CSSProperties['borderStyle'];

// space
export const SPACE = [
	'none',
	'4xs',
	'3xs',
	'2xs',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
] as const;
export type Space = (typeof SPACE)[number];
export type SpaceSx<T extends 'margin' | 'padding' | 'gap'> = T extends 'margin'
	? Space | `-${Space}`
	: Space;

// margin
export type MarginSx = React.CSSProperties['margin'];

// padding
export type PaddingSx = React.CSSProperties['padding'];

// gap
export type Gap = SpaceSx<'gap'>;
export type GapSx = Gap | React.CSSProperties['gap'];

// drop-shadow
export const DROP_SHADOW = [
	'none',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
] as const;
export type DropShadow = (typeof DROP_SHADOW)[number];
export type DropShadowSx = DropShadow;

// box-shadow
export const BOX_SHADOW = [
	'none',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'inner',
] as const;
export type BoxShadow = (typeof BOX_SHADOW)[number];
export type BoxShadowSx = BoxShadow | React.CSSProperties['boxShadow'];

// box-sizing
export type BoxSizingSx = React.CSSProperties['boxSizing'];

// outline-width
export const OUTLINE_WIDTH = ['thin', 'medium', 'thick'] as const;
export type OutlineWidth = (typeof OUTLINE_WIDTH)[number];
export type OutlineWidthSx = OutlineWidth | React.CSSProperties['outlineWidth'];

// outline-style
export const OUTLINE_STYLE = ['solid', 'dashed', 'dotted', 'double'] as const;
export type OutlineStyle = (typeof OUTLINE_STYLE)[number];
export type OutlineStyleSx = OutlineStyle | React.CSSProperties['outlineStyle'];

// outline-offset
export const OUTLINE_OFFSET = ['none', 'sm', 'md', 'lg'] as const;
export type OutlineOffset = (typeof OUTLINE_OFFSET)[number];
export type OutlineOffsetSx =
	| OutlineOffset
	| React.CSSProperties['outlineOffset'];

// justify-content
export type JustifyContent =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';
export type JustifyContentSx =
	| JustifyContent
	| React.CSSProperties['justifyContent'];

// align-items
export type AlignItems =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'baseline'
	| 'stretch';
export type AlignItemsSx = AlignItems | React.CSSProperties['alignItems'];

// flex-direction
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexDirectionSx =
	| FlexDirection
	| React.CSSProperties['flexDirection'];

// flex-wrap
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexWrapSx = FlexWrap | React.CSSProperties['flexWrap'];

// display
export type Display =
	| 'block'
	| 'inline'
	| 'inline-block'
	| 'flex'
	| 'inline-flex'
	| 'grid'
	| 'inline-grid'
	| 'none';
export type DisplaySx = Display | React.CSSProperties['display'];

// flex
export type Flex = '1' | 'auto' | 'initial' | 'none';
export type FlexSx = Flex | React.CSSProperties['flex'];

// flex-grow
export type FlexGrow = '0' | '1' | '2' | '3' | '4' | '5';
export type FlexGrowSx = FlexGrow | React.CSSProperties['flexGrow'];

// opacity

// width

// min-width

// max-width

// height

// min-height

// max-height

// box-sizing

// overflow

// overflow-x

// overflow-y

// position

// top

// right

// bottom

// left

// z-index

// background

// background-color

// background-image

// background-position

// background-size

// background-repeat

// background-attachment

// background-clip

// background-origin

// pointer-events

// flex-wrap

// flex-grow

// flex-shrink

// flex-basis

// justify-content

// align-items

// align-content

// align-self

// order
