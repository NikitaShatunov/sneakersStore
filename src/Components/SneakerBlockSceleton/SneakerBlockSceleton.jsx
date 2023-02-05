import ContentLoader from "react-content-loader"
import styles from "./sceleton.module.scss"
const SneakerBlockSceleton = (props) => {
 return(
    <ContentLoader className={styles.main}
    speed={.2}
    width={220}
    height={250}
    viewBox="0 0 196 256"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="319" rx="10" ry="10" width="270" height="84" /> 
    <rect x="1" y="410" rx="10" ry="10" width="95" height="30" /> 
    <rect x="114" y="410" rx="23" ry="23" width="152" height="45" /> 
    <rect x="1" y="-1" rx="0" ry="0" width="196" height="256" /> 
    <rect x="111" y="200" rx="0" ry="0" width="32" height="5" />
  </ContentLoader>
 )
}
export default SneakerBlockSceleton