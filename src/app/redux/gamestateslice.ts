import { createSlice } from '@reduxjs/toolkit';
import { Player, PlayerInterface } from '../types/player';

interface GameState {
  players: Player[]
}

export const gamePhaseSlice = createSlice({
  name: 'GameState',
  initialState: {
    players: [] as Player[],
  },
  reducers: {
    setPlayers: (state: GameState, action) => {
      state.players = [...action.payload]
      return state;
    },
    addPlayer: (state: GameState, action) => {
      return state;
    },
    executePlayer:(state: GameState, action) => {
      return state;
    },
    killPlayer:(state: GameState, action) => {
      return state;
    },
    changePlayerState: (state: GameState, action) => {
      return state;
    }
  }
});

// this is for dispatch

// this is for configureStore
export default gamePhaseSlice.reducer;