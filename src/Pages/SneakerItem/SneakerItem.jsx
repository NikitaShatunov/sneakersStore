import styles from "./sneakeritems.module.scss";
import ItemsPhoto from "../../Components/ItemsPhoto/ItemsPhoto";
const SneakerItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <ItemsPhoto />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.options}>
        <div>
          <h2>NEW BALANCE 993</h2>
          <p>Чоловічі кросівки</p>
          <p className={styles.blue}>Є в наявності</p>
          <h1>₴6499</h1>
          <h2 className={styles.h2}>Розмір, EUR</h2>
          <select defaultValue={43} name="sizes">
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
          </select>
          <div className={styles.button}>
            <img src="/img/cart.svg" alt="cart" />
            <p>ДОДАТИ У КОШИК</p>
          </div>
          <div className={styles.button2}>Придбати зараз</div>
          <img className={styles.like} src="/img/unliked.png" alt="like" />
        </div>
        <img className={styles.phone} src="/img/iphone.png" alt="alt" />
        </div>
        <p className={styles.paragraph}>Створені для незалежних осіб 993 - це зразок сміливого мислення. Оновлені 997H додають новизни до цього модельного ряду, який пропонує кольорові рішення сучасності та модерну. Вони створені для тих, хто готовий відрізнятись.
</p>
      </div>
    </div>
  );
};
export default SneakerItem;
