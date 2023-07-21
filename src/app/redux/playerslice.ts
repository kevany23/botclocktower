import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
  name: 'todos',
  initialState: ["bob", "joe"],
  reducers: {
    addPlayer: (state, action) => {
      const todo = {
        text: action.payload,
      };

      state.push(action.payload);
    },
    editPlayer: (state, action) => {
      return state
    }
  }
});

// this is for dispatch
export const { addPlayer, editPlayer } = playerSlice.actions;

// this is for configureStore
export default playerSlice.reducer;