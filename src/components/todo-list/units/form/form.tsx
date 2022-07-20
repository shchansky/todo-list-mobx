import React from "react";
import { observer } from "mobx-react-lite";
import * as hooks from "./form.hooks";
import type { Props } from "./form.types";

export const Form = observer((props: Props) => {
  const { storeContext } = props;

  const { handleSetTodo, handleSetValue, handlePressEnter, handleClear } =
    hooks.useHandlers(storeContext);

  return (
    <div>
      <textarea
        value={storeContext.formState.value}
        onChange={handleSetValue}
        onKeyDown={handlePressEnter}
      />
      <button onClick={handleSetTodo}>setTodo</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
});
