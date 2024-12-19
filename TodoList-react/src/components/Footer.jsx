
import style from './Footer.module.css'
export default function Footer({ itemComplet,itemLeft}) {
  return (
    <div className={style.footer}>
      <span> The number of the complet tasks {itemComplet}</span>
      
      <span> Total tasks {itemLeft}</span>
     
    </div>
  );
}