import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Paper from './Paper';

describe('Paper', () => {
	it('should render with default', () => {
		render(<Paper data-testid="test-paper" />);

		const paper = screen.getByTestId('test-paper');
		const className = paper.getAttribute('class');

		expect(paper).toBeInTheDocument();
		expect(paper).toBeInstanceOf(HTMLDivElement);
		expect(window.document.head.innerHTML).toMatch(
			`.${className}{background-color:var(--ui-color-slate-50);border-radius:var(--ui-borderRadius-md);}`,
		);
	});

	it('should render with children', () => {
		render(<Paper data-testid="test-paper">Test</Paper>);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toHaveTextContent('Test');
	});

	it('should render with className', () => {
		render(<Paper data-testid="test-paper" className="test-class" />);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toHaveClass('test-class');
	});

	it('should render with html attributes', () => {
		render(<Paper data-testid="test-paper" id="test-id" />);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toHaveAttribute('id', 'test-id');
	});

	it('should render with sx prop', () => {
		render(<Paper data-testid="test-paper" sx={{ fontSize: '16px' }} />);

		const paper = screen.getByTestId('test-paper');

		expect(getComputedStyle(paper).fontSize).toBe('16px');
	});

	it('should render correctly with as prop (native html element)', () => {
		render(
			<Paper data-testid="test-paper" as="a" href="https://example.com" />,
		);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toBeInstanceOf(HTMLAnchorElement);
		expect(paper).toHaveAttribute('href', 'https://example.com');
	});

	it('should render correctly with as prop (custom component)', () => {
		render(
			<Paper
				data-testid="test-paper"
				as={CustomComponent}
				customProp="test-prop"
			/>,
		);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toBeInstanceOf(HTMLParagraphElement);
		expect(paper).toHaveTextContent('test-prop');
	});

	it('should render correctly with radius prop', () => {
		render(<Paper data-testid="test-paper" radius="sm" />);

		const paper = screen.getByTestId('test-paper');

		expect(getComputedStyle(paper).borderRadius).toBe(
			'var(--ui-borderRadius-sm)',
		);
	});

	it('should render correctly with shadow prop', () => {
		render(<Paper data-testid="test-paper" shadow="sm" />);

		const paper = screen.getByTestId('test-paper');

		expect(getComputedStyle(paper).boxShadow).toBe('var(--ui-boxShadow-sm)');
	});

	it('should render correctly with background prop', () => {
		render(<Paper data-testid="test-paper" background="blue-500" />);

		const paper = screen.getByTestId('test-paper');
		const className = paper.getAttribute('class');

		expect(window.document.head.innerHTML).toMatch(
			`.${className}{background-color:var(--ui-color-blue-500);`,
		);
	});

	it('should render correctly with withBorder prop', () => {
		render(<Paper data-testid="test-paper" withBorder />);

		const paper = screen.getByTestId('test-paper');
		const className = paper.getAttribute('class');

		expect(window.document.head.innerHTML).toMatch(
			`.${className}{background-color:var(--ui-color-slate-50);` +
				`border-color:var(--ui-color-gray-200);` +
				`border-radius:var(--ui-borderRadius-md);` +
				`border-width:var(--ui-borderWidth-medium);` +
				`border-style:var(--ui-borderStyle-solid);}`,
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
