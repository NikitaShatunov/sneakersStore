import styles from './home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <div className={styles.home}>
      <h1>Стань справжнім Снікерхедом</h1>
      <p>Чоловіче і жіноче взуття світових брендів. Відчуй якість на своїх ногах. Дизайни й силуети на будь-який смак.</p>
     <Link to='/sneakers'><div className={styles.button}><span>Обери свої Кросівки</span></div></Link>
     <img className={styles.converse} src='/img/converseRed.png' />
     </div>
    )

}
export default Home