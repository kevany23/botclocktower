import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoslice";
import gameCreatorReducer from "./redux/gamecreatorslice";
import gamePhaseReducer from "./redux/gamephaseslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    gameCreator: gameCreatorReducer,
    gamePhase: gamePhaseReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;