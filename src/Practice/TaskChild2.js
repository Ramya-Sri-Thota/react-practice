import React from "react";

export const TaskChild2 = ({ inf }) => {
  return (
    <>
      {inf.map((val, index) => {
        return (
          <h3 key={index}>
            {val.name} {val.city}
          </h3>
        );
      })}
    </>
  );
};
