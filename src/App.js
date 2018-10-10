import React, { Component } from "react";
import "./App.scss";
import LoginPage from "./modules/LoginPage";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginPage />
      </div>
    );
  }
}

export default App;
