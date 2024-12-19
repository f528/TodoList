import style from "./TodoItem.module.css";
import { useState } from "react";

export default function TodoItem({ todo, todos, setTodos,sortedList }) {
  // Función para manejar el clic en el botón de eliminar
  function handelClick(todo) {
    if (todo) {
      const confirmDelete = window.confirm(
        "Do you really want to delete this item?"
      );
      if (confirmDelete) {
        setTodos(todos.filter((el) => el !== todo));
      }
    }
  }

  // Función para manejar el cambio de estado (done) del todo
  function handelClickitem(todo) {
    setTodos(todos.map((el) => (el === todo ? { ...el, done: !el.done } : el)));
    console.log(todo.done); // Esto se puede quitar si no es necesario para el debug
  }

  // Asignar la clase 'completed' si 'done' es verdadero
  

  return (
    <div className={style.container}>
      {sortedList.map((todo, index) => (
        <div key={index}>
          <div className={style.itemName}>
            <div className={style.divItem}>
              <span
                // Stile in-line: se "done" è true, cambia il colore del testo
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  color: todo.done ? "gray" : "black",
                  cursor: "pointer",
                }}
                onClick={() => handelClickitem(todo)} // Passo 'todo' direttamente
              >
                {todo.name}
              </span>
            </div>
            <div className={style.divBtn}>
              <button
                className={style.deleteButton}
                onClick={() => handelClick(todo)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
