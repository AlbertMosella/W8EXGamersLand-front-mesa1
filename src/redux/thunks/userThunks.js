import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";

export const loginThunk = (userData) => async (dispatch) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}user/login`,
    userData
  );
  const userInfo = jwtDecode(data.token);
  dispatch(loginActionCreator(userInfo));
};

export const registerThunk = (userData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}user/register`, userData);
};