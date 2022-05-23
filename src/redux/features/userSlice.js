import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
  },
  reducers: {
    login: (user, action) => ({ ...action.payload }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
