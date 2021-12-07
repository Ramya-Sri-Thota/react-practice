import React from "react";
import { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const todoList = (e) => {
    e.preventDefault();
    setTodos((prevInput) => {
      return input ? [...prevInput, input] : prevInput;
    });
    setInput("");
  };
  return (
    <>
      <form>
        <input type="text" name="name" value={input} onChange={handleChange} />
        <input type="submit" value="submit" onClick={todoList} />
      </form>
      {todos.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </>
  );
};
export default Todo;
zes