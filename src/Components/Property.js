import React, { useState } from "react";
function Property() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count++</button>
      <button onClick={() => setCount(count - 1)}>Count--</button>
      {console.log("Count is ", count)}
    </div>
  );
}

export default Property;
