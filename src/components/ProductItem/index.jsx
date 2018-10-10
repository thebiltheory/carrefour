import React from "react";
import styles from "./Styles.module.scss";

/**
 * Render a Carrefour single square product item
 *
 * @param {string} title
 * @param {number} price
 * @param {string} currency
 * @param {thumb} string
 * @param {alt} string
 */
const ProductItem = ({ title, price, currency, thumb, alt }) => (
  <a className={styles.wrapper} href="#">
    <img className={styles.img} src="https://picsum.photos/220" alt={alt} />
    <h3>{title}</h3>
    <p>
      {currency}
      {price}
    </p>
  </a>
);

export default ProductItem;
