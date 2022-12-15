import styles from './sneakerblock.module.scss'
import { Link } from 'react-router-dom';
const SneakerBlock = () => {
    const isLiked = true;
    return (
       <Link to='/sneakers/page'>
        <div className={styles.wrapper}>
            <div className={styles.photo}>
                <img className={styles.sneaker} src="./img/Nike.png" alt="nike" />
            </div>
            <div className={styles.legend}>
            <div>
            <h3>NIKE AIR MAX 95</h3>
            <span>₴5,499</span><br />
            <span>39-45 Розмір, EUR</span>
            </div>
            <div className={styles.like}>
                {
                    isLiked ? <img src="./img/liked.png" alt="liked" /> : <img src="./img/unliked.png" alt="unliked" />
                }
            </div>
            </div>
        </div>
        </Link>
    )
}
export default SneakerBlock;