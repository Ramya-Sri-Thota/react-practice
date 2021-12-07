import React, { useState } from "react";

export const Counter = (props) => {
  //   const [state, setstate] = useState({ count: 0 });
  //   const increment = () => {
  //     setstate({ count: state.count + 1 });
  //   };
  //   const decrement = () => {
  //     setstate({ count: state.count - 1 });
  //   };
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>INCREMENT</button>
      <button onClick={props.decrement}>DECREMENT</button>
    </>
  );
};
