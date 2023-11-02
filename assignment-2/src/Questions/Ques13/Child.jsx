import React from "react";

function Child({ Increment, count, Reset }) {
  return (
    <div>
      <h2>Count in Child: {count}</h2>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
export default Child;
