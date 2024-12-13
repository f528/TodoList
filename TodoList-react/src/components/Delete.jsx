import style from '../components/Btn.module.css';

export default function Delete(){
    function Delete(e){
        e.remove();
        alert("Deleted")
    }
    
    return <div className={style.boxbuton}>
        <button  onClick={Delete} className={style.btn}>Delete</button>
    </div>
}