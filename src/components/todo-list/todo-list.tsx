import React from "react";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "../../store";
import * as Units from "./units";
import * as hooks from "./todo-list.hooks";

export const TodoList = observer(() => {
  const storeContext = useStoreContext();

  if (!storeContext) return null;

  const { handleDelTodo } = hooks.useHandlers(storeContext);

  return (
    <div>
      <Units.Form storeContext={storeContext} />
      <div>
        {storeContext.todosState.todos.map((item) => (
          <div key={item.uid}>
            <div>{item.value}</div>
            <button onClick={handleDelTodo(item.uid)}>delTodo</button>
          </div>
        ))}
      </div>
    </div>
  );
});
