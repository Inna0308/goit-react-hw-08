import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/selectors";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts?.map((contact) => (
        <Contact id={contact.id} key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
};

export default ContactList;
