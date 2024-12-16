import TodoItem from './TodoItem'
import style from './todolist.module.css'

export default function Todolist({todos ,setTodos}) {


 function handelClick(todo) {
   if (todo) {
     alert("Do you realy want to delete this item?");
   }
   setTodos(todos.filter((el) => el !== todo));
 }
    return (
      <div className={style.todolist}>
        <TodoItem todos={todos} setTodos={setTodos} />
        
      </div>
    );
       
}