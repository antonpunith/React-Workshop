import React, { Component } from "react";

import "./product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  toggleDescription() {
    this.setState({ showDescription: !this.state.showDescription });
  }
  render() {
    const { name, price, summary } = this.props.product;
    const { showDescription } = this.state;
    return (
      <div className="product">
        <h2>{name}</h2>
        <strong>${price}</strong>
        <button onClick={this.toggleDescription}>
          {showDescription ? "-" : "+"}
        </button>
        {showDescription && <p>{summary}</p>}
      </div>
    );
  }
}

export { Product };
