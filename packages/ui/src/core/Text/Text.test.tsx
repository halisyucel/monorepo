import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Text from './Text';

describe('Text', () => {
	it('should render with default', () => {
		render(<Text data-testid="test-text">test</Text>);

		const text = screen.getByTestId('test-text');

		expect(text).toBeInTheDocument();
		expect(text).toBeInstanceOf(HTMLDivElement);
	});

	it('should render with className', () => {
		render(
			<Text data-testid="test-text" className="test-class">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toHaveClass('test-class');
	});

	it('should render with custom props', () => {
		render(
			<Text data-testid="test-text" id="test-id" className="test-class">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toHaveAttribute('id', 'test-id');
		expect(text).toHaveClass('test-class');
	});

	it('should render with sx prop', () => {
		render(
			<Text data-testid="test-text" sx={{ fontSize: 'sm' }}>
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text.getAttribute('class')).toContain('css-');
	});

	it('should correctly render with as prop (native html element)', () => {
		render(
			<Text data-testid="test-text" as="a" href="https://example.com">
				example
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toBeInstanceOf(HTMLAnchorElement);
		expect(text).toHaveAttribute('href', 'https://example.com');
	});

	it('should correctly render with as prop (custom component)', () => {
		render(
			<Text
				data-testid="test-text"
				as={CustomComponent}
				customProp="test-prop"
			/>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toBeInstanceOf(HTMLParagraphElement);
		expect(text).toHaveTextContent('test-prop');
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
