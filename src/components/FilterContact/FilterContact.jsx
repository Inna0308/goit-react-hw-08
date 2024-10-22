import styles from "./FilterContact.module.css";

const FilterContact = ({ filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Find contacts by name</p>
      <input className={styles.input} value={filter} type="text" onChange={(event) => setFilter(event.target.value)} />
    </div>
  );
};

export default FilterContact;
