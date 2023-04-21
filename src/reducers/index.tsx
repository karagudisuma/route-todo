import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const reducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof reducer>;
export { reducer };
