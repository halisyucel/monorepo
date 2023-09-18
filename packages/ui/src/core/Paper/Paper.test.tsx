import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Paper from './Paper';

describe('Paper', () => {
	it('should render with default', () => {
		render(<Paper data-testid="test-paper" />);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toBeInTheDocument();
		expect(paper).toBeInstanceOf(HTMLDivElement);
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

	it('should render with custom props', () => {
		render(
			<Paper data-testid="test-paper" id="test-id" className="test-class" />,
		);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toHaveAttribute('id', 'test-id');
		expect(paper).toHaveClass('test-class');
	});

	it('should render with sx prop', () => {
		render(<Paper data-testid="test-paper" sx={{ fontSize: 'sm' }} />);

		const paper = screen.getByTestId('test-paper');

		expect(paper.getAttribute('class')).toContain('css-');
	});

	it('should correctly render with as prop (native html element)', () => {
		render(
			<Paper data-testid="test-paper" as="a" href="https://example.com" />,
		);

		const paper = screen.getByTestId('test-paper');

		expect(paper).toBeInstanceOf(HTMLAnchorElement);
		expect(paper).toHaveAttribute('href', 'https://example.com');
	});

	it('should correctly render with as prop (custom component)', () => {
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
});

function CustomComponent({
	customProp,
	...otherProps
}: {
	customProp?: string;
}) {
	return <p {...otherProps}>{customProp}</p>;
}
