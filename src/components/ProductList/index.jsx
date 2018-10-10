import React, { Fragment } from "react";
import { products } from "../../config/productsPayload";
import ProductItem from "../ProductItem";
import { config } from "../../config/config";
import styles from "./Styles.module.scss";

const ProductList = () => (
  <div className={styles.wrapper}>
    {products.map((product, i) => (
      <ProductItem
        key={`${product}-${i}`}
        title={product.title}
        thumb={product.thumb}
        alt={product.alt}
        price={product.price}
        currency={config.currency}
      />
    ))}
  </div>
);

export default ProductList;
