import React from "react";

import "./product.css";

const Product = props => (
  <div className="product">
    <h2>{props.product.name}</h2>
  </div>
);

export { Product };
