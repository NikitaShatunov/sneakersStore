import styles from './cart.module.scss'
const Cart = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <img src="/img/cart.svg" alt="cart" />
                <h1>Кошик</h1>
            </div>
            <div className={styles.line}></div>
            <div className={styles.header}>
                <div>Товар</div>
                <div>Назва</div>
                <div>Розмір</div>
                <div>Кількість</div>
                <div>Ціна</div>
            </div>
            <div className={styles.main}>
            <div><img src="./img/newBalance/cartvar.png" alt="cartvar" /></div>
                <div className={styles.name}>NEW BALANCE 993</div>
                <div className={styles.size}>42 EU</div>
                <div className={styles.count}><img src="/img/counter.png" alt="counter" /></div>
                <div>₴6499</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footer}>
                <span>Кількість товарів: 1</span>
                <span>Загальна ціна:   6,499 ₴ </span>
                <div className={styles.button2}>Замовити зараз</div>
            </div>
        </div>
    )
}
export default Cart