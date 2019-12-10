import React, { Component } from "react";
// styles
import "./App.css";
// data
import productData from "./products.json";
// components
import { ProductListing } from "./Components/ProductListing";
import { Tags } from "./Components/Tags";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: null
    };
  }
  render() {
    const { products, ingredients } = productData;
    const { selectedTag } = this.state;

    return (
      <div className="container">
        <h1>Products</h1>
        <Tags tags={ingredients} selectedTag={selectedTag} />
        <ProductListing products={products} selectedTag={selectedTag} />
      </div>
    );
  }
}

export default App;
