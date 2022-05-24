import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import userReducer from "../features/userSlice";
const store = configureStore({
  user: userReducer,
  games: gameReducer,
});

export default store;
