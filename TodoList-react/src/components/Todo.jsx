import style from "../components/todo.module.css"
import Form from "../components/Form";



import { useState } from "react";
import Todolist from "./Todolist";



export default function Todo() {
   const [todos, setTodos] = useState([]);    
   const [todo, setTodo] = useState("");    
    
   
  return (
    <div className={style.header}>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos= {todos} setTodos={setTodos} />
    
    </div>
  );
    
}