import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

const CustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default CustomHooks;
