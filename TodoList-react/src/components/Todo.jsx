import style from "../components/todo.module.css"
import Form from "../components/Form";



import { useState } from "react";
import Todolist from "./Todolist";
import Footer from "./Footer";



export default function Todo() {
   const [todos, setTodos] = useState([]);    
   const [todo, setTodo] = useState("");    
    const itemComplet = todos.filter((todo) => todo.done ).length
    const itemLeft = todos.length - itemComplet
    const sortedList = todos.slice().sort((a, b) =>Number(a.done)- Number(b.done));
   
  return (
    <div className={style.header}>
      <Form todo={todo} todos={todos} setTodos={setTodos} />
      <Todolist
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        sortedList={sortedList}
      />
      <Footer
        itemComplet={itemComplet}
        itemLeft={itemLeft}
       
      />
    </div>
  );
    
}