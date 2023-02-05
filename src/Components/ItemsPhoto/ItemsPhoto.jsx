import styles from './itemsphoto.module.scss'

const ItemsPhoto = ({imageUrl}) => {
    return(
        <>
        <div >
            <img className={styles.mainPhoto} src={imageUrl} alt="new" />
            <div className={styles.gallery}>
            <img src="/img/newBalance/NewBalance1.png" alt="new1" />
            <img src="/img/newBalance/NewBalance2.png" alt="new2" />
            <img src="/img/newBalance/NewBalance3.png" alt="new3" />
            <img src="/img/newBalance/NewBalnce4.png" alt="new4" />
            <img src="/img/newBalance/NewBalance5.png" alt="new5" />
            <img src="/img/newBalance/NewBalance6.png" alt="new6" />
            </div>
        </div>
        </>
    )
}
export default ItemsPhoto