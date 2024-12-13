import style from "../components/TodoItem.module.css"
import Delete from './Delete'
export default function TodoItem(props){
    const {item} = props;
    return <div className={style.list}>{item}   {<Delete />}</div>;



 }

