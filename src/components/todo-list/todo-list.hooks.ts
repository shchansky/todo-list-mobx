import React from "react";

export const useHandlers = (storeContext: NonNullable<IStoreContext>) => {
  const enterKey = "Enter";

  const value = storeContext.formState.value;
  const delTodo = storeContext.todosState.delTodo;
  const setValue = storeContext.formState.setValue;
  const setTodo = storeContext.todosState.setTodo;

  const handleDelTodo = React.useCallback(
    (uid: string) => () => {
      delTodo(uid);
    },
    [delTodo]
  );

  const handleSetTodo = React.useCallback(() => {
    setTodo(value);
    setValue("");
  }, [setValue, setTodo, value]);

  const handleSetValue = React.useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(ev.target.value);
    },
    [setValue]
  );

  const handlePressEnter = React.useCallback(
    (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (ev.key !== enterKey) return;
      setTodo(value);
      setValue("");
    },
    [setValue, setTodo, value]
  );

  return { handleDelTodo, handleSetTodo, handleSetValue, handlePressEnter };
};

