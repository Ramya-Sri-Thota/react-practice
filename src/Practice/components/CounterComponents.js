import React, { useState } from "react";
import { Counter } from "./Counter";

export const CounterComponents = () => {
  const [state, setstate] = useState({ count: 0 });
  const increment = () => {
    setstate({ count: state.count + 1 });
  };
  const decrement = () => {
    setstate({ count: state.count - 1 });
  };
  return (
    <>
      <Counter
        count={state.count}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
};
