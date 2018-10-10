import React from "react";
import styles from "./styles.module.scss";

const Checkbox = ({ label, checked, id }) => (
  <label htmlFor={id} className={styles.wrapper}>
    <input type="checkbox" id={id} checked={checked} />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Checkbox;
