import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("This is sent from child")}>
        Call Parents
      </button>
    </div>
  );
}

export default ChildComponent;
