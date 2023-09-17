import cx from 'classnames';
import { ElementType } from 'react';
import { sx, PolymorphicElementProps } from '../../system';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Box<T extends ElementType<any> = 'div'>({
	as,
	className,
	elementRef,
	sx: sxProps,
	...otherProps
}: PolymorphicElementProps<T>) {
	const Component = as || 'div';

	return (
		<Component
			ref={elementRef}
			className={cx(sx(sxProps), className)}
			{...otherProps}
		/>
	);
}
