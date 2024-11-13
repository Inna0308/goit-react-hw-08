import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase().trim()));

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact id={contact.id} key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
};

export default ContactList;
