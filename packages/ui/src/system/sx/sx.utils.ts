import { Space, SpaceSx, SPACE } from './sx.types';

// eslint-disable-next-line import/prefer-default-export
export function isIncludeSpace<T extends 'margin' | 'padding' | 'gap'>(
	value: SpaceSx<T>,
): boolean {
	if (value.startsWith('-')) {
		return SPACE.includes(value.slice(1) as Space);
	}

	return SPACE.includes(value as Space);
}

export function isNegativeSpace<T extends 'margin' | 'padding' | 'gap'>(
	value: SpaceSx<T>,
): boolean {
	return value.startsWith('-');
}
