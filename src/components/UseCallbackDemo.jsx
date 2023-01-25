import React, { useState, useEffect, useCallback } from "react";
import List from "./List";

const UseCallbackDemo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //think of it as a function that returns data from the api
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  //useCallback work same as useMemo
  //it wont update getitems or render it again when we toggle theme
  //one big difference between useCallback and useMemo is that
  //useMemo actually returns the value returned by callback function
  //while useCallback returns the whole callback function
  //so you can pass parameters too

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackDemo;
