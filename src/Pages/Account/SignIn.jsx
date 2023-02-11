import React from "react";
import styles from "./account.module.scss";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import firebase from "../../fireBase";
import { setUser } from "../../redux/slices/userSlice";
export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()

  const handleClick = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(setUser(user.email))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
  return (
    <>
      <div className={styles.wrapperRG}>
        <div className={styles.registration}>
          <h2>РЕЄСТРАЦІЯ</h2>
          <div className={styles.description}>
            Якщо ви раніше не створили облікового запису в нашому магазині, вам
            доведеться вказати свої дані і адресу доставки.
          </div>
          <Link to="/reg">
            <div className={styles.button}>Створити новий обліковий запис</div>
          </Link>
        </div>
        <div className={styles.login}>
          <h2>ВХІД</h2>
          <label>
            E-mail
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              value={email}
            />
          </label>
          <br />
          <label>
            Пароль
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
            />
          </label>
          <div onClick={() => handleClick(email, password)} className={styles.button}>Вхід</div>
          <p>Я забув(ла) ім’я користувача або пароль</p>
        </div>
      </div>
    </>
  );
};
