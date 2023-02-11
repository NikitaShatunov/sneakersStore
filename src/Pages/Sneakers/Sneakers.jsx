import React from "react"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../redux/slices/sneakersFetchSlice";
import SneakerBlock from "../../Components/SneakerBlock"
import styles from './sneakers.module.scss'
import Sort from "../../Components/Sort/Sort";
import SneakerBlockSceleton from "../../Components/SneakerBlockSceleton/SneakerBlockSceleton";
import { setBrand } from "../../redux/slices/filterSlice";

const Sneakers = () => {
    const sort = useSelector((state) => state.filter.sort);
    const isAsc = useSelector(state => state.filter.asc)
    const brand = useSelector(state => state.filter.brand)
    const {data, error, loading} = useSelector(state => state.data)
    const navigate = useNavigate();
    const brands = ['Всі','Adidas', 'Nike', 'Reebok', 'Puma', 'New Balance']
    const params = {brand: brand, sortType: sort.prop, isAsc: isAsc}
    const isSearch = React.useRef(false)
    const dispatch = useDispatch()
    const didMounted = React.useRef(false)

   const [search, setSearch] = React.useState('')

    const fetchSneakers = async () => {
        dispatch(fetchData(params))
    }
    React.useEffect(() => {
        if(!didMounted.current){
            dispatch(fetchData(params))
        }
        didMounted.current = true
    }, [data])
  
    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            fetchSneakers();
        }
        isSearch.current = false;
      }, [sort, isAsc, brand]);

      const onChangeBrand = (obj) => {
        dispatch(setBrand(obj))
      }


    const skeletons = [...new Array(8)].map((_, i) => (
        <SneakerBlockSceleton key={i} />
      ));

       const onChangeSearch = (e) => {
            setSearch(e.target.value)
        }



    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h2>Чоловічі кросівки і кеди:</h2>
            <Sort />
            </div>
            <div className={styles.line}></div>
            <div className={styles.sidebar}>
                <div className={styles.search}>
                <svg className={styles.icon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                    <input placeholder="Пошук"  onChange={(e) => onChangeSearch(e)} type="text" /></div>
            
                <ul className={styles.brands}>
                    <h2 className={styles.h2}>Виробники:</h2>
                {brands.map((obj, i) => <li key={i}><label><input name='name' checked={brand===obj} onChange={() => onChangeBrand(obj)} type="radio" />{obj}</label></li> )}
                </ul>
            </div>
            <div className={styles.sneakers}>
            {
              
            loading ? skeletons : 
            data.filter(obj => {
                return obj.title.toLowerCase().includes(search.toLowerCase())
            })
            .map(obj => (<SneakerBlock key={obj.id} id={obj.id} title = {obj.title} imageUrl={obj.imageUrl} price={obj.price} liked={obj.liked}/>))
            }
            </div>
        </div>
    )
}
export default Sneakers