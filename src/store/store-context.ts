import React from "react";
import { StateManager } from "./store-state-manager";

export const StoreContext = React.createContext<StateManager | null>(null);
