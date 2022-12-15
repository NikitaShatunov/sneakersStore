import styles from './account.module.scss'

import SneakerBlock from '../../Components/SneakerBlock'

const Account = () => {
    console.log('acc');
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
            <SneakerBlock />
            <SneakerBlock />
            <SneakerBlock />
            </div>
        </div>
    )
}
export default Account