import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.div}>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
