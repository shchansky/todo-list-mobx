import React from "react";
import { StoreContext } from "./store-context";

export const useStoreContext = () => React.useContext(StoreContext);
