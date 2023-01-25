import React, { useRef, useState, useEffect } from "react";

const UseRefDemo = () => {
  const [name, setname] = useState("");
  const inputRef = useRef();
  const prevName = useRef(""); //not using state here
  //otherwse component will rerender again which we dont need
  //used to persisting value across renders

  //we can also use this to store the previous state

  //it is like useState but whole component wont get re-rendered when its
  //value changes

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
    // inputRef.current.value = "Some value";
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        ref={inputRef}
        onChange={(e) => setname(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefDemo;

/**
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
 */

/**
 * useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {current: ...} object yourself is that useRef will give you the same ref object on every render.

Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


 */
