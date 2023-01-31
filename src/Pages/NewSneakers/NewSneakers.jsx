import { useSelector, useDispatch } from 'react-redux';
import React from "react"
import { useNavigate } from "react-router";

import styles from './newsneakers.module.scss'
import { fetchData } from '../../redux/slices/sneakersFetchSlice';
import SneakerBlock from "../../Components/SneakerBlock"

const NewSneakers = () => {
    const { data, loading, error } = useSelector(state => state.data);
    const isMounted = React.useRef(false);
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      if(!isMounted.current) {
        const json = JSON.stringify(data);
        localStorage.setItem('cart', json);  
        dispatch(fetchData())
      }
      isMounted.current = true;
    }, [data])
   
    const navigate = useNavigate()
    if(error) {
        navigate('/')
    }
    return(
           <div className={styles.container}>
           <h1>Нові пари:</h1>
           <div className={styles.line}></div>
           <div className={styles.sneakers}>
            {data.map(obj => <SneakerBlock key={obj.id} title = {obj.title} imageUrl={obj.imageUrl} price={obj.price} liked={obj.liked}/>)}
            </div>
           </div>
    )
}
export default NewSneakers