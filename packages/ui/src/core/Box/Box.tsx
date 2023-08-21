import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
} from 'react';

export type BoxProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
	component?: T;
	elementRef?: ComponentPropsWithRef<T>['ref'];
};

export type BoxPropsWithoutComponent<T extends ElementType> = Omit<
	BoxProps<T>,
	'component'
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Box<T extends ElementType<any> = 'div'>({
	component,
	elementRef,
	...otherProps
}: BoxProps<T>) {
	const Component = component ?? 'div';

	return <Component ref={elementRef} {...otherProps} />;
}
