import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

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
