import firebase from "../../fireBase";
import "firebase/firestore";
import React from "react";
import styles from "./account.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
export const Settigs = () => {
  const navigate = useNavigate();
  const db = getFirestore(firebase);
  const [name, setName] = React.useState("");
  const email = useSelector((state) => state.user.mail);
  const addUser = (name, email) => {
    const userRef = doc(db, "users", email);
    setDoc(userRef, { name: name });
    navigate('/account')
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <h2>Змінити ім'я:</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <div className={styles.wrapperST}>
          <div onClick={() => addUser(name, email)} className={styles.button}>
            ОК
          </div>{" "}
          <Link to="/account">
            <div className={styles.button}>Завершити налаштування</div>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};
