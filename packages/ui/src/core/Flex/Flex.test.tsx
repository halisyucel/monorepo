import { render, screen } from '@testing-library/react';

import Flex from './Flex';

describe('Flex', () => {
	it('should render with default', () => {
		render(<Flex data-testid="test-comp" />);

		const flex = screen.getByTestId('test-comp');

		expect(flex).toBeInTheDocument();
		expect(flex).toHaveStyle('display: flex');
		expect(flex).toBeInstanceOf(HTMLDivElement);
	});

	it('should render with className', () => {
		render(<Flex data-testid="test-comp" className="test-class" />);

		const flex = screen.getByTestId('test-comp');

		expect(flex).toHaveClass('test-class');
	});

	it('should render with children', () => {
		render(
			<Flex data-testid="test-comp">
				<div>Test</div>
			</Flex>,
		);

		const flex = screen.getByTestId('test-comp');

		expect(flex).toContainHTML('<div>Test</div>');
	});

	it('should render with html attributes', () => {
		render(
			<Flex data-testid="test-comp" id="test-id" className="test-class" />,
		);

		const flex = screen.getByTestId('test-comp');

		expect(flex).toHaveAttribute('id', 'test-id');
	});

	it('should render with ref', () => {
		const ref = { current: null };

		render(<Flex data-testid="test-comp" elementRef={ref} />);

		const flex = screen.getByTestId('test-comp');

		expect(ref.current).toBe(flex);
	});

	it('should render with sx prop', () => {
		render(<Flex data-testid="test-comp" sx={{ fontSize: '16px' }} />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).fontSize).toBe('16px');
	});

	it('should render with direction', () => {
		render(<Flex data-testid="test-comp" direction="column" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).flexDirection).toBe('column');
	});

	it('should render with align', () => {
		render(<Flex data-testid="test-comp" align="center" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).alignItems).toBe('center');
	});

	it('should render with justify', () => {
		render(<Flex data-testid="test-comp" justify="center" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).justifyContent).toBe('center');
	});

	it('should render with wrap', () => {
		render(<Flex data-testid="test-comp" wrap="wrap" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).flexWrap).toBe('wrap');
	});

	it('should render with gap', () => {
		render(<Flex data-testid="test-comp" gap="sm" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).gap).toBe('var(--ui-space-sm)');
	});

	it('should render with rowGap', () => {
		render(<Flex data-testid="test-comp" rowGap="sm" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).rowGap).toBe('var(--ui-space-sm)');
	});

	it('should render with columnGap', () => {
		render(<Flex data-testid="test-comp" columnGap="sm" />);

		const flex = screen.getByTestId('test-comp');

		expect(getComputedStyle(flex).columnGap).toBe('var(--ui-space-sm)');
	});
});
