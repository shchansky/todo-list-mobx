import React from "react";
import { observer } from "mobx-react-lite";
import { formState, todosState } from "../../store";

export const Form = observer(() => {
  return (
    <div>
      <div>
        {todosState.todos.map((item) => (
          <>
            <div key={item.uid}>{item.value}</div>
            <button onClick={() => todosState.delTodo(item.uid)}>
              delTodo
            </button>
          </>
        ))}
      </div>
      <textarea
        value={formState.value}
        onChange={(ev) => {
          formState.setValue(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          todosState.setTodo(formState.value);
          formState.setValue("");
        }}
      >
        setTodo
      </button>
      <button>Clear</button>
    </div>
  );
});
