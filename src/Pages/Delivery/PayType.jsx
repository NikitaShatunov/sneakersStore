import styles from "./modules/payType.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPayType } from "../../redux/slices/deliverySlice";
import React from "react";

export const PayType = () => {
  const dispatch = useDispatch();
  const payType = useSelector((state) => state.deliver.pay);
  const post = useSelector(state => state.deliver.post)
  const navigate = useNavigate()
  if(post === "Оберіть відділення"){
    navigate('/adress')
  }
  const onClickType = (obj) => {
    dispatch(setPayType(obj));
  };
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/img/status3.svg" alt="status3" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.h}>
        <h2>Виберіть спосіб оплати</h2>
        <img src="/img/wallet.svg" alt="wallet" />
      </div>
      <div className={styles.component}>
        <input
          type="radio"
          defaultChecked={payType === "Visa, MasterCard, Maestro, Apple Pay, Google Pay"}
          onClick={() => onClickType("Visa, MasterCard, Maestro, Apple Pay, Google Pay")}
          id="online"
          name="type"
        />
        <label htmlFor="online">
          <div className={styles.label}>
            Visa, MasterCard, Maestro, Apple Pay, Google Pay
          </div>
          Перевірте, чи ввімкнений дозвіл на подвійну конвертацію та покупки в
          інтернеті.
        </label>
      </div>
      <div className={styles.component}>
        <input
          type="radio"
          defaultChecked={payType === "Післяоплата"}
          onClick={() => onClickType("Післяоплата")}
          id="after"
          name="type"
        />
        <label htmlFor="after">
          <div className={styles.label}>Післяоплата</div>Оплата після отримання
          на пошті.
        </label>
      </div>
      <div className={styles.footer}>
        <Link to="/adress">
          {" "}
          <div className={styles.left}>
            <img src="/img/arrow.svg" alt="arrow" />
            Повернутися
          </div>
        </Link>
        <Link to="/total">
          <div className={styles.button}>Всього</div>
        </Link>
      </div>
    </div>
  );
};
