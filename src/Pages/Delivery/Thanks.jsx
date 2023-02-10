import styles from "./modules/end.module.scss"
import React from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/slices/cartSlice"
import { removeDeliverSlice } from "../../redux/slices/deliverySlice"
export const Thanks = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(clearCart())
        dispatch(removeDeliverSlice())
    },[])
    return(
        <div className={styles.container}>
            <div className={styles.thanks}>
            <div>
            <h1>Дякуємо за замовлення!</h1>
            <h2>Ми скоро з вами зв'яжемося</h2>
            <img className={styles.checkmark} src="/img/checkmark.svg" alt="checkmark" />
            </div>
            </div>
        </div>
    )
}