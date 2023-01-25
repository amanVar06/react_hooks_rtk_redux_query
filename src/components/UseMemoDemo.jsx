import React, { useState, useMemo, useEffect } from "react";

const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  //every time our state changes the whole component will rerender
  //also slow function too
  //it will lead to performance issues whether we are changing theme
  //updating number

  //so we can instead use useMemo like this
  //which cause slowFunction to run only when memoized value changes

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //only use useMemo when there is need to improve performance
  //but as a cons we have meory overheads here

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  //see video here how we can use Memo here

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);
  //if we only write this useEffect then on changing number also our function inside useEffect will run as well becuase on re-rendering  new themeSyles object will get created in the memory which is not same as previous one as its refernce changed

  //so better to wrap our themeStyles in useMemo and check only when content of actual obejct get changed

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        style={{ margin: "10px" }}
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemoDemo;

/**
 * useMemo Returns a memoized value.
 * 
 * Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.

If no array is provided, a new value will be computed on every render.

You may rely on useMemo as a performance optimization, not as a semantic guarantee
 */
