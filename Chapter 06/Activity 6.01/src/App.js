import React from "react";
// styles
import "./App.css";
// data
import productData from "./products.json";
// components
import { ProductListing } from "./Components/ProductListing";

const App = () => {
  return (
    <div className="container">
      <ProductListing products={productData.products} />
    </div>
  );
};

export default App;
