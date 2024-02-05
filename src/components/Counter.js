import React, { useReducer } from "react";
import "../App.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 5;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counterContainer">
      <h1 className="counterHeading">Counter</h1>
      <h2 className="count">{state}</h2>
      <button className="counterbtn" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button className="counterbtn" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button className="counterbtn" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default Counter;