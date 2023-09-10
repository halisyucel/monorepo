import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
} from 'react';
import { SxProps } from './sx';

export type RefProp<T extends ElementType> = {
	elementRef?: ComponentPropsWithRef<T>['ref'];
};

export type AsProp<T extends ElementType> = {
	as?: T;
};

export type StyleProp = {
	sx?: SxProps;
};

export type ElementProps<
	T extends ElementType,
	P = NonNullable<unknown>,
> = Omit<ComponentPropsWithoutRef<T>, keyof P> & P & StyleProp & RefProp<T>;

export type PolymorphicElementProps<
	T extends ElementType,
	P = NonNullable<unknown>,
> = ElementProps<T, P> & AsProp<T>;
