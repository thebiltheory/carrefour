import React, { Component } from "react";
import CarrefourLogo from "../../assets/carrefour";
import styles from "./styles.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <div className={styles.logo}>
          <CarrefourLogo />
        </div>
        <div className={styles.searchbar}>Search bar</div>
      </header>
    );
  }
}
