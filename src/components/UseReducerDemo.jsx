import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);
  //useReducer also allows you to manage state an re-render the component
  //whenever the state changes

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: "increment" });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: "decrement" });
  }

  return (
    <>
      {/* Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> */}

      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default UseReducerDemo;
