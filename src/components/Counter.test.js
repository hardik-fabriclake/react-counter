import React, { useReducer } from "react";
import "../App.css";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

// Define initial state
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// Test cases
describe("Counter", () => {
  test("renders counter correctly", () => {
    const { getByText } = render(<Counter />);
    const counterHeading = getByText("Counter");
    const countElement = getByText("0");
    expect(counterHeading).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");
    const countElement = getByText("0");
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
  });

  test("decrements count when decrement button is clicked", () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("Decrement");
    const countElement = getByText("0");
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("-1");
  });

  test("resets count when reset button is clicked", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");
    const resetButton = getByText("Reset");
    const countElement = getByText("0");
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(countElement).toHaveTextContent("0");
  });
});
