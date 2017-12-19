import React from "react";
import ReactDOM from "react-dom";
import { createMockStore } from "redux-test-utils";
import FollowersSuggestion from "../followersSuggestion";
import { mount } from 'enzyme';

describe("ConnectedShowBox", () => {
  it("should render successfully if string is not provided by store", () => {
    const testState = {
      showBox: {}
    };
    const store = createMockStore(testState);
    
    const component = mountWithStore(<FollowersSuggestion />, store);
    expect(store.getActions()).toHaveLength(1)    
    expect(component).toBeTruthy();
  });
});
