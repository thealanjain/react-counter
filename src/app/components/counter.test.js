import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";

describe("Counter Component", () => {
  test("Render counter buttons", () => {
    render(<Counter />);
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("Initial count to be 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test("Increment button to increase the count", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test("Decrement button should decrease the count", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("+");
    const decrementBtn = screen.getByText("-");
    fireEvent.click(incrementBtn); // Count: 1
    fireEvent.click(decrementBtn); // Count: 0
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test("Increment button is disabled at count 10", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("+");
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    expect(incrementBtn).toBeDisabled();
  });

  test("Decrement button is disabled at count 0", () => {
    render(<Counter />);
    expect(screen.getByText("-")).toBeDisabled();
  });

  test("Decrement button is enabled at count greater than 0", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("+");
    const decrementBtn = screen.getByText("-");
    fireEvent.click(incrementBtn);
    expect(decrementBtn).not.toBeDisabled();
  });
});
