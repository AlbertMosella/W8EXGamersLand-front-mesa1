import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    logged: false,
  },
  reducers: {
    login: (user, action) => ({ ...action.payload, logged: true }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
