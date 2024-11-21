import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => <Contact key={id} name={name} number={number} id={id} />)}
    </ul>
  );
};

export default ContactList;
