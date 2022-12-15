import styles from './cart.module.scss'
const Cart = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <img src="/img/cart.svg" alt="cart" />
                <h1>Кошик</h1>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.propsNames}>
                <li>Товар</li>
                <li>Назва</li>
                <li>Розмір</li>
                <li>Кількість</li>
                <li>Ціна</li>
            </ul>
            <ul className={styles.props}>
                <li><img src="./img/newBalance/cartvar.png" alt="cartvar" /></li>
                <li className={styles.name}>NEW BALANCE 993</li>
                <li className={styles.size}>42 EU</li>
                <li className={styles.count}><img src="/img/counter.png" alt="counter" /></li>
                <li>₴6499</li>
            </ul>
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