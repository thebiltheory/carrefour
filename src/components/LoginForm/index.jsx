import React, { Component } from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { getAuthentication } from "../../api";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      hasError: false
    };
  }

  handleForm = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    this.setState({
      hasError: (username && password) === ""
    });
  };

  logIn = () => {
    this.validateForm();
    const { hasError, username, password } = this.state;
    if (!hasError) {
      getAuthentication(username, password);
    }
  };

  render() {
    const { username, password, hasError } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Sign in now</h3>
          <h2>Unlock awesome feature!</h2>
        </div>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          hasError={!username && hasError}
          onChange={e => this.handleForm(e)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          hasError={!password && hasError}
          onChange={e => this.handleForm(e)}
        />
        <div className={styles.actions}>
          <Checkbox
            label="Keep me logged in"
            id="keep-me-logged-in"
            onChange={() => console.log("hello")}
          />
          <a href="#" className={styles.link}>
            Forgot Password?
          </a>
        </div>

        <button className={styles.button} type="submit" onClick={this.logIn}>
          SIGN IN
        </button>
      </div>
    );
  }
}
