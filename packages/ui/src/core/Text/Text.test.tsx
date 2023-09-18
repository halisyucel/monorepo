import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Text from './Text';

describe('Text', () => {
	it('should render with default', () => {
		render(<Text data-testid="test-text">test</Text>);

		const text = screen.getByTestId('test-text');

		expect(text).toBeInTheDocument();
		expect(text).toBeInstanceOf(HTMLDivElement);
		expect(text).toHaveTextContent('test');
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

	it('should render with html attributes', () => {
		render(
			<Text data-testid="test-text" id="test-id">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toHaveAttribute('id', 'test-id');
	});

	it('should render with ref', () => {
		const ref = { current: null };

		render(
			<Text data-testid="test-text" elementRef={ref}>
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(ref.current).toBe(text);
	});

	it('should render with sx prop', () => {
		render(
			<Text data-testid="test-text" sx={{ fontSize: '18px' }}>
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).fontSize).toBe('18px');
	});

	it('should render correctly with as prop (native html element)', () => {
		render(
			<Text data-testid="test-text" as="a" href="https://example.com">
				example
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(text).toBeInstanceOf(HTMLAnchorElement);
		expect(text).toHaveAttribute('href', 'https://example.com');
	});

	it('should render correctly with as prop (custom component)', () => {
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

	it('should render with size', () => {
		render(
			<Text data-testid="test-text" size="sm">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');
		const className = text.getAttribute('class');

		expect(window.document.head.innerHTML).toMatch(
			`.${className}{font-size:var(--ui-fontSize-sm);line-height:var(--ui-lineHeight-sm);}`,
		);
	});

	it('should render with font', () => {
		render(
			<Text data-testid="test-text" font="sans">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).fontFamily).toBe('var(--ui-fontFamily-sans)');
	});

	it('should render with color', () => {
		render(
			<Text data-testid="test-text" color="red">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');
		const className = text.getAttribute('class');

		expect(window.document.head.innerHTML).toMatch(
			`.${className}{color:var(--ui-color-red);}`,
		);
	});

	it('should render with align', () => {
		render(
			<Text data-testid="test-text" align="center">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).textAlign).toBe('var(--ui-textAlign-center)');
	});

	it('should render with weight', () => {
		render(
			<Text data-testid="test-text" weight="bold">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).fontWeight).toBe('var(--ui-fontWeight-bold)');
	});

	it('should render with overflow', () => {
		render(
			<Text data-testid="test-text" overflow="ellipsis">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).textOverflow).toBe(
			'var(--ui-textOverflow-ellipsis)',
		);
	});

	it('should render with transform', () => {
		render(
			<Text data-testid="test-text" transform="uppercase">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).textTransform).toBe(
			'var(--ui-textTransform-uppercase)',
		);
	});

	it('should render with decoration', () => {
		render(
			<Text data-testid="test-text" decoration="underline">
				test
			</Text>,
		);

		const text = screen.getByTestId('test-text');

		expect(getComputedStyle(text).textDecoration).toBe(
			'var(--ui-textDecoration-underline)',
		);
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
