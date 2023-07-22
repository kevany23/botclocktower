/**
 * Provider file for the redux setup, made to work for Next
 */

"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}