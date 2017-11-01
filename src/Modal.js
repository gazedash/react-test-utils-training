import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Modal extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.props.onToggle();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        {this.state.isOpen ? (
          <details>
            <p>
              Some modal text to be shown
            </p>
          </details>
        ) : null}
      </div>
    );
  }
}

export default Modal;
