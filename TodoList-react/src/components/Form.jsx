import { useState } from "react";
import style from "./form.module.css";

export default function Form({todos, setTodos}) {
   
     const [todo, setTodo] = useState("");
     
 function handelSubmit(e) {
   e.preventDefault(e);
   setTodos([...todos, todo]);
   setTodo("");
 }

    
  return (
    
    <div className={style.form}>
      <form onSubmit={handelSubmit}>
        <input className={style.input}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add a todo list"
        />
       <button className = {style.button}type="submit">Add</button>
      </form>
            </div> 
    
  );
}
