import style from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handelClick(todo) {
    if (todo) {
      alert("Do you realy want to delete this item?");
    }
    setTodos(todos.filter((el) => el !== todo));
  }
    
  return (
    <div className={style.container}>
      {todos.map((todo, index) => (
        <div key={index}>
          <div className={style.itemName}>{todo}</div>
          <div className={style.divBtn}><button
            className={style.deleteButton}
            onClick={() => handelClick(todo)}
          >
            Delete
          </button></div>
          
        </div>
      ))}
    </div>
  );
}
