import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter, setFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const FilterContact = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.input}
        value={filter}
        type="text"
        onChange={(event) => {
          const action = setFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default FilterContact;
