import React, { useReducer } from "react";
import "../App.css";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

//Define initial state
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

describe("Counter Component", () => {
  test("renders Counter component", () => {
    render(<Counter />);
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("increments the counter", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrements the counter", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("resets the counter", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
 