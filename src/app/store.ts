import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoslice";
import playerReducer from "./redux/playerslice";
import gameReducer from "./redux/gameslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    players: playerReducer,
    gameState: gameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;