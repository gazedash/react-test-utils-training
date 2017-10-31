import React from "react";
import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow"; // ES6
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders expected children", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children[1].props.children[0]).toBe(
    "To get started, edit "
  );
  expect(result.props.children[1]).toEqual(
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  );
});
