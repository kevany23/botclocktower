import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoslice";
import gameCreatorReducer from "./redux/gamecreatorslice";
import gameReducer from "./redux/gameslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    gameCreator: gameCreatorReducer,
    gameState: gameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;