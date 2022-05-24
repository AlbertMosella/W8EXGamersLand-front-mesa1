import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    loadAllGames: (games, action) => [...action.payload],
  },
});

export default gameSlice.reducer;

export const { loadAllGames: loadAllGamesActionCreator } = gameSlice.actions;
