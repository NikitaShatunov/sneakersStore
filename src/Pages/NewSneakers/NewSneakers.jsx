import SneakerBlock from "../../Components/SneakerBlock"
import styles from './newsneakers.module.scss'
const NewSneakers = () => {
    return(
           <div className={styles.container}>
           <h1>Нові пари:</h1>
           <div className={styles.sneakers}>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
            <SneakerBlock/>
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
export default NewSneakers