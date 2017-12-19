import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow"; // ES6
import { Provider } from "react-redux";
import store from "./store";

import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import App from "./App";

const Wrapped = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Wrapped, div);
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

it("enzyme: simulate click", () => {
  const mockFunction = jest.fn();
  const element = mount(<Wrapped onClick={mockFunction} />);
  element
    .find("button")
    .first()
    .simulate("click");

  const bg = element
    .children()
    .first()
    .children()
    // well...
    .first()
    .children()
    .first()
    .props().style.background;
  expect(mockFunction).toHaveBeenCalled();
  expect(bg).toBe("red");
});

it("matches the snapshot", () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<Wrapped onClick={mockFunction} />);
  // Snapshot serializer will call toJson automatically
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.prop("style")).toMatchSnapshot();
});
