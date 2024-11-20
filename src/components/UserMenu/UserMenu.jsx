import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.divLogOut}>
      <p className={styles.textLogOut}>Welcome, {user.name}</p>
      <button className={styles.btnLogOut} onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
};
