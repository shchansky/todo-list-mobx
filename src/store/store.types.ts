import { StateManager } from "./store-state-manager";

declare global {
  type IStoreContext = StateManager | null;
}
