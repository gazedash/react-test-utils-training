import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow"; // ES6

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Modal from "./Modal";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Modal />, div);
});

it("renders expected children", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Modal />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children[1]).toBe(null);
});

it("check rendered content", () => {
  const mockFunction = jest.fn();
  const element = mount(<Modal onToggle={mockFunction} />);
  const click = () => element.find("button").simulate("click");
  const findDetails = () => element.find("details");
  const checkChildren = () =>
    findDetails().contains(<p>Some modal text to be shown</p>);

  expect(checkChildren()).toBeFalsy();

  click();
  expect(checkChildren()).toBeTruthy();

  click();
  expect(checkChildren()).toBeFalsy();

  click();
  expect(checkChildren()).toBeTruthy();
});
