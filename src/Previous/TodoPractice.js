import React from "react";
const TodoPractice()=>{
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const handleChange=(e)=>{
setInput(e.target.value)
  };
  const todoList=(e)=>{
e.prevent.input;
setTodos((prevInput)=>{
  return input?[...prevInput,input],prevInput;
});
setInput("");
  }
  return(
    <>
    <form>
    <input type="text" name="name" value={value} onChange={handleChange}/>
    <input type = "submit" value= {submit} onClick={todoslist}
    </form>
    (todos.map(name,index)=>{
return<h1 key={index}>{name}</h1>;
    })
    </>
  
  )
}









