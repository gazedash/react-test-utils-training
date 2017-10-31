import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    background: "grey"
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({ background: "red" });
  };
  render() {
    return (
      <div style={{ background: this.state.background }} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
