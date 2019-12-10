import React from "react";
// styles
import "./App.css";
// data
import productData from "./products.json";
// components
import { ProductListing } from "./Components/ProductListing";
import { Tags } from "./Components/Tags";

const App = () => {
  const { products, ingredients } = productData;
  return (
    <div className="container">
      <h1>Products</h1>
      <Tags tags={ingredients} />
      <ProductListing products={products} />
    </div>
  );
};

export default App;
