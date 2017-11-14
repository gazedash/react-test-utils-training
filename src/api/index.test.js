import api from "./index.js";
import "isomorphic-fetch";

var nock = require("nock");

var request = nock("https://localhost:80/some")
  .get("/endpoint")
  .reply(200, {
    hello: "world"
  });

var request2 = nock("https://localhost:80/some/other")
  .get("/endpoint")
  .twice()
  .reply(200, {
    hello: "another world"
  });

const fetchSomeMore = api.fetchSomeMore;
api.fetchSomeMore = jest.fn(() => fetchSomeMore());

// This is Stub:
// const utils.fetchSomeMore = jest.fn(() => { response: "<body></body>"});

it("function1 calls function 2", async () => {
  console.error = jest.fn();
  const params = { id: 8 };
  const expectedRes = { ...params, res: [1, 2, 3], hello: "world" };
  const res = await api.fetchSometingWithParams(params);
  expect(res).toEqual(expectedRes);
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(api.fetchSomeMore.mock.calls.length).toBe(3);
});
