import {} from 'react'
import { FaBeer } from 'react-icons/fa';
import style from '../css/Rodape.module.css'


function Ropade (){
  return(
    <section className={style.rodape}>
    <h3 className={style.h3}>@2023-todos os direitos reservados</h3>
    <FaBeer className={style.fabeer}/>
    </section>
  )
}
export default Ropade