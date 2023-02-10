import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const greetParent = (valueFromChild) => {
    alert(`Greeting from parent and ${valueFromChild}`);
  };
  return <ChildComponent greetHandler={greetParent} />;
}

export default ParentComponent;
