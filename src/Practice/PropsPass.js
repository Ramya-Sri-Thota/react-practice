import React, { useState } from "react";
import { ChildProps } from "./components/ChildProps";

export const PropsPass = () => {
  let initialState = { name: "ramya", age: 24 };
  const [state, setstate] = useState(initialState);
  return (
    <>
      <ChildProps name={state.name} />
    </>
  );
};
