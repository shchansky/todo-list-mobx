import React from "react";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "../../store";

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
