import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
  },
  reducers: {
    login: (user, action) => ({ ...action.payload }),
    logout: (user, action) => ({
      id: "",
      username: "",
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
