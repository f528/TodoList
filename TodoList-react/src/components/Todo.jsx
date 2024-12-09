import { useState } from "react";
export default function Todo() {
     const [todo, setTodo] = useState("");
     const [todos, setTodos] = useState([]);
     function handelSubmit(e) {
        e.preventDefault(e);
        setTodos([...todos,todo]);
        setTodo("");



     }
  return <div>
    <h1 >Todo</h1>
    <form onSubmit={handelSubmit}>
      <input type="text" onChange={(e) => setTodo(e.target.value)}  value={todo} placeholder="Add a todo" />
      <button type="submit">Add</button>
    </form>
   {console.log(todos)}
  </div>
    
}