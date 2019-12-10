import React from "react";

import { Product } from "../Product";

const ProductListing = props => {
  const { products } = props;
  return (
    <div>
      <h1>Products</h1>
      {products.map((product, key) => (
        <Product key={key} product={product} />
      ))}
    </div>
  );
};
export { ProductListing };
