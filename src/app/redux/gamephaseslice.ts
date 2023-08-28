import { createSlice } from '@reduxjs/toolkit';
import { GamePhase } from '../types/game_state';

export const gamePhaseSlice = createSlice({
  name: 'todos',
  initialState: {
    phase: GamePhase.GAME_CREATOR
  },
  reducers: {
    setPhase: (state, action) => {
      state.phase = action.payload;
    }
  }
});

// this is for dispatch
export const { setPhase } = gamePhaseSlice.actions;

// this is for configureStore
export default gamePhaseSlice.reducer;