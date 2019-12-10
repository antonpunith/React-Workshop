import React from "react";

import { Product } from "../Product";

const ProductListing = props => {
  const { products } = props;
  return (
    <div>
      {products.map((product, key) => (
        <Product key={key} product={product} />
      ))}
    </div>
  );
};
export { ProductListing };
