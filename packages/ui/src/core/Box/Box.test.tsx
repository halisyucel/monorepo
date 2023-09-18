import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Box from './Box';

describe('Box', () => {
	it('should render with default', () => {
		render(<Box data-testid="test-box" />);

		const box = screen.getByTestId('test-box');

		expect(box).toBeInTheDocument();
		expect(box).toBeInstanceOf(HTMLDivElement);
	});

	it('should render with children', () => {
		render(<Box data-testid="test-box">Test</Box>);

		const box = screen.getByTestId('test-box');

		expect(box).toHaveTextContent('Test');
	});

	it('should render with className', () => {
		render(<Box data-testid="test-box" className="test-class" />);

		const box = screen.getByTestId('test-box');

		expect(box).toHaveClass('test-class');
	});

	it('should render with html attributes', () => {
		render(<Box data-testid="test-box" id="test-id" />);

		const box = screen.getByTestId('test-box');

		expect(box).toHaveAttribute('id', 'test-id');
	});

	it('should render with ref', () => {
		const ref = { current: null };

		render(<Box data-testid="test-box" elementRef={ref} />);

		const box = screen.getByTestId('test-box');

		expect(ref.current).toBe(box);
	});

	it('should render with sx prop', () => {
		render(<Box data-testid="test-box" sx={{ fontSize: '16px' }} />);

		const box = screen.getByTestId('test-box');

		expect(getComputedStyle(box).fontSize).toBe('16px');
	});

	it('should correctly render with as prop (native html element)', () => {
		render(<Box data-testid="test-box" as="a" href="https://example.com" />);

		const box = screen.getByTestId('test-box');

		expect(box).toBeInstanceOf(HTMLAnchorElement);
		expect(box).toHaveAttribute('href', 'https://example.com');
	});

	it('should correctly render with as prop (custom component)', () => {
		render(
			<Box
				data-testid="test-box"
				as={CustomComponent}
				customProp="test-prop"
			/>,
		);

		const box = screen.getByTestId('test-box');

		expect(box).toBeInstanceOf(HTMLParagraphElement);
		expect(box).toHaveTextContent('test-prop');
	});
});

function CustomComponent({
	customProp,
	...otherProps
}: {
	customProp?: string;
}) {
	return <p {...otherProps}>{customProp}</p>;
}
