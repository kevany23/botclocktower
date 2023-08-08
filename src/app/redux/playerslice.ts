import { createSlice } from '@reduxjs/toolkit';

interface playersState {
  players: string[];
}

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    addPlayer: (state: string[], action: any) => {
      const name = action.payload;
      state.push(name);
    },
    editPlayer: (state, action) => {
      return state
    },
    deletePlayer: (state: string[], action) => {
      const name: string = action.payload;
      for (let i = 0; i < state.length; i++) {
        if (state[i] == name) {
          state.splice(i, 1)
        }
        break;
      }
    }
  }
});

// this is for dispatch
export const { addPlayer, editPlayer, deletePlayer } = playerSlice.actions;

// this is for configureStore
export default playerSlice.reducer;