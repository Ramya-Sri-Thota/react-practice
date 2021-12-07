import React, { useState } from "react";

export const TextAlwaysChange = () => {
  // const [state, setstate] = useState("Ramya");
  // const [change, setchange] = useState("rachana");
  const [modify, setmodify] = useState(true);
  const textChange = () => {
    setmodify(!modify);
  };
  return (
    <div>
      {/* {modify ? <h1>{state}</h1> : <h1>{change}</h1>} */}
      {modify ? "Ramya" : "Rachana"}
      <br />
      <button onClick={textChange}>Click here</button>
    </div>
  );
};
