import { createSlice } from '@reduxjs/toolkit';

export enum GameCreatorPage {
  PlayerAdder,
  RoleSelect
}

interface GameCreatorState {
  players: string[],
  page: GameCreatorPage
}

export const gameCreatorSlice = createSlice({
  name: 'players',
  initialState: {
    page:  GameCreatorPage.PlayerAdder,
    players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10']
  },
  reducers: {
    addPlayer: (state: GameCreatorState, action) => {
      const name = action.payload;
      state.players.push(name);
    },
    editPlayer: (state, action) => {
      return state
    },
    deletePlayer: (state: GameCreatorState, action) => {
      const name: string = action.payload;
      for (let i = 0; i < state.players.length; i++) {
        if (state.players[i] === name) {
          state.players.splice(i, 1);
          break;
        }
      }
    },
    changePage: (state: GameCreatorState, action) => {
      state.page = action.payload as GameCreatorPage;
    }
  }
});

// this is for dispatch
export const { addPlayer, editPlayer, deletePlayer, changePage } = gameCreatorSlice.actions;

// this is for configureStore
export default gameCreatorSlice.reducer;