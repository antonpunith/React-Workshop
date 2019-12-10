import React, { Component } from "react";
// styles
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }
  render() {
    if (!this.state.showModal) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal_content">{this.props.children}</div>
      </div>
    );
  }
}

export { Modal };
