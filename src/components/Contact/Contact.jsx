import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsOps";

import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <li className={styles.item}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </li>
      <button type="button" onClick={() => dispatch(deleteContact(id))} className={styles.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
