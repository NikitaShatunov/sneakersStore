import { useDispatch, useSelector } from "react-redux"
import { setPostBranch } from "../../../redux/slices/deliverySlice"
import styles from "../modules/adress.module.scss"
const postBranches = ['Оберіть відділення','51 відділення, місто Дніпро', '41 відділення, місто Дніпро', '61 відділення, місто Дніпро', '31 відділення, місто Дніпро', '21 відділення, місто Дніпро']
export const PostForm = () => {
    const dispatch = useDispatch()
    const onChangePostBranch = (value) => {
        dispatch(setPostBranch(value))
    }
    return(
            <div>
            <h2>Оберіть відділення Нової пошти</h2>
            <select onChange={(e) => onChangePostBranch(e.target.value)}  name="post" id="post">
                {postBranches.map((obj, i)=> <option key={i}>{obj}</option>)}
            </select>
            </div>
    )
}