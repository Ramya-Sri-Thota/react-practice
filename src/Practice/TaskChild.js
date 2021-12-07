import React from "react";

export const TaskChild = ({ data }) => {
  return (
    <>
      {data.map((val, index) => {
        return (
          <div key={index}>
            <h1>{val.name}</h1>
            <h2>{val.city}</h2>
          </div>
        );
      })}
    </>
  );
};
