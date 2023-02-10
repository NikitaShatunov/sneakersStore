import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import styles from "./modules/adress.module.scss"
import React from "react"
import { NameFormInform } from "./Components/NameFormInform"
import { Link } from "react-router-dom"
import { PostForm } from "./Components/PostFormInform"

export const Adress = () => {
    const type = useSelector(state => state.deliver.type)
    const navigate = useNavigate()
    React.useEffect(() => {
        if(!type) {
            navigate("/delivery")
        }
    },[])
    return(
        <div className={styles.container}>
            <div className={styles.img}><img src="/img/status2.svg" alt="status2" /></div>
            <div className={styles.line}></div>
            {type === "Кур'єром Meest" ? <NameFormInform /> : <PostForm />}
            <div className={styles.footer}>
               <Link to='/delivery'> <div className={styles.left}><img src='/img/arrow.svg' alt='arrow'/>Повернутися</div></Link>
                {type !== "Кур'єром Meest"  && <Link to="/payType"><div className={styles.button}>Оплата</div></Link>}
            </div>
        </div>
    )
}