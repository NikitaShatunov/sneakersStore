import styles from './account.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import SneakerBlock from '../../Components/SneakerBlock'

const Account = () => {
    const like = useSelector(state => state.cart.like)
    const { data, loading, error } = useSelector(state => state.data);
    return (
        <div className={styles.container}>
            <div className={styles.gear}><img src="./img/gear.png" alt="gear" /></div>
            <div className={styles.photo}>
                <img src="./img/accountPhoto.png" alt="accountPhoto" />
                <p>Ім’я користуача</p>
                <p>Пошта користувача</p>
                </div>
            <div className={styles.line}></div>
            <h2>Вам сподобалося:</h2>
            <div className={styles.sneakers}>
            {data.map(obj => like.some(item => item.title === obj.title) && <SneakerBlock key={obj.id} title = {obj.title} imageUrl={obj.imageUrl} price={obj.price} />)}
            </div>
        </div>
    )
}
export default Account