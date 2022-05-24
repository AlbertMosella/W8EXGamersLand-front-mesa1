import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    allGames: [],
    singleGame: {},
  },
  reducers: {
    loadAllGames: (games, action) => ({ ...games, allGames: action.payload }),
    loadGame: (games, action) => ({
      ...games,
      singleGame: action.payload,
    }),
  },
});

export default gameSlice.reducer;

export const {
  loadAllGames: loadAllGamesActionCreator,
  loadGame: loadGameActionCreator,
} = gameSlice.actions;
