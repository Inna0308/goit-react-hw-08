import { useDispatch } from "react-redux";

import { RegisterUserSchema } from "../utils/schema";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { register } from "../../redux/auth/operations";

import styles from "./RegistrationForm.module.css";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={styles.divRegForm}>
      <Formik initialValues={INITIAL_VALUES} validationSchema={RegisterUserSchema} onSubmit={handleSubmit}>
        <Form className={styles.regForm}>
          <label className={styles.labelRegForm}>
            <span className={styles.spanRegForm}>Name</span>
            <Field className={styles.fieldRegForm} type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage className={styles.errorRegForm} name="name" component="span" />
          </label>
          <label className={styles.labelRegForm}>
            <span className={styles.spanRegForm}>Email</span>
            <Field className={styles.fieldRegForm} type="text" name="email" placeholder="Enter your email" />
            <ErrorMessage className={styles.errorRegForm} name="email" component="span" />
          </label>
          <label className={styles.labelRegForm}>
            <span className={styles.spanRegForm}>Password</span>
            <Field className={styles.fieldRegForm} type="password" name="password" placeholder="Enter your password" />
            <ErrorMessage className={styles.errorRegForm} name="password" component="span" />
          </label>
          <button className={styles.btnRegForm} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
