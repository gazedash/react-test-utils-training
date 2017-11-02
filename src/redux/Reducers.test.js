import { addTodoReducer } from "./Reducers";

it("adds todo to state", () => {
  const initialState = [];
  const todo = {
    type: "ADD_TODO",
    payload: { title: "Some new todo" }
  };
  expect(addTodoReducer(initialState, todo)).toEqual(initialState.concat(todo.payload));
});

it("does not add empty todo to state", () => {
  const initialState = [];
  const emptyTodo = {
    type: "ADD_TODO",
    payload: {}
  };
  expect(addTodoReducer(initialState, emptyTodo)).toEqual(initialState);

  const emptyTitleTodo = emptyTodo;
  emptyTitleTodo.payload.title = "";
  expect(addTodoReducer(initialState, emptyTitleTodo)).toEqual(initialState);
});

it("doesn't react on different actions", () => {
  const initialState = [];
  expect(addTodoReducer(initialState, { type: "EDIT_TODO" })).toEqual(initialState);
  expect(
    addTodoReducer(initialState, { type: "EDIT_TODO", payload: { title: "123" } })
  ).toEqual(initialState);
});
