import React from "react"
import { useNavigate } from "react-router";

import styles from './newsneakers.module.scss'
import SneakerBlock from "../../Components/SneakerBlock"
import axios from 'axios';

const NewSneakers = () => {
    const [data, setData] = React.useState([])
    const didMounted = React.useRef(false);
    const navigate = useNavigate()

    React.useEffect(() => {
      axios.get(`https://636106e067d3b7a0a6bbab86.mockapi.io/sneakers`).then(array => setData(array.data)).catch((err) => {
        alert('Сталася помилка')
        navigate('/')
      })
    },[])
  
    return(
           <div className={styles.container}>
           <h1>Нові пари:</h1>
           <div className={styles.line}></div>
           <div className={styles.sneakers}>
            {data.map(obj => <SneakerBlock key={obj.id} id={obj.id} title = {obj.title} imageUrl={obj.imageUrl} price={obj.price} liked={obj.liked}/>)}
            </div>
           </div>
    )
}
export default NewSneakers