import React, { useState } from "react";

export const Slides = () => {
  const [state, setState] = useState(0);
  let Data = [
    { name: "ramya", city: "khammam" },
    { name: "rachana", city: "Hyderabad" },
    { name: "Prudhvi", city: "tirupathi" },
    { name: "Gopi", city: "Bonakal" },
    { name: "Bipin", city: "Vijayawada" },
  ];
  const next = () => {
    if (state < Data.length - 1) {
      setState(state + 1);
    } else {
      setState(0);
    }
  };
  const previous = () => {
    if (state != 0) {
      setState(state - 1);
    }
  };
  return (
    <>
      <h1>{Data[state].name}</h1>
      <h1>{Data[state].city}</h1>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </>
  );
};
