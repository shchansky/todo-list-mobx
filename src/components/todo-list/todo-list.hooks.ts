export const useHandlers = (storeContext: NonNullable<IStoreContext>) => {
  const delTodo = storeContext.todosState.delTodo;

  const handleDelTodo = (uid: string) => () => {
    delTodo(uid);
  };

  return { handleDelTodo };
};
