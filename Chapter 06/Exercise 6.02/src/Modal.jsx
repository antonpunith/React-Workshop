import React, { Component } from "react";
// styles
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal_content">{this.props.children}</div>
      </div>
    );
  }
}

export { Modal };
