import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { LoginUserSchema } from "../utils/schema";

import { login } from "../../redux/auth/operations";

import styles from "./LoginForm.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={styles.divLoginForm}>
      <Formik initialValues={INITIAL_VALUES} validationSchema={LoginUserSchema} onSubmit={handleSubmit}>
        <Form className={styles.loginForm}>
          <label className={styles.labelLoginForm}>
            <span className={styles.spanLoginForm}>Email</span>
            <Field className={styles.fieldLoginForm} type="text" name="email" placeholder="Enter your email" />
            <ErrorMessage className={styles.errorLoginForm} name="email" component="span" />
          </label>
          <label className={styles.labelLoginForm}>
            <span className={styles.spanLoginForm}>Password</span>
            <Field
              className={styles.fieldLoginForm}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage className={styles.errorLoginForm} name="password" component="span" />
          </label>

          <button className={styles.btnLoginForm} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
