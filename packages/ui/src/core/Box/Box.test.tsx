import { render, screen } from "@testing-library/react";
import Box from "./Box";
import { PropsWithChildren } from "react";

describe("Box", () => {
	it("should render with default", () => {
		render(<Box data-testid="test-box" />);

		const box = screen.getByTestId("test-box");

		expect(box).toBeInTheDocument();
		expect(box).toBeInstanceOf(HTMLDivElement);
	});

	it("should render with children", () => {
		render(<Box data-testid="test-box">Test</Box>);

		const box = screen.getByTestId("test-box");

		expect(box).toHaveTextContent("Test");
	});

	it("should render with className", () => {
		render(<Box data-testid="test-box" className="test-class" />);

		const box = screen.getByTestId("test-box");

		expect(box).toHaveClass("test-class");
	});

	it("should correctly render with custom props", () => {
		render(<Box data-testid="test-box" id="test-id" className="test-class" />);

		const box = screen.getByTestId("test-box");

		expect(box).toHaveAttribute("id", "test-id");
		expect(box).toHaveClass("test-class");
	});

	it("should correctly render with component prop (native html element)", () => {
		render(<Box data-testid="test-box" component="a" href="https://example.com" />);

		const box = screen.getByTestId("test-box");

		expect(box).toBeInstanceOf(HTMLAnchorElement);
		expect(box).toHaveAttribute("href", "https://example.com");
	});

	it("should correctly render with component prop (react component)", () => {
		render(
			<Box component={CustomComponent} custom="here">
				<span data-testid="child">Test</span>
			</Box>
		);

		const box = screen.getByTestId("custom-test-component");

		expect(box).toBeInTheDocument();
		expect(box).toHaveTextContent("custom react component and custom prop: here");

		const child = screen.getByTestId("child");

		expect(child).toBeInTheDocument();
		expect(child).toHaveTextContent("Test");
	});
});

type CustomComponentProps = PropsWithChildren<{ custom: string }>;

const CustomComponent = ({ children, custom }: CustomComponentProps) => (
	<div data-testid="custom-test-component">
		<div>custom react component and custom prop: {custom}</div>
		<div>{children}</div>
	</div>
);