import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'todos',
  initialState: {
    isGameRunning: false
  },
  reducers: {
    startGame: (state) => {
      state.isGameRunning = true;
      return state
    },
    endGame: (state) => {
      state.isGameRunning = false;
      return state
    }
  }
});

// this is for dispatch
export const { startGame, endGame } = gameSlice.actions;

// this is for configureStore
export default gameSlice.reducer;