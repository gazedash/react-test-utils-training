import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

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

it("simulates click and changes background", () => {
  const mockFunction = jest.fn();
  const element = ReactTestUtils.renderIntoDocument(
    <App onClick={mockFunction} />
  );
  const app = ReactDOM.findDOMNode(element);
  const button = app.children[2];
  ReactTestUtils.Simulate.click(button);
  expect(mockFunction).toHaveBeenCalled();
  expect(app.style.background).toBe("red");
});

it("enzyme: simulate click", () => {
  const mockFunction = jest.fn();
  const element = mount(<App onClick={mockFunction} />);
  element.find("button").simulate("click");
  expect(mockFunction).toHaveBeenCalled();
});

it("matches the snapshot", () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<App onClick={mockFunction} />);
  // Snapshot serializer will call toJson automatically
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.prop("style")).toMatchSnapshot();
});
