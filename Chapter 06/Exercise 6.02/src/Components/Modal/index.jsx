import React, { Component } from "react";
// styles
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    if (!this.state.showModal) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal_content">
          {this.props.children}
          <div>
            <button onClick={this.toggleModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
