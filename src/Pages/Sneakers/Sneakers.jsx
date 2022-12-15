import React from "react"
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import SneakerBlock from "../../Components/SneakerBlock"
import styles from './sneakers.module.scss'
import Sort from "../../Components/Sort/Sort";

const Sneakers = () => {
    const navigate = useNavigate();
    const brands = ['Adidas', 'Adidas Originals', 'Nike', 'Reebok', 'Puma', 'New Balance']
    React.useEffect(() => {
        async function fetch() {
            try {
             const {data} = await axios.get(`https://636106e067d3b7a0a6bbab86.mockapi.io/sneakers` );
            }
            catch (erorr){
             alert("Eror")
             navigate('/')
            }
         }
         fetch();
     },[]);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h2>Чоловічі кросівки, кеди і снікери:</h2>
            <Sort />
            </div>
            <div className={styles.line}></div>
            <div className={styles.sidebar}>
                <ul className={styles.brands}>
                    <h2 className={styles.h2}>Виробники:</h2>
                {brands.map((obj, i) => <li key={i}><label><input  type="checkbox" />{obj}</label></li>)}
                </ul>
            </div>
            <div className={styles.sneakers}>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            </div>
        </div>
    )
}
export default Sneakers