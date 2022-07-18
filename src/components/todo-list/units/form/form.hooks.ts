import React from "react";

export const useHandlers = (storeContext: NonNullable<IStoreContext>) => {
  const enterKey = "Enter";

  const value = storeContext.formState.value;
  const setValue = storeContext.formState.setValue;
  const setTodo = storeContext.todosState.setTodo;




  const handleSetValue = React.useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log(ev.target.value)
      setValue(ev.target.value);
    },
    [setValue]
  );



  const handleSetTodo = React.useCallback(() => {
    setTodo(value);
    setValue("");
  }, [setValue, setTodo, value]);

  const handlePressEnter = React.useCallback(
    (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (ev.key !== enterKey) return;
      setTodo(value);
      setValue("");
    },
    [setValue, setTodo, value]
  );

  return { handleSetTodo, handleSetValue, handlePressEnter };
};