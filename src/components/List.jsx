import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating items");
  }, [getItems]);
  //useCallback wont create a brandnew funtion getItems
  //unless we dont need
  //referential equality of getItems first time render and referential equality
  //of getItems second time render going to be same
  //as long as the number dont actually change

  const renderItems = items.map((item) => <div key={item}>{item}</div>);

  return <>{renderItems}</>;
};

export default List;
