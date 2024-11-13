import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContactSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addContact } from "../../redux/contactsSlice";

import styles from "./ContactForm.module.css";

const INITIAL_VALUES = { name: "", number: "" };

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = { ...values, id: nanoid() };

    const action = addContact(finalContact);
    dispatch(action);

    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={INITIAL_VALUES} validationSchema={addContactSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.span}>Name</span>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Number</span>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage className={styles.error} name="number" component="span" />
          </label>

          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
