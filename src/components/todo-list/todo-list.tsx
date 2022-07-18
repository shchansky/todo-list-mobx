import React from "react";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "../../store";
import * as hooks from "./todo-list.hooks"

const enterKey = "Enter";

export const TodoList = observer(() => {
  const storeContext = useStoreContext();



  if (!storeContext) return null;


  return (
    <div>
      <div>
        {storeContext.todosState.todos.map((item) => (
          <>
            <div key={item.uid}>{item.value}</div>
            <button onClick={() => storeContext.todosState.delTodo(item.uid)}>
              delTodo
            </button>
          </>
        ))}
      </div>
      <textarea
        value={storeContext.formState.value}
        onChange={(ev) => {
          storeContext.formState.setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key !== enterKey) return;
          storeContext.todosState.setTodo(storeContext.formState.value);
          storeContext.formState.setValue("");
        }}
      />
      <button
        onClick={() => {
          storeContext.todosState.setTodo(storeContext.formState.value);
          storeContext.formState.setValue("");
        }}
      >
        setTodo
      </button>
      <button>Clear</button>
    </div>
  );
});


