import React, { useReducer } from "react";
import "../App.css";

// Define initial state
const initialState = { count: 0 };

// Define actions
const incrementAction = { type: "increment" };
const decrementAction = { type: "decrement" };
const resetAction = { type: "reset" };

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  // Define useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counterContainer">
      <h1 className="counterHeading">Counter</h1>
      <h2 className="count">{state.count}</h2>
      <button className="counterbtn" onClick={() => dispatch(incrementAction)}>
        Increment
      </button>
      <button className="counterbtn" onClick={() => dispatch(decrementAction)}>
        Decrement
      </button>
      <button className="counterbtn" onClick={() => dispatch(resetAction)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;