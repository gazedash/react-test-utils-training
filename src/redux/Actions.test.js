import { addTodo } from "./Actions";

const payload = {
  error: false,
  id: 0,
  title: "First todo"
};

it("returns todo object", () => {
  expect(addTodo(payload)).toEqual({ payload, type: "ADD_TODO" });
});

it("matches the snapshot", () => {
  expect(addTodo(payload)).toMatchSnapshot();
});