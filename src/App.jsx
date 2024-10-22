import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

import numbersData from "../numbers.json";

import "./App.css";
import FilterContact from "./components/FilterContact/FilterContact";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts ? JSON.parse(saveContacts) : numbersData;
  });

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase().trim()));

  const addContact = (values) => {
    const finalContact = { ...values, id: nanoid() };

    setContacts([...contacts, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts), [contacts]);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <FilterContact filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} id={contacts.id} />
    </div>
  );
}

export default App;
