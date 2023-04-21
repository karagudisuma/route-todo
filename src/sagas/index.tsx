import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put, all, spawn } from "redux-saga/effects";
import { addTodo } from "../reducers/todoReducer";

interface TodosType {
  text: string;
  id: number;
  completed: boolean;
}

function* todoAddedSaga(action: PayloadAction<TodosType>) {
  const { payload } = action;
  try {
    const response: Response = yield fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    const todos: TodosType = yield response.json();
    yield put(addTodo(todos));
  } catch (error) {
    console.log(error);
  }
}

function* watchAddTodo() {
  yield takeLatest(addTodo.type, todoAddedSaga);
}

export default function* rootSaga() {
  yield spawn(watchAddTodo);
}
