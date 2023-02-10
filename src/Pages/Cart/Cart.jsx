import styles from "./cart.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, minusItem, plusItem, removeItem } from "../../redux/slices/cartSlice";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const Cart = () => {
  const item = useSelector((state) => state.cart.item);
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const totalCount = useSelector((state) => state.cart.totalCount)

  const dispatch = useDispatch()

  const onClickPlus = (obj) => {
    dispatch(plusItem({id: obj.id, size: obj.size}))
  };
  const onClickMinus = (obj) => {
   dispatch(minusItem({id: obj.id, size: obj.size}))
  };
  const onClickRemove = (obj) => {
    if(window.confirm('Ви впевнені, що хочете видалити цей товар?')) {
      dispatch(removeItem({id: obj.id, size: obj.size}))
    }
    
  }
  const onClickClearCart =() => {
    if(window.confirm("Ви бажаєте очистити кошик?")){
      dispatch(clearCart())
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.svgCart}><img src="/img/cart.svg" alt="cart" />
        <h1>Кошик</h1></div>
        <div onClick={() => onClickClearCart()} className={styles.svgTrash}><img src="/img/trash.svg" alt="trash" /><div>Очистити кошик</div></div>
      </div>
      <div className={styles.line}></div>
      {Boolean(item.length) ? (
        <>
          <div className={styles.header}>
            <div>Товар</div>
            <div>Назва</div>
            <div>Розмір</div>
            <div>Кількість</div>
            <div>Ціна</div>
          </div>
          <div className={styles.items}>
            {item.map((obj) => (
              <div key={uuidv4()} className={styles.main}>
                <div>
                  <img src={obj.imageUrl} alt="img"/>
                </div>
                <div className={styles.name}>{obj.title}</div>
                <div className={styles.size}>{obj.size} EU</div>
                <div className={styles.count}>
                  <button
                    disabled={obj.count === 1}
                    onClick={() => onClickMinus(obj)}
                    className={styles.minus}
                  >
                    -
                  </button>
                  <div className={styles.input}>{obj.count}</div>
                  <button onClick={() => onClickPlus(obj)} className={styles.plus}>
                    +
                  </button>
                </div>
                <div>{obj.price*obj.count}₴</div>
               <div className={styles.forSvg}> <svg
               onClick={() => onClickRemove(obj)}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  enableBackground="new 0 0 50 50"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#231F20"
                    d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309  l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414  L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423  c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423  C8.625,39.813,8.625,40.447,9.016,40.837z"
                  />
                </svg></div>
              </div>
            ))}
          </div>
          <div className={styles.line}></div>
          <div className={styles.footer}>
            <span>Кількість товарів: {totalCount}</span>
            <span>Загальна ціна: {totalPrice} ₴ </span>
            <Link to='/delivery'><div className={styles.button2}>Замовити зараз</div></Link>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
            xmlSpace="preserve"
          >
            <metadata>
              {" "}
              Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
            </metadata>
            <g>
              <path d="M860.3,374.7l124.4-124.4c4-3.9,5.8-9.4,5.2-14.8c-0.8-5.6-4-10.4-8.7-13.2L645.7,28.5c-6.9-4-15.7-2.8-21.3,2.9L500,155.8L375.6,31.5c-5.7-5.7-14.4-6.9-21.4-2.9L18.8,222.4c-4.9,2.8-8,7.6-8.7,13.2c-0.7,5.3,1,10.9,4.9,14.8l124.4,124.4L15.1,499.3c-3.9,3.9-5.7,9.4-4.9,14.8c0.6,5.4,3.8,10.3,8.7,13l128,74v161.2c0,6.4,3.4,12.2,8.8,15.4l335.5,193.9c2.7,1.7,5.8,2.3,8.8,2.3c3,0,6.1-0.7,8.8-2.3l335.4-193.9c5.4-3.2,8.8-9,8.8-15.4V601.1l128.1-74c4.7-2.8,7.9-7.6,8.7-13c0.7-5.5-1.2-10.9-5.2-14.8L860.3,374.7L860.3,374.7z M799.9,372.5L500,545.8L200,372.5l224.9-130l75.1-43.3l271.3,156.6L799.9,372.5L799.9,372.5z M639.8,63.8l303.6,175.6l-111,111l-18.2-10.5L528.7,174.9L639.8,63.8L639.8,63.8z M360.2,63.8l111.1,111.1L167.5,350.3l-111.1-111L360.2,63.8L360.2,63.8z M167.5,394.6l303.6,175.6l-111,111L173.3,573.2c-0.1,0-0.1,0-0.1,0L56.4,505.7L167.5,394.6L167.5,394.6z M182.2,619.3l172,99.3c2.8,1.7,5.8,2.4,8.8,2.4c0.4,0,0.6-0.4,1-0.4c4.1-0.1,8.3-1.5,11.5-4.7l106.8-106.8v314.2L182.2,749.8L182.2,619.3L182.2,619.3z M817.6,749.8l-300,173.4V609.1l106.6,106.8c3.1,3.1,7.2,4.4,11.4,4.7c0.4,0,0.7,0.4,1,0.4c3.1,0,6.1-0.7,8.8-2.4l172-99.3V749.8L817.6,749.8z M639.7,681.1l-111-111l303.7-175.6l111,111.1L639.7,681.1L639.7,681.1z" />
            </g>
          </svg>
          <h2>КОШИК ПОРОЖНІЙ</h2>
        </div>
      )}
    </div>
  );
};
export default Cart;
