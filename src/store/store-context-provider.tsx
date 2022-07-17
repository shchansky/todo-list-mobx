import React from "react";
import { StoreContext } from "./store-context";
import { StateManager } from "./store-state-manager";

const Wrapper: React.FC<{}> = ({ children }) => {
  // const [appStateContext, setAppStateContext] = useState<Nullable<AppStateManager>>(null);
  const [appStateContext, setAppStateContext] =
    React.useState<StateManager | null>(null);

  React.useEffect(() => {
    setAppStateContext(new StateManager());
  }, []);

  return (
    <StoreContext.Provider value={appStateContext}>
      {children}
    </StoreContext.Provider>
  );
};

export const Store: React.FC<{}> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
