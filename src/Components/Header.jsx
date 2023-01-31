import React from "react";
import styles from './header.module.scss'
import { Link, useLocation } from "react-router-dom";
const Header = () => {
   const location = useLocation()
 return(
    <div className={styles.header}>
     <Link to='/'> <div className = {styles.logo}>
        <img className={styles.lg} src='/img/LogoName.svg'/>
      </div></Link>
      <ul className = {styles.pages}>
        <li className={location.pathname ==='/' ? styles.selectedPage : ''}><Link to='/'>Головна</Link></li>
        <li className={location.pathname ==='/sneakers' ? styles.selectedPage : ''}><Link to='/sneakers'>Кросівки</Link></li>
        <li className={location.pathname ==='/about' ? styles.selectedPage : ''}><Link to='/about'>Про нас</Link></li>
        <li className={location.pathname ==='/pay' ? styles.selectedPage : ''}><Link to='/pay'>Оплата</Link></li>
        <li className={location.pathname ==='/new' ? styles.selectedPage : ''}><Link to='/new'>Новинки</Link></li>
        </ul>
       <ul className={styles.shop}>
          <Link to='/account'><li className='mr-30'><img className={styles.acc} src='/img/account.svg'alt='account' /></li></Link>
          <Link to='/cart'><li className={styles.cart}><img className={styles.cartImg} src='/img/cart.svg' alt='cart' /><span className={styles.uah}>3200 uah</span></li></Link>
        </ul>
     </div>
 )
}
export default Header;