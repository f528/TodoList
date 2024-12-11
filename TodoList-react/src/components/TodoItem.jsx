
import style from '../components/Outline.module.css'
export default function TodoItem(props){
    const {item} = props;
    return <div className={style.header}>{item}</div>;



 }

