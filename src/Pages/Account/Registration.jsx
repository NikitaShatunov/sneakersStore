import styles from "./account.module.scss";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../fireBase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";

export const Registration = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()
  const { mail } = useSelector(state => state.user)
  const navigate = useNavigate()
  React.useEffect(()=> {
    !!mail && navigate('/account') 
  },[mail])
  const handleClick = (email, password) => {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
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
    <div className={styles.container}>
      <div className={styles.wrapperRG}>
        <div className={styles.login}>
          <h2>РЕЄСТРАЦІЯ</h2>
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
          <div onClick={() => handleClick(email, password)} className={styles.button}>Зареєструватися</div>
        </div>
      </div>
    </div>
  );
};
