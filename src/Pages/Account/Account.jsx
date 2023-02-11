import styles from "./account.module.scss";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import SneakerBlock from "../../Components/SneakerBlock";
import { SignIn } from "./SignIn";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, getFirestore, getDocFromCache } from "firebase/firestore";
import firebase from "../../fireBase";
import { doc } from "firebase/firestore";
import { getUserName } from "../../utils/getUserName";
import { setName } from "../../redux/slices/userSlice";
import axios from "axios";


const Account = () => {
  const like = useSelector((state) => state.cart.like);
  const [data, setData] = React.useState([])
  const navigate = useNavigate()
  const email = useSelector((state) => state.user.mail);
  const dispatch = useDispatch()
  const {name} = useSelector(state => state.user);
  React.useEffect(() => {
    !!email && getUserName(email).then(res => dispatch(setName(res)));
    axios.get(`https://636106e067d3b7a0a6bbab86.mockapi.io/sneakers`).then(array => setData(array.data)).catch((err) => {
      alert('Сталася помилка')
      navigate('/')
    })
  }, [email, like]);

  
  return (
    <div className={styles.container}>
      {!!email ? (
        <>
          <div className={styles.gear}>
            <Link to="/settings">
              <img src="./img/gear.png" alt="gear" />
            </Link>
          </div>
          <div className={styles.photo}>
            <img src="./img/accountPhoto.png" alt="accountPhoto" />
            <p>{name}</p>
            <p>{email}</p>
          </div>
          <div className={styles.line}></div>
          <h2>Вам сподобалося:</h2>
          <div className={styles.sneakers}>
            {data.map(
              (obj) =>
                like.some((item) => item.title === obj.title) && (
                  <SneakerBlock
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    imageUrl={obj.imageUrl}
                    price={obj.price}
                  />
                )
            )}
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};
export default Account;
