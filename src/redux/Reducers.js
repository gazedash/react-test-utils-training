import { addTodo } from './Actions';
export const addTodoReducer = (state = [], action) => {
    if (action.type === addTodo().type) {
        if (action.payload && action.payload.title) {
            return state.concat(action.payload);
        }
    }
    return state;
};