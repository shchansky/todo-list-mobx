import React from "react";

export const useHandlers = (storeContext: NonNullable<IStoreContext>) => {
  const enterKey = "Enter";

  const value = storeContext.formState.value;
  const setValue = storeContext.formState.setValue;
  const setTodo = storeContext.todosState.setTodo;

  const handleSetValue = React.useCallback((ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(ev.target.value);
  },[setValue])

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

  const handleClear = React.useCallback(() => {
    setValue("");
  }, [setValue]);

  return { handleSetTodo, handleSetValue, handlePressEnter, handleClear };
};
