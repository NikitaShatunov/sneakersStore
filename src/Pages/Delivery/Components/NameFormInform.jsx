import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import styles from "../modules/adress.module.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setAdress } from "../../../redux/slices/deliverySlice";

export const NameFormInform = () => {
  const navigate = useNavigate()
  const adress = useSelector(state => state.deliver.adress)
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const list = {
    firstName: "Ім’я*",
    lastName:  "Прізвище*",
    surname: "По батькові*",
    region: "Область*",
    city: "Місто*",
    postId: "Поштовий індекс*",
    street: "Вулиця*",
    home: "№ дому*",
    floor: "№ квартири",
    phone: "Телефон*",
    email: "Електронна пошта*",
  }
  const onSubmit = (data) => {
    dispatch(setAdress(JSON.stringify(data)))
    navigate('/payType')
  }
  return (
    <div className={styles.form}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
         {Object.entries(list).map(([key, value]) => <div key={uuidv4()}>
            <label>
              {value}
              <br />
              <input {...register(`${key}`, { required: value.split('').some(obj => obj === '*') })}/>
            </label>
            <div>{errors?.[key] && <div style={{color:'red'}}>{errors?.key?.message || "Обов'язково для заповнення!"}</div>}</div>
          </div>)}
         <div className={styles.footer1}> <input className={styles.button1} type="submit" value={'Оплата'} /></div>
        </form>
  
      </div>
    </div>
  );
};
