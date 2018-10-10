import React, { Component, Fragment } from "react";
import ProductList from "../../components/ProductList";
import LoginForm from "../../components/LoginForm";

/**
 * Login Page
 */
export default class LoginPage extends Component {
  render() {
    return (
      <Fragment>
        <LoginForm />
        <ProductList />
      </Fragment>
    );
  }
}
