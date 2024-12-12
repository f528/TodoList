
import { useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Todolist({todos}) {
  
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}