import styles from "./modules/delivery.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeDeliverSlice, setDeliveryType } from "../../redux/slices/deliverySlice";
import React from "react";

export const DeliveryType = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(removeDeliverSlice())
  },[])
  const onClickButton = (obj) => {
    dispatch(setDeliveryType(obj));
    
  };
  const delType = useSelector((state) => state.deliver.type);

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/img/status1.svg" alt="status1" />
      </div>
      <div className={styles.line}></div>
      <h2>На вказану адресу</h2>
      <div className={styles.component}>
        <input
          onClick={() => onClickButton("Кур'єром Meest")}
          defaultChecked={delType === "Кур'єром Meest"}
          type="radio"
          id="curier"
          name="type"
        />
        <label htmlFor="curier">
          <div className={styles.label}>Кур'єром Meest</div>Післяплата.
          Банківськими картками Visa, MasterCard, Maestro. Електронними
          гаманцями - Google Pay або Apple Pay.
        </label>
      </div>
      <div className={styles.component}>
        <input
          onClick={() => onClickButton("Відділення Нова Пошта")}
          defaultChecked={delType === "Відділення Нова Пошта"}
          type="radio"
          id="post"
          name="type"
        />
        <label htmlFor="post">
          <div className={styles.label}>Відділення Нова Пошта</div>Оплата
          карткою Visa, MasterCard, Maestro або ж електронними гаманцями -
          Google Pay або Apple Pay
        </label>
      </div>
      <div className={styles.footer}>
        <Link to="/sneakers">
          {" "}
          <div className={styles.left}>
            <img src="/img/arrow.svg" alt="arrow" />
            Продовжити покупки
          </div>
        </Link>
        <Link to="/adress">
          <div className={styles.button}>Адресні дані</div>
        </Link>
      </div>
    </div>
  );
};
