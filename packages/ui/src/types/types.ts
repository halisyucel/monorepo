export type FontWeight =
	| 'thin'
	| 'extra-light'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semi-bold'
	| 'bold'
	| 'extra-bold'
	| 'black';

export type BaseColor =
	| 'slate'
	| 'gray'
	| 'zinc'
	| 'neutral'
	| 'stone'
	| 'red'
	| 'orange'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'sky'
	| 'blue'
	| 'indigo'
	| 'violet'
	| 'purple'
	| 'fuchsia'
	| 'pink'
	| 'rose';

export type ColorLevel =
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
	| '950';

export type Color = `${BaseColor}-${ColorLevel}`;
