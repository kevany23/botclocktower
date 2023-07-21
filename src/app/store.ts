import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoslice";
import playerReducer from "./redux/playerslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    players: playerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;