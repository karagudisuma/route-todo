import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { addTodo } from "../../reducers/todoReducer";

function Todo() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const submitHandle = () => {
    dispatch(addTodo({ text: newTask, id: 0, completed: false }));
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Add new task"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTask(e.target.value)
        }
      ></input>
      <button onClick={submitHandle}>Submit</button>
      {/* <ul>
        {todos.map((t) => {
          <li key={t.id}>{t.text}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default Todo;
