import axios from "axios";
import {
  loadAllGamesActionCreator,
  loadGameActionCreator,
} from "../features/gameSlice";

const url = process.env.REACT_APP_API_URL;

export const loadGamesThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}games`);

  dispatch(loadAllGamesActionCreator(data));
};

export const getGameThunk = (idGame) => async (dispatch) => {
  const { data: game } = await axios.get(`${url}games/${idGame}`);

  dispatch(loadGameActionCreator(game));
};
