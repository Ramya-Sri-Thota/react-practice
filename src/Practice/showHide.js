import React, { useState } from "react";

export const ShowHide = () => {
  const [state, setstate] = useState(true);
  const hideMe = () => {
    setstate(!state);
  };
  return (
    <>
      {state ? <h3>Hellow</h3> : <span />}
      <button onClick={hideMe}>CLICKME</button>
    </>
  );
};
