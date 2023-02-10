import styles from "./modules/end.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export const EndForm = () => {
    const item = useSelector(state => state.cart.item)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const type = useSelector(state => state.deliver.type)
    const post = useSelector(state => state.deliver.post)
    const pay = useSelector(state => state.deliver.pay)
    const adress = useSelector(state => state.deliver.adress)
    const arr = []
    const parsedAdress = Object.keys(adress).length ? JSON.parse(adress) : '';
    const navigate = useNavigate()
    React.useEffect(() => {
        if(!pay) {
            navigate("/payType")
        }
    },[])
    for (const key in parsedAdress) {
      arr.push(parsedAdress[key])
      if(key === "surname"){
        arr.push(',')
      }
      arr.push(' ')
      
    }
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/img/status4.svg" alt="status3" />
      </div>
      <div className={styles.line}></div>
      <h2>Товари</h2>
      <div className={styles.wrapper}>
        <div>
        <div className={styles.leftSide}>
          <div className={styles.header}>
            <div>Товар</div>
            <div>Назва</div>
            <div>Розмір</div>
            <div>Кількість</div>
            <div>Ціна</div>
          </div>
          {/* <div className={styles.grayLine}></div> */}
          {item.map((obj) => (
            <div key={uuidv4()} className={styles.main}>
              <div>
                <img src={obj.imageUrl} />
              </div>
              <div className={styles.name}>{obj.title}</div>
              <div className={styles.size}>{obj.size} EU</div>
              <div className={styles.count}>{obj.count}</div>
              <div>{obj.price * obj.count}₴</div>
            </div>
          ))}
        </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.totalPrice}>
            <h2>Вартість замовлення</h2>
            <div className={styles.displayFlex}>
              <div className={styles.left}>
                <p>Сума товарів:</p>
                <p>Сума знижки:</p>
                <p>Доставка:</p>
                <p className={styles.bold}>Оплата:</p>
              </div>
              <div className={styles.right}>
                <p>{totalPrice} грн</p>
                <p>0 грн</p>
                <p>0 грн</p>
                <p className={styles.bold}>{totalPrice} грн</p>
              </div>
            </div>
            <div className={styles.forButton}><Link to="/order"><div className={styles.button}>Замовити</div></Link></div>
          </div>
          <div className={styles.delivery}>
            <div className={styles.header}>
              <div>Обраний вид доставки</div>
              <Link to="/delivery"><img src="/img/pencil.svg" alt="pencil" /></Link>
            </div>
            <p className={styles.delType}>{type}</p>
           {post ?  <div className={styles.adress}>{post}</div> : <div className={styles.adress}>{arr.join('')}</div>}
          </div>
          <div className={styles.pay}>
          <div className={styles.header}>
              <div>Обраний спосіб оплати</div>
              <Link to="/payType"><img src="/img/pencil.svg" alt="pencil" /></Link>
            </div>
            <p>{pay}</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
               <Link to='/payType'> <div className={styles.left}><img src='/img/arrow.svg' alt='arrow'/>Повернутися</div></Link>
            </div>
    </div>
  );
};
