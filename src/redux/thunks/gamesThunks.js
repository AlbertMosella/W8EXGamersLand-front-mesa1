import axios from "axios";
import {
  loadAllGamesActionCreator,
  loadGameActionCreator,
} from "../features/gameSlice";

const url = process.env.REACT_APP_API_URL;

export const loadGamesThunk = () => (dispatch) => {
  const { data: games } = axios.get(`${url}games`);

  dispatch(loadAllGamesActionCreator(games));
};

export const getGameThunk = (idGame) => (dispatch) => {
  const { data: game } = axios.get(`${url}games/${idGame}`);

  dispatch(loadGameActionCreator(game));
};
