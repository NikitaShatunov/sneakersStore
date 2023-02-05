import styles from "./sort.module.scss";
import React from "react";
import { setSort, setAsc } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();
  const [isVisibleSort, setIsVisibleSort] = React.useState(false);
  const isAsc = useSelector(state => state.filter.asc)
  const sortRef = React.useRef();

  const onClickAsc = () => {
    dispatch(setAsc(!isAsc))
  };
  const list = [
    { name: "популярністю", prop: "rating" },
    { name: "ціною", prop: "price" },
    { name: "алфівитом", prop: "title" },
  ];

  const sort = useSelector((state) => state.filter.sort);

  React.useEffect(() => {
    const clickOutside = (event) => {
      let path = event.composedPath().includes(sortRef.current);
      if (!path) {
        setIsVisibleSort(false);
      }
    };
    document.body.addEventListener("click", clickOutside);

    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div className="d-flex" ref={sortRef}>
      <div className={styles.asc} onClick={() => onClickAsc(!isAsc)}>
        <svg
          className={isAsc ? "" : styles.rotate}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
      </div>
      <span>
        Сортувати за:{" "}
        <span
          onClick={() => {
            setIsVisibleSort(!isVisibleSort);
          }}
        >
          {sort.name}
        </span>
      </span>
      {isVisibleSort && (
        <div className={styles.sort__popup}>
          <ul>
            {list.map((obj, i) => (
              <li
                className={sort.prop === obj.prop ? "active" : ""}
                key={i}
                onClick={() => {
                  dispatch(setSort(obj));
                  setIsVisibleSort(!isVisibleSort);
                }}
              >
                {obj.name}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Sort;
