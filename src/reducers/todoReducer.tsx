import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodosType {
  text: string;
  id: number;
  completed: boolean;
}

interface TodosState {
  todos: TodosType[];
}

const initialState: TodosState = {
  todos: [],
};

const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<TodosType>) => {
      console.log(action.payload);
      // state.todos.push(action.payload);
    },
    updateTodo: (state: TodosState, action: PayloadAction<TodosType>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
    deleteTodo: (state: TodosState, action: PayloadAction<TodosType>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todos.actions;
export const todoReducer = todos.reducer;
