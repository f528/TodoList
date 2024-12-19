import TodoItem from './TodoItem'
import style from './todolist.module.css'

export default function Todolist({todos ,setTodos,sortedList}) {


 function handelClick(todo) {
   if (todo) {
     alert("Do you realy want to delete this item?");
   }
   setTodos(sortedList.filter((el) => el !== todo));
 }
    return (
      <div className={style.todolist}>
        
        <TodoItem   todos={todos} setTodos={setTodos} sortedList={sortedList} />
        
      </div>
    );
       
}