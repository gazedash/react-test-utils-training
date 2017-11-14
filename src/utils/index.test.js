import utils from "./index.js";

utils.fetchSomeMore = jest.fn();

it("mocking function inside function test", () => {
  const res = utils.fetchSometingWithParams();
  expect(utils.fetchSomeMore.mock.calls.length).toBe(5);
});
