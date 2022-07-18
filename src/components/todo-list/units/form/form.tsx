import React from "react";
import { observer } from "mobx-react-lite";
import * as hooks from "./form.hooks";
import type { Props } from "./form.types";

export const Form = observer((props: Props) => {
  const { storeContext } = props;

  const { handleSetTodo, handleSetValue, handlePressEnter } =
    hooks.useHandlers(storeContext);

  const enterKey = "Enter";

  return (
    // <div>
    //   <textarea
    //     value={storeContext.formState.value}
    //     onChange={(ev) => {
    //       storeContext.formState.setValue(ev.target.value);
    //     }}
    //     onKeyDown={(ev) => {
    //       if (ev.key !== enterKey) return;
    //       storeContext.todosState.setTodo(storeContext.formState.value);
    //       storeContext.formState.setValue("");
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       storeContext.todosState.setTodo(storeContext.formState.value);
    //       storeContext.formState.setValue("");
    //     }}
    //   >
    //     setTodo
    //   </button>
    //   <button>Clear</button>
    // </div>

    <div>
      <textarea
        value={storeContext.formState.value}
        onChange={handleSetValue}
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
