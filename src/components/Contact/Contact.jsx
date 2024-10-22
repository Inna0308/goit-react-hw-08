import styles from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <div className={styles.container}>
      <li className={styles.item}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </li>
      <button type="button" onClick={() => onDeleteContact(id)} className={styles.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
