import React, { Component, Fragment } from "react";
import styles from "./styles.module.scss";
export default class Input extends Component {
  render() {
    const { type, name, placeholder, value, onChange, hasError } = this.props;
    return (
      <div className={styles.wrapper}>
        {hasError && (
          <span className={styles.errorMessage}>
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`} is required
          </span>
        )}
        <input
          className={
            hasError ? `${styles.error} ${styles.input}` : styles.input
          }
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
