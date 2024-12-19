import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handelSubmit(e) {
    e.preventDefault(e);
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }

  return (
    <div className={style.form}>
      <form onSubmit={handelSubmit}>
        <input
          className={style.input}
          type="text"
          onChange={(e) => setTodo({name: e.target.value,done:false})}
          value={todo.name}
          placeholder="Add a todo list"
        />
     
        <button  className={style.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
