import React from "react";
import { TaskChild } from "./TaskChild";
import { TaskChild2 } from "./TaskChild2";

export const Task = () => {
  let data = [
    { name: "ramya", city: "hyd" },
    { name: "rachana", city: "khammam" },
  ];
  return (
    <>
      <TaskChild data={data} />
      <TaskChild2 inf={data} />
    </>
  );
};
