
import style from "../components/Outline.module.css";
import Form from "../components/Form";

import TodoList from "../components/Todolist";
import { useState } from "react";
export default function Todo() {
   const [todos, setTodos] = useState([]);    
    
   
  return (
    <div className={style.header}>
     
        <Form todos= {todos} setTodos={setTodos} />     
        <TodoList todos={todos} />
    </div>
  );
    
}